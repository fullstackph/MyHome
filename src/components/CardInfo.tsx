import { border, Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { ImLocation2 } from "@/utils/icons";

const CardInfo = () => {
    return (
        <Box m={'100px 0'}>
            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={{ base: 'column-reverse', md: 'unset' }}
            >

                <Box
                    mr={{ base: 'unset', md: '30px' }}
                    position={'relative'}
                    __css={{
                        '.parent-component::after': {
                            content: '""',
                            position: 'absolute',
                            h: '100%',
                            border: '4px solid  #bc986b',
                            w: '100%',
                            top: '0',
                            left: '0',
                            transform: 'scale(1.1)',
                            transition: 'all 0.25s ease-in-out',
                            opacity: 0,

                        },
                        '.parent-component:hover::after': {
                            border: '4px solid #bc986b',
                            transform: 'scale(1.0)',
                            opacity: 1,
                        },

                        '.child-component::after': {
                            content: '""',
                            position: 'absolute',
                            h: '100%',
                            border: '4px solid  #bc986b',
                            w: '100%',
                            top: '0',
                            left: '0',
                            transform: 'scale(.8)',
                            transition: 'all 0.25s ease-in-out',
                            borderRadius: '50%',
                            opacity: 0,
                        },
                        '.parent-component:hover .child-component::after': {
                            transform: 'scale(1.0)',
                            opacity: 1,
                        },
                    }}
                >

                    <Box
                        className={'parent-component'}
                        border={'4px solid #f3f3f3'}
                        p={'41px 50px 53px'}
                        w={{ base: '350px', md: '400px' }}
                    >
                        <Box
                            position={'relative'}
                            className={'child-component'}
                            display={'inline-block'}
                            w={'100px'}
                            h={'100px'}
                        >
                            <Icon as={ImLocation2}
                                color={'#bc986b'}
                                borderRadius={'50%'}
                                border={'4px solid #f3f3f3'}
                                fontSize={'100px'}
                                p={'20px'}
                            ></Icon>
                        </Box>

                        <Heading
                            fontSize={'20px'}
                            letterSpacing={'0.1em'}
                            p={'20px 0'}
                        >
                            Various Locations
                        </Heading>

                        <Text
                            color={'#9a9a9a'}
                            fontSize={'18px'}
                            width={'90%'}
                        >
                            We have lots of properties in various locations available for purchase.
                        </Text>
                    </Box>
                </Box>

                <Box
                    mr={{ base: 'unset', md: '30px' }}
                    p={{ base: '10px', md: 'unset' }}
                    position={'relative'}
                    __css={{
                        '.parent-component::after': {
                            content: '""',
                            position: 'absolute',
                            h: '100%',
                            border: '4px solid  #bc986b',
                            w: '100%',
                            top: '0',
                            left: '0',
                            transform: 'scale(1.1)',
                            transition: 'all 0.25s ease-in-out',
                            opacity: 0,

                        },
                        '.parent-component:hover::after': {
                            border: '4px solid #bc986b',
                            transform: 'scale(1.0)',
                            opacity: 1,
                        },

                        '.child-component::after': {
                            content: '""',
                            position: 'absolute',
                            h: '100%',
                            border: '4px solid  #bc986b',
                            w: '100%',
                            top: '0',
                            left: '0',
                            transform: 'scale(.8)',
                            transition: 'all 0.25s ease-in-out',
                            borderRadius: '50%',
                            opacity: 0,
                        },
                        '.parent-component:hover .child-component::after': {
                            transform: 'scale(1.0)',
                            opacity: 1,
                        },
                    }}
                >

                    <Box
                        className={'parent-component'}
                        border={'4px solid #f3f3f3'}
                        p={'41px 50px 53px'}
                        w={{ base: '350px', md: '400px' }}
                    >
                        <Box
                            position={'relative'}
                            className={'child-component'}
                            display={'inline-block'}
                            w={'100px'}
                            h={'100px'}
                        >
                            <Icon as={ImLocation2}
                                color={'#bc986b'}
                                borderRadius={'50%'}
                                border={'4px solid #f3f3f3'}
                                fontSize={'100px'}
                                p={'20px'}
                            ></Icon>
                        </Box>

                        <Heading
                            fontSize={'20px'}
                            letterSpacing={'0.1em'}
                            p={'20px 0'}
                        >
                            Various Locations
                        </Heading>

                        <Text
                            color={'#9a9a9a'}
                            fontSize={'18px'}
                            width={'90%'}
                        >
                            We have lots of properties in various locations available for purchase.
                        </Text>
                    </Box>
                </Box>

                <Box
                    mr={{ base: 'unset', md: '30px' }}
                    position={'relative'}
                    __css={{
                        '.parent-component::after': {
                            content: '""',
                            position: 'absolute',
                            h: '100%',
                            border: '4px solid  #bc986b',
                            w: '100%',
                            top: '0',
                            left: '0',
                            transform: 'scale(1.1)',
                            transition: 'all 0.25s ease-in-out',
                            opacity: 0,

                        },
                        '.parent-component:hover::after': {
                            border: '4px solid #bc986b',
                            transform: 'scale(1.0)',
                            opacity: 1,
                        },

                        '.child-component::after': {
                            content: '""',
                            position: 'absolute',
                            h: '100%',
                            border: '4px solid  #bc986b',
                            w: '100%',
                            top: '0',
                            left: '0',
                            transform: 'scale(.8)',
                            transition: 'all 0.25s ease-in-out',
                            borderRadius: '50%',
                            opacity: 0,
                        },
                        '.parent-component:hover .child-component::after': {
                            transform: 'scale(1.0)',
                            opacity: 1,
                        },
                    }}
                >

                    <Box
                        className={'parent-component'}
                        border={'4px solid #f3f3f3'}
                        p={'41px 50px 53px'}
                        w={{ base: '350px', md: '400px' }}
                    >
                        <Box
                            position={'relative'}
                            className={'child-component'}
                            display={'inline-block'}
                            w={'100px'}
                            h={'100px'}
                        >
                            <Icon as={ImLocation2}
                                color={'#bc986b'}
                                borderRadius={'50%'}
                                border={'4px solid #f3f3f3'}
                                fontSize={'100px'}
                                p={'20px'}
                            ></Icon>
                        </Box>

                        <Heading
                            fontSize={'20px'}
                            letterSpacing={'0.1em'}
                            p={'20px 0'}
                        >
                            Various Locations
                        </Heading>

                        <Text
                            color={'#9a9a9a'}
                            fontSize={'18px'}
                            width={'90%'}
                        >
                            We have lots of properties in various locations available for purchase.
                        </Text>
                    </Box>
                </Box>


            </Flex>
        </Box>
    )
}

export default CardInfo