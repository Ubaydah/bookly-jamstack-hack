import { NextApiHandler } from "next";
import { getXataClient } from "../../../utils/xata";

const handler: NextApiHandler = async (req, res) => {
  const xata = getXataClient();
  const book = await xata.db.Book.create(req.body);

  res.status(201).json({
    data: book,
  });
};
export default handler;
