import { Container, Box, Flex, Text, Link } from "@chakra-ui/react";
import Heading from "./Headings";
import React from "react";

export const Featured = () => {
  return (
    <Container py={"115px"} maxW={"full"} bg={"#F3F4F9"}>
      <Flex>
        <Heading label="Featured Properties" />
        <Flex
          alignItems={"center"}
          pr={{ sm: "10px", md: "50px", lg: "350px" }}
        >
          <Link
            fontSize={"14px"}
            fontWeight={"400"}
            color={"#9a9a9a"}
            textTransform={"uppercase"}
            whiteSpace={"nowrap"}
            _hover={{
              textDecoration: "none",
              color: "#BC986B",
            }}
          >
            for rent
          </Link>
          <Box h={"17px"} w={"2px"} mx={"10px"} bg={"#e1e1e1"}></Box>
          <Link
            fontSize={"14px"}
            fontWeight={"400"}
            color={"#9a9a9a"}
            textTransform={"uppercase"}
            whiteSpace={"nowrap"}
            _hover={{
              textDecoration: "none",
              color: "#BC986B",
            }}
          >
            for sale
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};
