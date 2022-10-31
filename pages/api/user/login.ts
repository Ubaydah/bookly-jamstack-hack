import { NextApiHandler } from "next";
import { getXataClient } from "../../../utils/xata";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import getConfig from 'next/config';
import { promisify } from "util";

const compare = promisify(bcrypt.compare)
const { serverRuntimeConfig } = getConfig();

const handler: NextApiHandler = async (req, res) => {
    const { email, password } = req.body;
    const xata = getXataClient();
    const user = await xata.db.User.filter({ email }).getFirst()
    // validate
    if (!(user && compare(password, user.password))) {
        throw 'Username or password is incorrect';
    }
    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.id }, serverRuntimeConfig.JWT_SECRET_KEY, { expiresIn: '7d' });
    user.update({ token: token })
    // return basic user details and token
    return res.status(200).json({
        id: user.id,
        username: user.username,
        email: user.email,
        token
    });
}
export default handler;