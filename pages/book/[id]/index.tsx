import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BookForm from "../../../src/components/BookForm";
import Nav from "../../../src/components/Nav";
import { XataClient } from "../../../utils/xata";

const AddBookForm = ({ data }) => {
  return (
    <Flex minHeight={"100vh"} flexDirection="column">
      <Nav />
      <BookForm isEdit data={data} />
    </Flex>
  );
};

const xata = new XataClient();

export const getServerSideProps = async ({ params }) => {
  const data = await xata.db.Book.filter({ id: params.id }).getFirst();
  return { props: { data } };
};

export default AddBookForm;
