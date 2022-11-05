import { NextApiHandler } from "next";
import { getXataClient } from "../../../utils/xata";
import bcrypt from "bcrypt";
import { promisify } from "util";

//const compare = promisify(bcrypt.compare)
const hash = promisify(bcrypt.hash);

const handler: NextApiHandler = async (req, res) => {
  const { email, username, password } = req.body;
  const xata = getXataClient();
  //validate
  const emailExists = await xata.db.User.filter({ email }).getFirst();
  const usernameExists = await xata.db.User.filter({ username }).getFirst();
  if (usernameExists) {
    return res.status(400).json({ success: false, message: "Username already exists! " });
  } else if (emailExists) {
    return res.status(400).json({ success: false, message: "User with the email already exists!" });
  }

  // user doesn't exist
  await xata.db.User.create({
    username: username,
    email: email,
    password: await hash(password, 10),
  });
  return res.status(201).json({
    message: "user created",
  });
};
export default handler;
