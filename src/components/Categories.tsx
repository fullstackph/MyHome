import { Container, Text, Flex, Heading, Wrap, WrapItem, Center, Box, Divider, Stack, } from '@chakra-ui/react'
import React from 'react'
import Heading1 from "./Headings";

const Categories = () => {
    return (
        <Container py={"50px"} maxW={"full"} bg={"#F3F4F9"}>
            <Flex>
                <Heading1 label="Categories" />
                <Flex
                    alignItems={"center"}
                    pr={{ sm: "10px", md: "50px", lg: "450px" }}
                >
                </Flex>
            </Flex>

            <Wrap pt={"50px"} spacing='30px' justify='center' w={'100%'}>
                <WrapItem>
                    <Box
                        w='900px'
                        h='400px'
                        bgImage={'./assets/categories-1.jpg'}
                        bgRepeat={'no-repeat'}
                        bgSize={'cover'}
                        __css={{
                            '.parent-component::after': {
                                content: '""',
                                position: 'absolute',
                                h: '100%',
                                w: '100%',
                                bgColor: '#000',
                                display: 'none',
                                left: '0',
                                top: '0',

                            },
                            '.parent-component:hover::after': {
                                opacity: 0.2,
                                display: 'block',
                                transition: 'all 0.5s ease-in-out',
                            },

                            '.child-component': {
                                content: '""',
                                transition: 'all 0.25s ease-in-out',
                            },

                            '.parent-component:hover .child-component': {
                                opacity: 1,
                                h: '50px',
                                w: '3px',
                                transformOrigin: 'left 2px',
                            },
                        }}
                    >
                        <Flex
                            flexDirection={'column'}
                            h={'100%'}
                            justifyContent={'flex-end'}
                            p={{ base: 'unset', md: '0 0 30px 50px', }}
                            className={'parent-component'}
                            position={'relative'}
                        >
                            <Stack direction='row' h='auto' alignItems={'center'}>
                                {/* <Divider
                                    borderWidth={'3px'}
                                    borderColor={'red'}
                                    h={'40px'}
                                    orientation='vertical'
                                /> */}
                                {/* <Divider
                                    borderWidth={'3px'}
                                    borderColor={'red'}
                                    w={'50px'}
                                    orientation='horizontal' /> */}
                                <Box
                                    w={'50px'}
                                    bgColor={'red'}
                                    h={'2px'}
                                    className={'child-component'}
                                    position={'relative'}
                                >
                                </Box>
                                <Heading
                                    color={'#fff'}
                                    zIndex={'100'}
                                    fontSize={'28px'}
                                >Studio Apartments</Heading>
                            </Stack>
                            <Text
                                pl={'60px'}
                                color={'#fff'}
                                zIndex={'100'}
                            >8 Properties</Text>
                        </Flex>
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box w='630px' h='400px' bgImage={'./assets/categories-2.jpg'} bgRepeat={'no-repeat'} bgSize={'cover'}>
                        <Flex
                            flexDirection={'column'}
                            h={'100%'}
                            justifyContent={'flex-end'}
                            p={{ base: 'unset', md: '0 0 30px 50px', }}
                        >
                            <Heading color={'#fff'}>Studio Apartments</Heading>
                            <Text color={'#fff'}>8 Properties</Text>
                        </Flex>
                    </Box>
                </WrapItem>
            </Wrap>

            <Wrap py={"30px"} spacing='30px' justify='center' w={'100%'}>
                <WrapItem>
                    <Box w='500px' h='400px' bgImage={'./assets/categories-3.jpg'} bgRepeat={'no-repeat'} bgSize={'cover'}>
                        <Flex
                            flexDirection={'column'}
                            h={'100%'}
                            justifyContent={'flex-end'}
                            p={{ base: 'unset', md: '0 0 30px 50px', }}
                        >
                            <Heading color={'#fff'}>Studio Apartments</Heading>
                            <Text color={'#fff'}>8 Properties</Text>
                        </Flex>
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box w='500px' h='400px' bgImage={'./assets/categories-4.jpg'} bgRepeat={'no-repeat'} bgSize={'cover'}>
                        <Flex
                            flexDirection={'column'}
                            h={'100%'}
                            justifyContent={'flex-end'}
                            p={{ base: 'unset', md: '0 0 30px 50px', }}
                        >
                            <Heading color={'#fff'}>Studio Apartments</Heading>
                            <Text color={'#fff'}>8 Properties</Text>
                        </Flex>
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box w='500px' h='400px' bgImage={'./assets/categories-5.jpg'} bgRepeat={'no-repeat'} bgSize={'cover'}>
                        <Flex
                            flexDirection={'column'}
                            h={'100%'}
                            justifyContent={'flex-end'}
                            p={{ base: 'unset', md: '0 0 30px 50px', }}
                        >
                            <Heading color={'#fff'}>Studio Apartments</Heading>
                            <Text color={'#fff'}>8 Properties</Text>
                        </Flex>
                    </Box>
                </WrapItem>
            </Wrap>
        </Container >
    )
}

export default Categories 