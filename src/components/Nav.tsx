import { Button, Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import Cookies from "js-cookie";

const Nav = () => {
  const router = useRouter();

  const handleLogout = async () => {
    Cookies.remove("token");
    router.push("/");
  };

  return (
    <Flex
      p={4}
      px={{ base: "5", md: "12" }}
      bg="white"
      shadow="md"
      alignItems={"center"}
      justifyContent="space-between"
      pos="sticky"
      top="0"
      w="full"
      zIndex={500}
    >
      <Heading border={2} borderStyle={"double"} px="3" py="1" borderColor={"teal.400"} color="teal" w="fit-content">
        <Link href="/"> Bookly </Link>
      </Heading>
      <Button colorScheme="teal" variant="outline" leftIcon={<FiLogOut />} onClick={handleLogout}></Button>
    </Flex>
  );
};

export default Nav;
