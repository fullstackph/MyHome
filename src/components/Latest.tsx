import React from "react";
import { Container, SimpleGrid } from "@chakra-ui/react";
import Heading from "./Headings";
import BlogCard from "./BlogCard";

const Latest = () => {
  return (
    <Container py={20} maxW={"full"} bg={"#F3F4F9"}>
      <Heading label="Latest Blog Posts" />
      <SimpleGrid
        px={{ base: "10", md: "50", lg: "350" }}
        columns={[1, 2, 3]}
        spacing={10}
        mt={10}
      >
        <BlogCard
          image={"/assets/blog1.jpg"}
          title={"Special Unveiling of 568 N. Tigertail Road"}
          description={
            "Our Principal and Partner, Samuel McMillan, recently celebrated the unveiling of 568 N. Tigertail Road, a newly-constructed estate"
          }
          date={"MARCH 15, 2021"}
        />
        <BlogCard
          image={"/assets/blog1.jpg"}
          title={"Special Unveiling of 568 N. Tigertail Road"}
          description={
            "Our Principal and Partner, Samuel McMillan, recently celebrated the unveiling of 568 N. Tigertail Road, a newly-constructed estate"
          }
          date={"MARCH 15, 2021"}
        />
        <BlogCard
          image={"/assets/blog1.jpg"}
          title={"Special Unveiling of 568 N. Tigertail Road"}
          description={
            "Our Principal and Partner, Samuel McMillan, recently celebrated the unveiling of 568 N. Tigertail Road, a newly-constructed estate"
          }
          date={"MARCH 15, 2021"}
        />
      </SimpleGrid>
    </Container>
  );
};

export default Latest;
