import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { HiPhone, HiOutlineEnvelope, BiLogIn } from "@/utils/icons";

const Header = () => {
  return (
    <Box>
      <Box>
        <HiPhone />
        <Text>1-800-1234-567</Text>
        <HiOutlineEnvelope />
        <Text>info@demolink.org</Text>
      </Box>
      <Box>
        <BiLogIn />
        <Text>Login/Register</Text>
      </Box>
    </Box>
  );
};

export default Header;
