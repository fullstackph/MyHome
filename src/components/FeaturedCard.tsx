import React, { useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";

import { motion } from "framer-motion";
import {
  Image,
  Box,
  Text,
  SimpleGrid,
  Divider,
  Flex,
  Icon,
  Card,
  CardBody,
} from "@chakra-ui/react";
import {
  IoCarOutline,
  FaVectorSquare,
  GiBathtub,
  MdOutlineKingBed,
} from "@/utils/icons";

interface Props {
  image: string;
  price: string;
  label: string;
  ft: string;
  bath: string;
  bed: string;
  gr: string;
}

const FeaturedCard: React.FC<Props> = ({
  image,
  price,
  label,
  ft,
  bath,
  bed,
  gr,
}) => {
  const [translateVal, setTranslateVal] = useState("0");
  const [scaleVal, setScaleVal] = useState("1");
  const [shadow, setshadow] = useState("");
  const [shadow2, setshadow2] = useState("");

  return (
    <Card
      maxW="sm"
      h={"325px"}
      zIndex={1}
      borderRadius={"0"}
      position={"relative"}
      boxShadow={shadow}
      transition={"all 0.5s ease-in-out"}
      onMouseEnter={() => {
        setTranslateVal("-40");
        setScaleVal("1.1");
        setshadow("0px 3px 12px rgba(0, 0, 0, 0.09)");
        setshadow2(" 0px -40px 50px -30px rgba(0, 0, 0, 0.09)");
      }}
      onMouseLeave={() => {
        setTranslateVal("0");
        setScaleVal("1");
        setshadow("");
        setshadow2("");
      }}
    >
      <Box
        h={"375px"}
        as={motion.div}
        transition={"all 0.5s ease-in-out"}
        transform={`translateY(${translateVal}px)`}
        p={4}
        borderWidth="1px"
        borderRadius="0"
        bg={"#fff"}
        boxShadow={shadow2}
        borderColor="#fff"
      ></Box>
      <CardBody zIndex={5} h={"325px"} w={"325px"} position={"absolute"}>
        <Box
          h={"200px"}
          w={"325px"}
          top={"-25px"}
          left={"24px"}
          position={"absolute"}
          overflow={"hidden"}
        >
          <Image
            src={image}
            height={"200px"}
            width={"350px"}
            transition={"all 0.3s ease-in-out"}
            // _hover={{
            //   transform: `scale(${scaleVal})`,
            // }}
            transform={`scale(${scaleVal})`}
          />

          <Text
            position={"absolute"}
            top="88%"
            left={"0"}
            bgColor="#BC986B"
            width={"28%"}
            textAlign={"center"}
            fontSize={"16px"}
            fontWeight={"400"}
            color={"#fff"}
          >
            {price}
          </Text>
        </Box>

        <Box position={"absolute"} bottom={5}>
          <Text mb={"15px"} fontSize="18px" color={"#BC986B"}>
            {label}
          </Text>
          <Divider />
          <SimpleGrid pt={"15px"} fontSize="14px" columns={2} spacing={5}>
            <Flex alignItems={"center"}>
              <Icon color={"#abb4c0"} as={FaVectorSquare} />
              <Text ml={"5px"} color="#444">
                {ft}
              </Text>
            </Flex>
            <Flex alignItems={"center"}>
              <Icon color={"#abb4c0"} as={GiBathtub} />
              <Text ml={"5px"} color="#444">
                {bath}
              </Text>
            </Flex>
            <Flex alignItems={"center"}>
              <Icon color={"#abb4c0"} as={MdOutlineKingBed} />
              <Text ml={"5px"} color="#444">
                {bed}
              </Text>
            </Flex>
            <Flex alignItems={"center"}>
              <Icon color={"#abb4c0"} as={IoCarOutline} />
              <Text ml={"5px"} color="#444">
                {gr}
              </Text>
            </Flex>
          </SimpleGrid>
        </Box>
      </CardBody>
    </Card>
  );
};

export default FeaturedCard;
