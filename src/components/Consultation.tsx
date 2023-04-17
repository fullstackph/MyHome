import React, { useState } from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Text,
  Input,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Button,
  ButtonGroup,
  FormControl,
} from "@chakra-ui/react";

const Consultation = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const isError = input === "";

  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  return (
    <Flex px={{ base: 10, lg: 350 }} gap={"4rem"}>
      <Box backgroundColor={"#31323C"} width="75%" pt={50} pb={70} px={50}>
        <Text
          color={"#fff"}
          fontSize="40px"
          letterSpacing={1.5}
          lineHeight={1.5}
        >
          Get a Free Consultation
        </Text>
        <FormControl isRequired>
          <Input
            value={input}
            placeholder="E-mail"
            onChange={handleInputChange}
          />
          <Input value={input} placeholder="Message" />
        </FormControl>

        <Button type="submit" onClick={(e) => e} colorScheme="blue">
          Button
        </Button>
      </Box>

      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default Consultation;
