import { XataClient } from "../../utils/xata";
import BookForm from "../../src/components/BookForm";
import { Flex } from "@chakra-ui/react";
import Nav from "../../src/components/Nav";

const AddBookForm = () => {
  return (
    <Flex minHeight={"100vh"} flexDirection="column">
      <Nav />
      <BookForm />
    </Flex>
  );
};

const xata = new XataClient();

export const getServerSideProps = async () => {
  const books = await xata.db.Book.getFirst();
  return { props: { books } };
};

export default AddBookForm;
