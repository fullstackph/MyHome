import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface Testimonials {
  date: string;
  content: string;
  name: string;
  image: string;
  position: string;
}

const testimonials: Testimonials[] = [
  {
    date: "MARCH 15, 2021",
    content:
      "Your property managers have been active in their response to repairs and always patient with our frustrations. You have always found us wonderful tenants.",
    name: "Karen Sanders",
    image: "/assets/testimonials-1.jpg",
    position: "Pharmacist",
  },
  {
    date: "MARCH 15, 2021",
    content:
      "We recently rented an apartment through your site, and have been looked after by James Thompson. He provided us with utmost support on every property issue.",
    name: "Walter Williams",
    image: "/assets/testimonials-2.jpg",
    position: "Lifeguard",
  },
  {
    date: "MARCH 15, 2021",
    content:
      "I have always found your team to be extremely prompt and professional with all dealings I have had with them. You always keep me updated on the progress.",
    name: "Kate Anderson",
    image: "/assets/testimonials-3.jpg",
    position: "Decorator",
  },
  {
    date: "MARCH 15, 2021",
    content:
      "Your advice and support from our initial meeting through liaising with current tenants and a polished marketing program all contributed to a great sale process, thanks!",
    name: "Peter Smith",
    image: "/assets/testimonials-4.jpg",
    position: "Historian",
  },
];

interface TestimonialCardProps {
  testimonials?: Testimonials[];
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonials: Testimonials,
}) => {
  return (
    <Stack spacing="4">
      <Box
        display={{ base: "block", lg: "flex" }}
        px={{ base: "5", md: 20 }}
        py={20}
        gap={{ base: "5", lg: "16" }}
        __css={{
          ".quote-modern-inner::before": {
            content: '""',
            position: "absolute",
            width: "0",
            height: "0",
            borderStyle: "solid",
            borderWidth: "0 40px 40px 0",
            top: "0",
            left: "-40px",
            borderColor: "transparent #fff transparent transparent",
          },
        }}
      >
        {testimonials.map((Testimonials, index) => (
          <Card
            my={10}
            shadow={"none"}
            className="quote-modern-inner"
            key={index}
          >
            <CardHeader>
              <Text
                mt={"20px"}
                pb={"15px"}
                fontSize={"12px"}
                fontWeight={"500"}
                color={"#9a9a9a"}
              >
                {Testimonials.date}
              </Text>
              <Text
                mt={"10px"}
                fontSize={"14px"}
                fontWeight={"400"}
                lineHeight={"1.8"}
                color={"#151515"}
                letterSpacing={".08em"}
              >
                {Testimonials.content}
              </Text>
            </CardHeader>
            <CardBody>
              <Flex gap={2}>
                <Image
                  borderRadius={"50%"}
                  w={"57px"}
                  h={"57px"}
                  src={Testimonials.image}
                />
                <Box>
                  <Text
                    fontSize={"18px"}
                    fontWeight={"900"}
                    lineHeight={"1.8"}
                    color={"#151515"}
                    letterSpacing={".08em"}
                  >
                    {Testimonials.name}
                  </Text>
                  <Text
                    pb={"15px"}
                    fontSize={"14px"}
                    fontWeight={"500"}
                    color={"#BC986B"}
                  >
                    {Testimonials.position}
                  </Text>
                </Box>
              </Flex>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Stack>
  );
};

export default TestimonialCard;
