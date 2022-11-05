import { Box, Button, Divider, FormControl, FormLabel, Heading, Input, Spinner, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { ErrorMessage, Field, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { Book } from "../../utils/xata";
import useUploadImage from "../hooks/useUploadImage";
import InputBox from "./InputBox";
import config from "../config/config";

export const BookformSchema = Yup.object().shape({
  title: Yup.string().required("Title field is required"),
  author: Yup.string().required("Author field is required"),
  genre: Yup.string().required("Genre field is required"),
  yearPublished: Yup.string().required("Year Published field is required").nullable(),
  document_url: Yup.mixed().required("Document field is required"),
});

const initialBookValues: Partial<Book> = {
  title: "",
  author: "",
  genre: "",
  yearPublished: null,
  document_url: "",
};

const BookForm = ({ isEdit, data }: { isEdit?: boolean; data?: any }) => {
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();
  const { onChange, image } = useUploadImage();
  const [user, setUser] = React.useState(null);
  const router = useRouter();

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  }, []);

  const handleSubmit = async (values: Partial<Book>) => {
    setLoading(true);
    try {
      if (!isEdit) {
        const instance = axios.create();
        delete instance.defaults.headers.common.authorization;
        const imgData = new FormData();
        imgData.append("file", image?.file);
        imgData.append("upload_preset", "bookly");
        const { data: cloudinaryResponse } = await instance.post(`https://api.cloudinary.com/v1_1/${config?.cloudinary_name}/image/upload`, imgData);
        await axios.post(`/api/book/create`, {
          ...values,
          uploadDate: new Date(),
          document_url: cloudinaryResponse.secure_url,
          added_by: user.id,
          fileSize: image?.file.size.toString(),
        });
      } else {
        await axios.post(`/api/book/update`, {
          title: values.title,
          author: values.author,
          genre: values.genre,
          yearPublished: values.yearPublished,
          id: data?.id,
        });
      }
      router.push("/gallery");
    } catch (error) {
      setLoading(false);
      toast({
        description: error?.response?.data.message,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box mx="auto" textAlign={"center"} borderRadius={20} mt={{ sm: "8", md: "9" }}>
      <Heading size="md" textAlign={"center"}>
        Add New Book
      </Heading>
      <Divider mb="6" mt="2" variant={"solid"} />
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          ...initialBookValues,
          title: data?.title,
          author: data?.author,
          genre: data?.genre,
          yearPublished: data?.yearPublished,
          document_url: data?.document_url,
          id: data?.id,
        }}
        validationSchema={BookformSchema}
        enableReinitialize
      >
        {({ handleSubmit, setFieldTouched, values }) => (
          <>
            <InputBox name="title" label="Book Title" setFieldTouched={setFieldTouched} placeholder="Enter Book title" value={values?.title} />
            <InputBox name="author" label="Book Author" setFieldTouched={setFieldTouched} placeholder="Enter Author's name" value={values?.author} />
            <InputBox name="genre" label="Book Genre" setFieldTouched={setFieldTouched} placeholder="Enter Book genre" value={values?.genre} />
            <InputBox
              name="yearPublished"
              label="Year Published"
              setFieldTouched={setFieldTouched}
              placeholder="01/ 12 / 1900"
              value={values?.yearPublished}
            />
            {!isEdit && (
              <Box mb="5">
                <FormControl>
                  <FormLabel htmlFor="imageUpload" fontWeight={"bold"}>
                    Document{" "}
                    <Box as="span" color="red.500">
                      *
                    </Box>
                  </FormLabel>
                  <FormLabel border="2px dashed lightgrey" h="90px" w="100%" textAlign={"center"} onChange={onChange} htmlFor="imageUpload">
                    <Text mt="8" color="gray">
                      {image?.preview ? image?.file?.name : "Upload Document"}
                    </Text>
                    <Field as={Input} type="file" name="document_url" accept={["application/*, image/*"]} display="none" id="imageUpload" />
                  </FormLabel>
                </FormControl>
                <ErrorMessage
                  name={"document_url"}
                  render={(msg) => (
                    <Box fontSize={"sm"} color={"red.500"} mt={1} textAlign={"left"}>
                      {msg}
                    </Box>
                  )}
                />
              </Box>
            )}

            <Button colorScheme={"teal"} type="submit" mt="4" mb="4" onClick={() => handleSubmit()} w={"40"} py={6}>
              {loading ? <Spinner /> : isEdit ? "Update Book" : "Add Book"}
            </Button>
          </>
        )}
      </Formik>
    </Box>
  );
};

export default BookForm;
