import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Button,
  Flex,
  InputRightElement,
  InputGroup,
  Spinner,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import { ErrorMessage, Field, Formik } from "formik";
import { SigninSchema } from "./login";
import * as Yup from "yup";
import axios from "axios";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useRouter } from "next/router";

const RegisterSchema = SigninSchema.shape({
  username: Yup.string().required("Username field is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("confirm password field is required"),
});

const RegisterUserForm = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const handleClick = () => setShow(!show);
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/register", values);
      setLoading(false);
      toast({
        description: res.data.message,
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      router.push("/login");
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
        <Heading border={2} borderStyle={"double"} w="fit-content" mx={"auto"} px="3" py="1" borderColor={"teal.400"} color="teal">
          Bookly
        </Heading>
        <Heading size="md" mt="8" textAlign={"center"}>
          Create Account
        </Heading>
        <Divider mb="6" mt="2" variant={"solid"} />
        <Formik initialValues={{ email: "", password: "", username: "" }} onSubmit={handleSubmit} validationSchema={RegisterSchema}>
          {({ handleSubmit, setFieldTouched }) => (
            <>
              <FormControl isRequired>
                <Box mb="6">
                  <FormLabel htmlFor="username" fontWeight={"bold"}>
                    Username
                  </FormLabel>
                  <Field
                    as={Input}
                    type="username"
                    name="username"
                    variant={"flushed"}
                    placeholder="Input your username"
                    onKeyUp={() => setFieldTouched("username", true)}
                    w={{ sm: "260px", md: "400px" }}
                  />
                  <ErrorMessage
                    name={"username"}
                    render={(msg) => (
                      <Box fontSize={"sm"} color={"red.500"} mt={1} textAlign={"left"}>
                        {msg}
                      </Box>
                    )}
                  />{" "}
                </Box>
              </FormControl>
              <FormControl isRequired>
                <Box mb="6">
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
                <Box mb="6">
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
              </FormControl>{" "}
              <FormControl isRequired>
                <Box mb="3">
                  <FormLabel fontWeight={"bold"} htmlFor="confirm_password">
                    Confirm password
                  </FormLabel>
                  <InputGroup size="md">
                    <Field
                      as={Input}
                      type={show ? "text" : "confirm_password"}
                      variant={"flushed"}
                      placeholder="Re enter password"
                      name="confirm_password"
                      onKeyUp={() => setFieldTouched("confirm_password", true)}
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
                    name={"confirm_password"}
                    render={(msg) => (
                      <Box fontSize={"sm"} color={"red.500"} mt={1} textAlign={"left"}>
                        {msg}
                      </Box>
                    )}
                  />{" "}
                </Box>
              </FormControl>{" "}
              <Button colorScheme={"teal"} type="submit" mt="4" mb="4" onClick={() => handleSubmit()} w={"40"} py={6}>
                {loading ? <Spinner /> : "Register"}
              </Button>
            </>
          )}
        </Formik>
        <Flex gap="3px" justifyContent={"center"} flexDirection={{ sm: "column", md: "row" }}>
          Already have an account?{" "}
          <Link href="/login">
            <Text color={"#4ae"}> Login</Text>
          </Link>{" "}
        </Flex>
      </Box>
    </Flex>
  );
};

export default RegisterUserForm;
