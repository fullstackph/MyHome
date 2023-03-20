import React from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { motion } from "framer-motion";
import {
  Container,
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
  return (
    <Card maxW="sm" h={"325px"} borderRadius={"0"} position={"relative"}>
      <Box
        h={"325px"}
        as={motion.div}
        whileHover={{ translateY: "-10px" }}
        p={4}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
      >
        <CardBody>
          <Box
            height={"200px"}
            width={"325px"}
            top={"-25px"}
            left={"28px"}
            position={"absolute"}
            overflow={"hidden"}
          >
            <Image
              src={image}
              height={"200px"}
              width={"350px"}
              transition={"all 0.3s ease-in-out"}
              _hover={{
                transform: "scale(1.1)",
              }}
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
      </Box>
    </Card>
  );
};

export default FeaturedCard;
