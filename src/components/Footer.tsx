import React from "react";
import { Box, Flex, Heading, Text, Image, Input, Button, Center, Divider,Icon, Link, Container, color } from "@chakra-ui/react";
import { HiPhone, HiOutlineEnvelope, ImLocation2, FaFacebookF, ImGooglePlus, FaTwitter, SlSocialPintarest, IoMdAdd, BsFillSquareFill } from "@/utils/icons";

const Footer = () => {
    return (
        <Box>
            <Flex bgColor={'#31323c'} p={{base:'30px 0', md:'40px 0', lg:'60px 0'}} justifyContent={{base:'space-between'}} flexWrap={'wrap'}>
                <Box w={{base:'100%', md:'50%', lg:'18%'}} p={{base:'0 15px', md:'0 30px', lg:'unset'}} mb={{base:'40px', md:'40px', lg:'unset'}}>
                    <Flex alignItems={'center'}>
                    <Icon as={BsFillSquareFill} color={'#bc986b'}/>
                    <Heading color={'#fff'} fontWeight={'600'} fontSize={'24px'} mb={{base:'0', md:'0', lg:'0'}} pl={{base:'15px', md:'5px', lg:'15px'}}>Latest Properties</Heading>
                    </Flex>
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

                <Center height='260px' p={'0 60px'} display={{base:'none', md:'none', lg:'block'}}>
                    <Divider orientation='vertical' borderColor={'#4a4a54'} display={{base:'none', md:'none', lg:'block'}}/>
                </Center>

                <Box w={{base:'100%', md:'50%', lg:'18%'}} p={{base:'0 15px', md:'0 30px', lg:'unset'}} mb={{base:'20px', md:'unset', lg:'unset'}}>
                <Flex alignItems={'center'}>
                    <Icon as={BsFillSquareFill} color={'#bc986b'}/>
                    <Heading color={'#fff'} fontWeight={'600'} fontSize={'24px'} mb={{base:'0', md:'0', lg:'0'}} pl={{base:'15px', md:'5px', lg:'15px'}}>Contact US</Heading>
                </Flex>
                    <Flex mt={'32px'} pb={'18px'} alignItems={'center'}>
                        <HiPhone color={'#4a4a54'} fontWeight={'400'}/>
                        <Text color={'#fff'} fontSize={'18px'} fontWeight={'400'} pl={'10px'}>1-800-700-6200</Text>
                    </Flex>
                    <Flex pb={'18px'} alignItems={'center'}>
                        <HiOutlineEnvelope color={'#4a4a54'} fontWeight={'400'}/>
                        <Text color={'#fff'} fontSize={'14px'} fontWeight={'400'} pl={'10px'}>info@demolink.org</Text>
                    </Flex>
                    <Flex pb={'18px'} alignItems={'center'}>
                        <Icon as={ImLocation2} color={'#4a4a54'} fontWeight={'400'} fontSize={{base:'15px', md:'18px'}}/>
                        <Text color={'#fff'} fontSize={'14px'} fontWeight={'400'} pl={'10px'}>3015 Grand Ave, CoconutGrove,Merrick Way, FL 12345</Text>
                    </Flex>
                </Box>

                <Center height='260px' p={'0 60px'} display={{base:'none', md:'none', lg:'block'}}>
                    <Divider orientation='vertical' borderColor={'#4a4a54'} display={{base:'none', md:'none', lg:'block'}}/>
                </Center>

                <Box w={{base:'100%', md:'100%', lg:'18%'}} p={{base:'0 15px', md:'0 30px', lg:'unset'}}>
                <Flex alignItems={'center'}>
                    <Icon as={BsFillSquareFill} color={'#bc986b'}/>
                    <Heading color={'#fff'} fontWeight={'600'} fontSize={'24px'} mb={{base:'0', md:'0', lg:'0'}} pl={{base:'15px', md:'5px', lg:'15px'}}>Newletter Signup</Heading>
                </Flex>
                    <Text color={'#89939c'} m={{base:'10px 0 10px 0', md:'15px 0 10px 0', lg:'25px 0 15px 0'}} fontSize={'14px'}>Enter your e-mail to get the latest news of MyHome</Text>
                    <Flex>
                        <Input placeholder='Your e-mail' size='lg' type={'email'} mb={'25px'} w={{base:'75%', md:'82%', lg:'75%'}} borderRight={'none'} borderRadius={'unset'} bgColor={'#4a4a54'} _placeholder={{ color: '#fff' }} color={'#fff'} _focus={{borderColor:"#fff", boxShadow:"unset"}}/>
                        <Button type={'submit'} backgroundColor={'#be9b6d'} color={'#fff'} borderRadius={'unset'} p={'24px'} _hover={{bgColor:"#fdde52", color:'#000'}}>SUBSCRIBE</Button>
                    </Flex>
                    <Flex justifyContent={'space-between'} w={{base:'20%', md:'20%', lg:'30%'}}>
                    <Link href={'https://facebook.com/'}><FaFacebookF color={'#4a4a54'} fontSize={'15px'} /></Link>
                    <Link href={'https://google.com/'}><ImGooglePlus color={'#4a4a54'} fontSize={'19px'} /></Link>
                    <Link href={'https://twitter.com/'}><Icon as={FaTwitter} color={'#4a4a54'} /></Link>
                    <Link href={'https://www.pinterest.ph/'}><SlSocialPintarest color={'#4a4a54'} fontSize={'15px'} /></Link>
                    </Flex>
                </Box>
            </Flex>

            <Flex justifyContent={'space-around'} bg={'#2a2a34'} p={{base:'20px 15px', md:'20px 15px', lg:'20px 15px'}} flexDirection={{base:'column', md:'unset', lg:'unset'}}>
                <Text mb={{base:'10px', md:'unset', lg:'unset'}} color={'#4a4a54'} fontSize={'14px'}>MyHome © 2023 <Link _hover={{color:"#bc986b"}} textDecoration={"underline"} href={'https://mail.google.com/'}>Privacy Policy</Link></Text>
                    <Link href={'https://mail.google.com/'}>
                        <Flex alignItems={'center'}>
                            <Icon as={IoMdAdd} fontSize={'20px'} color={'#bc986b'} _hover={{color:"#fdde52"}}/>
                            <Text color={'#bc986b'} fontSize={'16px'} _hover={{color:"#fdde52"}}>Submit Property</Text>
                        </Flex>
                    </Link>
            </Flex>
        </Box>
    );
};

export default Footer;
