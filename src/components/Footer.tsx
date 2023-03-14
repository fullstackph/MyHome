import React from "react";
import { Box, Flex, Heading, Text, Image, Input, Button, Center, Divider } from "@chakra-ui/react";
import { HiPhone, HiOutlineEnvelope, ImLocation2, FaFacebookF, ImGooglePlus, FaTwitter, SlSocialPintarest, GrFormAdd } from "@/utils/icons";

const Footer = () => {
    return (
        <Box>
        <Flex bgColor={'#31323c'} p={"60px 0"} justifyContent={'center'}>
            <Box w={'18%'}>
                <Heading color={'#fff'} fontWeight={'600'} fontSize={'24px'} mb={'7%'}>Latest Properties</Heading>
                <Flex alignItems={'center'} mt={'35px'}>
                    <Image src='/assets/footer1.jpg' boxSize={{ base: '63px', md: '66px', lg: '80px' }}></Image>
                    <Box ml={'25px'}>
                        <Heading color={'#fff'} fontWeight={'400'} fontSize={'14px'}>Retail Store Southwest 186th Street</Heading>
                        <Text color={'#bc986b'}>From $120/month</Text>
                    </Box>
                </Flex>
                <Flex alignItems={'center'} mt={'23px'}>
                    <Image src='/assets/footer2.jpg' boxSize={{ base: '63px', md: '66px', lg: '80px' }}></Image>
                    <Box ml={'25px'}>
                        <Heading color={'#fff'} fontWeight={'400'} fontSize={'14px'}>Apartment Building with subunits</Heading>
                        <Text color={'#bc986b'}>From $120/month</Text>
                    </Box>
                </Flex>
            </Box>

            <Center height='260px' p={'0 60px'}>
                <Divider orientation='vertical' color={'#4a4a54'}/>
            </Center>

            <Box w={'18%'}>
                <Heading color={'#fff'} fontWeight={'600'} fontSize={'24px'}>Contact US</Heading>
                <Flex mt={'32px'} pb={'18px'} alignItems={'center'}>
                    <HiPhone color={'#4a4a54'} fontWeight={'400'} fontSize={'25px'}/>
                    <Text color={'#fff'} fontSize={'18px'} fontWeight={'400'} pl={'10px'}>1-800-700-6200</Text>
                </Flex>
                <Flex pb={'18px'} alignItems={'center'}>
                    <HiOutlineEnvelope color={'#4a4a54'} fontWeight={'400'} fontSize={'25px'}/>
                    <Text color={'#fff'} fontSize={'14px'} fontWeight={'400'} pl={'10px'}>info@demolink.org</Text>
                </Flex>
                <Flex pb={'18px'} alignItems={'center'}>
                    <ImLocation2 color={'#4a4a54'} fontWeight={'400'} fontSize={'25px'}/>
                    <Text color={'#fff'} fontSize={'14px'} fontWeight={'400'} pl={'10px'}>3015 Grand Ave, CoconutGrove,Merrick Way, FL 12345</Text>
                </Flex>
            </Box>

            <Center height='260px' p={'0 60px'}>
                <Divider orientation='vertical' color={'#4a4a54'}/>
            </Center>

            <Box w={'18%'}>
                <Heading color={'#fff'} fontWeight={'600'} fontSize={'24px'}>Newsletter Signup</Heading>
                <Text color={'#89939c'} m={'25px 0 15px 0'} fontSize={'14px'}>Enter your e-mail to get the latest news of MyHome</Text>
                <Flex>
                    <Input placeholder='Your e-mail' size='lg' type={'email'} mb={'25px'} w={'75%'} borderRight={'none'} borderRadius={'unset'}/>
                    <Button type={'submit'} backgroundColor={'#be9b6d'} color={'#fff'} borderRadius={'unset'} p={'24px'}>SUBSCRIBE</Button>
                </Flex>
                <Flex justifyContent={'space-between'} width={'40%'}>
                    <FaFacebookF color={'#4a4a54'} fontSize={'20px'}/>
                    <ImGooglePlus color={'#4a4a54'} fontSize={'24px'}/>
                    <FaTwitter color={'#4a4a54'} fontSize={'20px'}/>
                    <SlSocialPintarest color={'#4a4a54'} fontSize={'20px'}/>
                </Flex>
            </Box>
        </Flex>

        <Flex justifyContent={'space-around'} bg={'#2a2a34'} p={'20px 0'}>
            <Text color={'#4a4a54'} fontSize={'14px'}>MyHome © 2023 Privacy Policy</Text>
            <Flex alignItems={'center'}>
                <GrFormAdd fontSize={'25px'} color={'#bc986b'}/>
                <Text color={'#bc986b'} fontSize={'16px'}>Submit Property</Text>
            </Flex>
        </Flex>
    </Box>
    );
};

export default Footer;
