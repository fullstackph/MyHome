import React, { useState } from "react";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Text,
  Image,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineClockCircle } from "@/utils/icons";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  date,
}) => {
  const [bgcolor, setbgcolor] = useState("");
  const [bgcolor2, setbgcolor2] = useState("#BC986B");
  const [scaleVal, setScaleVal] = useState("1");
  const [color, setColor] = useState("");
  const [color2, setColor2] = useState("#9a9a9a");
  const [color3, setColor3] = useState("#BC986B");

  return (
    <Card
      onMouseEnter={() => {
        setbgcolor("#BC986B");
        setbgcolor2("yellow");
        setScaleVal("1.1");
        setColor("#fff");
        setColor2("#fff");
        setColor3("#fff");
      }}
      onMouseLeave={() => {
        setbgcolor("#fff");
        setbgcolor2("#BC986B");
        setScaleVal("1");
        setColor("#000");
        setColor2("#9a9a9a");
        setColor3("#BC986B");
      }}
    >
      <Box w={"full"} overflow={"hidden"}>
        <Image
          src={image}
          alt="blog1"
          transition={"all 0.3s ease-in-out"}
          transform={`scale(${scaleVal})`}
        />
      </Box>

      <CardBody
        p={"40px"}
        maxH={"max-content"}
        transition={"all 0.3s ease-in-out"}
        bg={bgcolor}
      >
        <Stack>
          <Box my={2}>
            <Text
              fontSize={"xl"}
              transition={"all 0.3s ease-in-out"}
              color={color}
              _hover={{
                color: "yellow",
              }}
            >
              {title}
            </Text>
          </Box>
          <Box
            transition={"all 0.3s ease-in-out"}
            bg={bgcolor2}
            h={"3px"}
            w={"50px"}
            mb={"1.5rem"}
          ></Box>
          <Box mb={"1.5rem"}>
            <Text
              fontSize={"14px"}
              transition={"all 0.3s ease-in-out"}
              color={color2}
            >
              {description}
            </Text>
          </Box>

          <Flex mb={"1.5rem"} alignItems={"center"}>
            <Icon
              transition={"all 0.3s ease-in-out"}
              color={color3}
              mr={2}
              as={AiOutlineClockCircle}
            />
            <Text
              fontSize={"14px"}
              transition={"all 0.3s ease-in-out"}
              color={color}
            >
              {date}
            </Text>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
