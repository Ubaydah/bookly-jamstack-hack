import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ErrorMessage, Field } from "formik";
import React from "react";

const InputBox = ({
  label,
  setFieldTouched,
  name,
  placeholder,
  handleSubmit,
  value,
}: {
  label: string;
  setFieldTouched: any;
  name: string;
  placeholder: string;
  value: string;
  handleSubmit?: () => void;
}) => {
  return (
    <FormControl isRequired>
      <Box mb="4">
        <FormLabel htmlFor={name} fontWeight={"bold"}>
          {label}
        </FormLabel>
        <Field
          as={Input}
          focusBorderColor="teal.500"
          type="text"
          value={value || ""}
          name={name}
          onKeyUp={() => setFieldTouched(name, true)}
          onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === "Enter" && handleSubmit) {
              handleSubmit();
            }
          }}
          w={{ sm: "260px", md: "400px" }}
          placeholder={placeholder}
        />
        <ErrorMessage
          name={name}
          render={(msg) => (
            <Box fontSize={"sm"} color={"red.500"} mt={1} textAlign={"left"}>
              {msg}
            </Box>
          )}
        />
      </Box>
    </FormControl>
  );
};

export default InputBox;
