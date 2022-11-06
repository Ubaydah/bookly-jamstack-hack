import { NextApiHandler } from "next";
import { getXataClient } from "../../../utils/xata";

const handler: NextApiHandler = async (req, res) => {
  const xata = getXataClient();
  const books = await xata.db.Book.getMany();

  res.status(200).json({
    data: books,
  });
};
export default handler;
