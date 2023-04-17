import { Box, Container, Grid, GridItem, Text, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <Container
      display={"flex"}
      h={350}
      maxW="full"
      px={{ base: 20, xl: 360 }}
      backgroundImage="url('/assets/counter-bg.jpg')"
      backgroundSize={"cover"}
      backgroundPosition="center calc(50% + 10px)"
      backgroundRepeat="no-repeat"
      backgroundAttachment={"fixed"}
      alignItems="center"
      justifyContent={"center"}
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        w={"full"}
        color="#fff"
        justifyItems="space-between"
      >
        <Box
          w="100%"
          fontSize={{ base: 36, lg: 70 }}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          860
          <Text fontSize={{ base: 12, md: 20 }}>Properties on Map</Text>
        </Box>
        <Box
          w="100%"
          fontSize={{ base: 36, lg: 70 }}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          <CountUp end={29} delay={2} />
          <Text fontSize={{ base: 12, md: 20 }}>Professional Agents</Text>
        </Box>
        <Box
          w="100%"
          fontSize={{ base: 36, lg: 70 }}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          <CountUp end={10} suffix="K" delay={2} />
          <Text fontSize={{ base: 12, md: 20 }}>Happy Clients</Text>
        </Box>
        <Box
          w="100%"
          fontSize={{ base: 36, lg: 70 }}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          <CountUp end={15} delay={2} />
          <Text fontSize={{ base: 12, md: 20 }}>New Apartments Daily</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Counter;
