import { NextApiHandler } from "next";
import { getXataClient } from "../../../utils/xata";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { promisify } from "util";
import cookie from "cookie";
const { JWT_SECRET_KEY } = process.env;

const compare = promisify(bcrypt.compare);

const handler: NextApiHandler = async (req, res) => {
  const { email, password } = req.body;
  const xata = getXataClient();
  const user = await xata.db.User.filter({ email }).getFirst();

  // validate
  if (!(user && (await compare(password, user.password)))) {
    return res.status(400).json({ success: false, message: "Username or password is incorrect!" });
  }
  // create a jwt token that is valid for 7 days
  const token = jwt.sign({ sub: user.id }, JWT_SECRET_KEY, { expiresIn: "7d" });
  user.update({ token: token });

  // set the jwt token as a cookie
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", token, {
      maxAge: 24 * 60 * 60, // 1 day
      sameSite: "strict",
      path: "/",
    })
  );

  return res.status(200).json({
    id: user.id,
    username: user.username,
    email: user.email,
    token: token,
  });
};
export default handler;
