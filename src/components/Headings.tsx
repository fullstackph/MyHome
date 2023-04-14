import React from "react";
import { RxDotFilled } from "@/utils/icons";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";

interface Props {
  label: string;
}
const Heading: React.FC<Props> = ({ label }) => {
  return (
    <Flex w={"full"} alignItems={"center"}>
      <Box
        h={"1px"}
        ml={{ base: "-15px", lg: "0" }}
        w={{ base: "75px", sm: "100px", md: "200px", lg: "490px" }}
        bg="#c2d3f2"
      ></Box>
      <Icon as={RxDotFilled} ml={"-13px"} boxSize={10} color="#BC986B" />
      <Text fontSize={{ base: "24px", lg: "40px" }} fontWeight={"400"}>
        {label}
      </Text>
    </Flex>
  );
};

export default Heading;
