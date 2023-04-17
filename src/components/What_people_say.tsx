import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import Heading1 from "./Headings";

const What_people_say = () => {
  return (
    <Container maxW={"full"} bg={"#f3f4f9"}>
      <Flex>
        <Heading1 label="What People Say" />
        <Flex
          alignItems={"center"}
          pr={{ sm: "10px", md: "50px", lg: "450px" }}
        ></Flex>
      </Flex>
      <TestimonialCard />
    </Container>
  );
};

export default What_people_say;
