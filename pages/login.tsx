import React from "react";
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  InputGroup,
  InputRightElement,
  Flex,
  Spinner,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import { Formik, Field, ErrorMessage } from "formik";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";

export const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email field is required"),
  password: Yup.string().required("Password field is required"),
});

const LoginUserForm = () => {
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();
  const router = useRouter();
  const handleClick = () => setShow(!show);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/user/login", values);
      localStorage.setItem("user", JSON.stringify(data));
      router.push("/gallery");
    } catch (err) {
      setLoading(false);
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
    <Flex minHeight={"100vh"} justifyContent="center" alignItems="center">
      <Box mx="auto" textAlign={"center"} borderRadius={20}>
        <Heading border={2} borderStyle={"double"} px="3" py="1" borderColor={"teal.400"} color="teal" w="fit-content" mx="auto">
          <Link href="/"> Bookly </Link>
        </Heading>
        <Heading size="md" mt="8" textAlign={"center"}>
          Login to Bookly{" "}
        </Heading>
        <Divider mb="6" mt="2" variant={"solid"} />
        <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit} validationSchema={SigninSchema}>
          {({ handleSubmit, setFieldTouched }) => (
            <>
              <FormControl isRequired>
                <Box mb="8">
                  <FormLabel htmlFor="email" fontWeight={"bold"}>
                    Email
                  </FormLabel>
                  <Field
                    as={Input}
                    type="email"
                    name="email"
                    variant={"flushed"}
                    placeholder="Input your email"
                    onKeyUp={() => setFieldTouched("email", true)}
                    w={{ sm: "260px", md: "400px" }}
                  />
                  <ErrorMessage
                    name={"email"}
                    render={(msg) => (
                      <Box fontSize={"sm"} color={"red.500"} mt={1} textAlign={"left"}>
                        {msg}
                      </Box>
                    )}
                  />{" "}
                </Box>
              </FormControl>
              <FormControl isRequired>
                <Box mb="3">
                  <FormLabel fontWeight={"bold"} htmlFor="password">
                    Password
                  </FormLabel>
                  <InputGroup size="md">
                    <Field
                      as={Input}
                      type={show ? "text" : "password"}
                      variant={"flushed"}
                      placeholder="Input your password"
                      name="password"
                      onKeyUp={() => setFieldTouched("password", true)}
                      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                        if (e.key === "Enter") {
                          handleSubmit();
                        }
                      }}
                    />
                    <InputRightElement width="4.5rem">
                      <Box onClick={handleClick}>
                        {show ? <BsFillEyeFill fontSize={20} color={"grey"} /> : <BsFillEyeSlashFill fontSize={20} color="grey" />}
                      </Box>
                    </InputRightElement>
                  </InputGroup>
                  <ErrorMessage
                    name={"password"}
                    render={(msg) => (
                      <Box fontSize={"sm"} color={"red.500"} mt={1} textAlign={"left"}>
                        {msg}
                      </Box>
                    )}
                  />{" "}
                </Box>
              </FormControl>
              <Button colorScheme={"teal"} type="submit" mt="4" mb="4" onClick={() => handleSubmit()} w={"40"} py={6}>
                {loading ? <Spinner /> : "Login"}
              </Button>
            </>
          )}
        </Formik>
        <Flex gap="3px" justifyContent={"center"} flexDirection={{ sm: "column", md: "row" }}>
          Don't have an account?{" "}
          <Link href="/register">
            <Text color={"#4ae"}> Create Account</Text>
          </Link>{" "}
        </Flex>
      </Box>
    </Flex>
  );
};

export default LoginUserForm;
