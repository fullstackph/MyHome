import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Heading1 from "./Headings";

const What_people_say = () => {
    return (
        <Container py={"50px"} maxW={"full"} bg={"#f3f4f9"}>
            <Flex>
                <Heading1 label="What People Say" />
                <Flex
                    alignItems={"center"}
                    pr={{ sm: "10px", md: "50px", lg: "450px" }}
                >
                </Flex>
            </Flex>

            <Box
                __css={{
                    '.quote-modern-inner::before': {
                        content: '""',
                        position: 'absolute',
                        width: '0',
                        height: '0',
                        borderStyle: 'solid',
                        borderWidth: '0 40px 40px 0',
                        top: '0',
                        left: '-40px',
                        borderColor: 'transparent #fff transparent transparent',

                    }
                }}>
                <Flex justifyContent={'center'} alignItems={'center'}>

                    <Box
                        w={'20%'}
                        bg={'#fff'}
                        p={'50px'}
                        className={'quote-modern-inner'}
                        m={'40px'}
                        position={'relative'}>
                        <Text
                            pb={'15px'}
                            fontSize={'12px'}
                            fontWeight={'500'}
                            color={'#9a9a9a'}
                        >MARCH 15, 2021</Text>
                        <Text
                            fontSize={'17px'}
                            fontWeight={'400'}
                            lineHeight={'1.8'}
                            color={'#151515'}
                            letterSpacing={'.08em'}
                        >Your property managers have been active in their response to repairs and always patient with our frustrations. You have always found us wonderful tenants.</Text>
                        <Flex p={'20px 0 0 0 '} alignItems={'center'}>
                            <Image src='/assets/testimonials-1.jpg' borderRadius={'50%'} w={'auto'} h={'auto'}></Image>
                            <Box p={'0 0 0 20px'}>
                                <Heading
                                    fontSize={'27'}
                                    fontWeight={'500'}
                                    color={'#151515'}
                                    letterSpacing={'.05em'}
                                >Karen Sanders</Heading>
                                <Text
                                    color={'#bc986b'}
                                    lineHeight={'1.2'}
                                >Pharmacist</Text>
                            </Box>
                        </Flex>
                    </Box>

                    <Box
                        w={'20%'}
                        bg={'#fff'}
                        p={'50px'}
                        className={'quote-modern-inner'}
                        m={'40px'}
                        position={'relative'}>
                        <Text
                            pb={'15px'}
                            fontSize={'12px'}
                            fontWeight={'500'}
                            color={'#9a9a9a'}
                        >MARCH 15, 2021</Text>
                        <Text
                            fontSize={'17px'}
                            fontWeight={'400'}
                            lineHeight={'1.8'}
                            color={'#151515'}
                            letterSpacing={'.08em'}
                        >We recently rented an apartment through your site, and have been looked after by James Thompson. He provided us with utmost support on every property issue.</Text>
                        <Flex p={'15px 0'} alignItems={'center'}>
                            <Image src='/assets/testimonials-2.jpg' borderRadius={'50%'} w={'auto'} h={'auto'}></Image>
                            <Box pl={'20px'}>
                                <Heading
                                    fontSize={'27'}
                                    fontWeight={'500'}
                                    color={'#151515'}
                                    letterSpacing={'.05em'}
                                >Walter Williams</Heading>
                                <Text
                                    color={'#bc986b'}
                                    lineHeight={'1.2'}
                                >Lifeguard</Text>
                            </Box>
                        </Flex>
                    </Box>


                    <Box
                        w={'20%'}
                        bg={'#fff'}
                        p={'50px'}
                        className={'quote-modern-inner'}
                        m={'40px'}
                        position={'relative'}>
                        <Text
                            pb={'15px'}
                            fontSize={'12px'}
                            fontWeight={'500'}
                            color={'#9a9a9a'}
                        >MARCH 15, 2021</Text>
                        <Text
                            fontSize={'17px'}
                            fontWeight={'400'}
                            lineHeight={'1.8'}
                            color={'#151515'}
                            letterSpacing={'.08em'}>I have always found your team to be extremely prompt and professional with all dealings I have had with them. You always keep me updated on the progress.</Text>
                        <Flex p={'15px 0'} alignItems={'center'}>
                            <Image src='/assets/testimonials-3.jpg' borderRadius={'50%'} w={'auto'} h={'auto'}></Image>
                            <Box pl={'20px'}>
                                <Heading
                                    fontSize={'27'}
                                    fontWeight={'500'}
                                    color={'#151515'}
                                    letterSpacing={'.05em'}
                                >Kate Anderson</Heading>
                                <Text
                                    color={'#bc986b'}
                                    lineHeight={'1.2'}
                                >Decorator</Text>
                            </Box>
                        </Flex>
                    </Box>

                    <Box
                        w={'20%'}
                        bg={'#fff'}
                        p={'50px'}
                        className={'quote-modern-inner'}
                        m={'40px'}
                        position={'relative'}>
                        <Text
                            pb={'15px'}
                            fontSize={'12px'}
                            fontWeight={'500'}
                            color={'#9a9a9a'}
                        >MARCH 15, 2021</Text>
                        <Text
                            fontSize={'17px'}
                            fontWeight={'400'}
                            lineHeight={'1.5'}
                            color={'#151515'}
                            letterSpacing={'.08em'}>Your advice and support from our initial meeting through liaising with current tenants and a polished marketing program all contributed to a great sale process, thanks!</Text>
                        <Flex p={'15px 0'} alignItems={'center'}>
                            <Image src='/assets/testimonials-4.jpg' borderRadius={'50%'} w={'auto'} h={'auto'}></Image>
                            <Box pl={'20px'}>
                                <Heading
                                    fontSize={'27'}
                                    fontWeight={'500'}
                                    color={'#151515'}
                                    letterSpacing={'.05em'}
                                >Peter Smith</Heading>
                                <Text
                                    color={'#bc986b'}
                                    lineHeight={'1.2'}
                                >Historian</Text>
                            </Box>
                        </Flex>
                    </Box>

                </Flex>
            </Box >
        </Container >
    )
}

export default What_people_say