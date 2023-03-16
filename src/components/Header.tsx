import { Box, Flex, Text, Icon, Stack } from "@chakra-ui/react";
import React from "react";
import { HiPhone, HiOutlineEnvelope, BiLogIn } from "@/utils/icons";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <>
      <Box>
        <Flex
          minH={50}
          borderBottom="1px solid #E1E1E1"
          justifyContent="space-between"
          display={{ base: "none", md: "flex" }}
          px={{ base: "10", md: "50", lg: "350" }}
        >
          <Box display="flex" alignItems="center">
            <Flex
              justifyContent="center"
              alignItems="center"
              borderRight="1px solid #E1E1E1"
              px={5}
            >
              <Icon color="#BC986B" as={HiPhone} mr={2} />
              <Text>1-800-1234-567</Text>
            </Flex>
            <Flex alignItems="center" justifyContent="center" px={5}>
              <Icon color="#BC986B" as={HiOutlineEnvelope} mr={2} />

              <Text>info@demolink.org</Text>
            </Flex>
          </Box>
          <Flex alignItems="center">
            <Icon color="#BC986B" as={BiLogIn} mr={2} />
            <Text>Login/Register</Text>
          </Flex>
        </Flex>
        <Navbar />
      </Box>
    </>
  );
};

export default Header;
