import { NextApiHandler } from "next";
import { getXataClient } from "../../../utils/xata";

const handler: NextApiHandler = async (req, res) => {
  const { id } = req.body;
  const xata = getXataClient();
  await xata.db.Book.delete(id);
  res.end();
};

export default handler;
