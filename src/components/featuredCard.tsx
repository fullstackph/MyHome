import React from "react";
import {
  Container,
  Image,
  Box,
  Text,
  SimpleGrid,
  Divider,
  Flex,
  Icon,
} from "@chakra-ui/react";
import {
  IoCarOutline,
  FaVectorSquare,
  GiBathtub,
  MdOutlineKingBed,
} from "@/utils/icons";

interface Props {
  image: string;
  label: string;
  ft: string;
  bath: string;
  bed: string;
  gr: string;
}

export const featuredCard: React.FC<Props> = ({
  image,
  label,
  ft,
  bath,
  bed,
  gr,
}) => {
  return (
    <Container>
      <Image src={image} />
      <Box>
        <Text>{label}</Text>
        <Divider />
        <SimpleGrid columns={2} spacing={5}>
          <Flex>
            <Icon as={FaVectorSquare} />
            <Text>{ft}</Text>
          </Flex>
          <Flex>
            <Icon as={GiBathtub} />
            <Text>{bath}</Text>
          </Flex>
          <Flex>
            <Icon as={MdOutlineKingBed} />
            <Text>{bed}</Text>
          </Flex>
          <Flex>
            <Icon as={IoCarOutline} />
            <Text>{gr}</Text>
          </Flex>
        </SimpleGrid>
      </Box>
    </Container>
  );
};
