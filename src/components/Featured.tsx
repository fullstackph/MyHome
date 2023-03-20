import { Container, Box, Flex, Text, Link } from "@chakra-ui/react";
import Heading from "./Headings";
import React from "react";
import FeaturedCard from "./FeaturedCard";

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
      <Box>
        <FeaturedCard
          image={"f1.jpg"}
          price={"$5000 \\mo"}
          label={"401 Biscayne Boulevard, Miami"}
          ft={"480 Sq Ft"}
          bath={"2 Bathrooms"}
          bed={"2 Bedrooms"}
          gr={"1 Garage"}
        />
      </Box>
    </Container>
  );
};
