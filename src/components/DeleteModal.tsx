import { SmallCloseIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { AlertIcon, Box, Button, Flex, Grid, GridItem, Spinner, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { FC, useState } from "react";

interface CProps {
  close: () => void;
  title?: string;
  id?: string;
}

const DeleteModal: FC<CProps> = ({ close, title, id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await axios.post("/api/book/delete", { id });
      toast({
        description: "Book deleted successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      router.reload();
      close();
    } catch (err) {
      setIsLoading(false);
      toast({
        description: err.response.data.message,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box>
      <Box px="2" py="2">
        <Flex justifyContent="flex-end">
          <SmallCloseIcon onClick={close} cursor="pointer" w="24px" h="24px">
            &times;
          </SmallCloseIcon>
        </Flex>
        <Flex alignItems="center" mx="4" mt="8" flexDir={"column"}>
          <WarningTwoIcon color="red.500" w="30px" h="30px" />
          <Text textAlign={"center"} mt="8">
            Are you sure you want to remove <b>{title}</b>?
          </Text>
        </Flex>
      </Box>

      <Grid templateColumns={"repeat(2, 1fr)"} my="12" gap="8" w="full" py="2" px={{ sm: "2", md: "8" }}>
        <GridItem
          justifyContent={"center"}
          textAlign="center"
          color={"teal"}
          py="4"
          border="2px solid teal"
          borderRadius={"12px"}
          onClick={close}
          cursor="pointer"
        >
          <Text>No, go back</Text>
        </GridItem>
        <GridItem
          justifyContent={"center"}
          color="white"
          textAlign="center"
          bg={"teal"}
          py="4"
          border="2px solid teal"
          borderRadius={"12px"}
          cursor="pointer"
          onClick={handleDelete}
          _hover={{
            bg: "white",
            color: "teal",
          }}
        >
          {isLoading ? (
            <div className="flex items-center justify-center w-full">
              <Spinner />
            </div>
          ) : (
            <p className="text-white cursor-default">Yes, Delete</p>
          )}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DeleteModal;
