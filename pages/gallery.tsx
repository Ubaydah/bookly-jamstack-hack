import { Box, Text, Flex, Divider, Spinner } from "@chakra-ui/react";
import { Book, XataClient } from "../utils/xata";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { formatBytes } from "../utils";
import { FaCloudDownloadAlt, FaCloudUploadAlt } from "react-icons/fa";
import Link from "next/link";
import Popup from "reactjs-popup";
import DeleteModal from "../src/components/DeleteModal";
import { ReactNode, useEffect, useState } from "react";
import Nav from "../src/components/Nav";
import axios from "axios";

const fields = [
  { key: "author", value: "Author" },
  { key: "genre", value: "Genre" },
  { key: "yearPublished", value: "Year Published" },
  { key: "fileSize", value: "File Size" },
];

const Gallery = () => {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    if (user?.id) {
      axios
        .post(`/api/book/get`, { userId: user?.id })
        .then((res) => {
          setBooks(res.data?.data);
          setLoading(false);
        })
        .then(() => {
          setLoading(false);
        });
    }
  }, [user]);

  return (
    <Flex minHeight={"100vh"} flexDirection="column" bg="gray.100">
      <Nav />
      <Box p={{ base: "5", md: "12" }}>
        <Link href={"/book"} rel="noopener noreferrer">
          <Flex
            color="white"
            display={"flex"}
            bgGradient="linear(to-l, teal, black)"
            alignItems="center"
            justifyContent={"center"}
            mx="auto"
            _hover={{
              bg: "white",
              color: "teal",
              border: "2px solid teal",
            }}
            py="12px"
            px={"30px"}
            w="fit-content"
            cursor={"pointer"}
          >
            <FaCloudUploadAlt fontSize={"18px"} />
            <Text pl="3">Upload new document</Text>
          </Flex>
        </Link>
        {!loading ? (
          <Flex gap="6" wrap={"wrap"} justifyContent="start" flexDirection={{ base: "column", md: "row" }} marginTop="12">
            {books?.map((item: any, index: number) => (
              <Box
                border={2}
                bg={"teal.100"}
                borderRadius={10}
                boxShadow={"lg"}
                w={{ md: 500 }}
                pos="relative"
                key={index}
                bgGradient="linear(to-l, teal.100, teal.200)"
              >
                <Box px="10" py="3">
                  <Flex justifyContent="space-between" alignItems="center" px="4" py="2" right={2} top="2" gap={3} zIndex="10" pos="absolute">
                    <Link href={`book/${item?.id}` || ""}>
                      <EditIcon w={6} h={6} color="teal.500" cursor={"pointer"} />
                    </Link>
                    <Popup
                      trigger={<DeleteIcon w={6} h={6} color="red.500" cursor={"pointer"} />}
                      className="w-[9rem]"
                      modal
                      contentStyle={{ width: "476px" }}
                    >
                      {((close: any) => <DeleteModal close={close} id={item.id} title={item.title} />) as unknown as ReactNode}
                    </Popup>
                  </Flex>
                  <Text fontWeight="bold" mt="5" color="teal" textTransform={"uppercase"} fontSize="xl">
                    {item?.title}
                  </Text>
                </Box>
                <Divider mt="3" variant={"solid"} color="teal.100" />
                <Box bg="white" padding="8">
                  {fields?.map(({ key, value }, index) => (
                    <Box key={index} textTransform="capitalize" mt="1">
                      <Text as="span" fontWeight={"semibold"} mr="2">
                        {value}:
                      </Text>
                      {key === "fileSize" ? (
                        formatBytes(item?.[key])
                      ) : key === "author" ? (
                        <Text as="span" fontWeight={"bold"} textTransform="uppercase">
                          {item?.[key]}
                        </Text>
                      ) : (
                        item?.[key]
                      )}
                    </Box>
                  ))}
                  <Flex
                    justifyContent={"space-between"}
                    flexDirection={{
                      base: "column",
                      md: "row",
                    }}
                    gap="4"
                    alignItems={"center"}
                    mt={{ base: "12", md: "5" }}
                    mb="5"
                  >
                    <Text>
                      <Text as="span" fontWeight={"semibold"}>
                        Uploaded on:
                      </Text>{" "}
                      {new Date(item?.uploadDate).toLocaleDateString()}
                    </Text>
                    <Link href={item?.document_url || ""} target="_blank" rel="noopener noreferrer">
                      <Flex
                        border={"2px solid teal"}
                        color="teal"
                        display={"flex"}
                        alignItems="center"
                        justifyContent={"center"}
                        _hover={{
                          bg: "teal",
                          color: "white",
                        }}
                        py="8px"
                        px={"20px"}
                        borderRadius={10}
                        cursor={"pointer"}
                      >
                        <FaCloudDownloadAlt fontSize={"18px"} />
                        <Text pl="3">Download</Text>
                      </Flex>{" "}
                    </Link>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Flex>
        ) : (
          <Flex minH={"calc(100vh - 500px)"} alignItems={"center"} justifyContent="center">
            <Spinner />
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default Gallery;
