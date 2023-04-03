import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <Container
      display={"flex"}
      h={350}
      maxW="full"
      px={360}
      backgroundImage="url('/assets/counter-bg.jpg')"
      backgroundSize={"cover"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundAttachment={"fixed"}
      alignItems="center"
      justifyContent={"center"}
    >
      <Grid
        w={"full"}
        templateColumns="repeat(4, 1fr)"
        color="#fff"
        justifyItems="space-between"
      >
        <GridItem
          w="100%"
          fontSize={70}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          860
          <Text fontSize={20}>Properties on Map</Text>
        </GridItem>
        <GridItem
          w="100%"
          fontSize={70}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          <CountUp end={29} delay={2} />
          <Text fontSize={20}>Professional Agents</Text>
        </GridItem>
        <GridItem
          w="100%"
          fontSize={70}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          <CountUp end={10} suffix="K" delay={2} />
          <Text fontSize={20}>Happy Clients</Text>
        </GridItem>
        <GridItem
          w="100%"
          fontSize={70}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          <CountUp end={15} delay={2} />
          <Text fontSize={20}>New Apartments Daily</Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Counter;
