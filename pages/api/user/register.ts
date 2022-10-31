import { NextApiHandler } from "next";
import { getXataClient } from "../../../utils/xata";
import bcrypt from "bcrypt";
import { promisify } from "util";

//const compare = promisify(bcrypt.compare)
const hash = promisify(bcrypt.hash)

const handler: NextApiHandler = async (req, res) => {
    const { email, username, password } = req.body;
    const xata = getXataClient();
    const user = await xata.db.User.filter({ email }).getFirst()
    // user doesn't exist
    if (!user) {
        await xata.db.User.create({
            username: username,
            email: email,
            password: await hash(password, 10)
        })
        return res.status(201).json({
            message: "user created"
        });
    } else {
        throw 'Username or Email already exist';
    }

}
export default handler;