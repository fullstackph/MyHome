import { Button, ButtonGroup, Card, CardBody, CardFooter, Container, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Heading1 from "./Headings";

const Our_agents = () => {
    return (
        <Container py={"80px"} maxW={"full"} bg={"#fff"}>
            <Flex>
                <Heading1 label="Our Agents" />
                <Flex
                    alignItems={"center"}
                    pr={{ sm: "10px", md: "50px", lg: "450px" }}
                >
                </Flex>
            </Flex>

            <Flex
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Card maxW='250px' m={'50px 30px'} >
                    <CardBody
                        boxShadow={'lg'}
                        p={'0'}>
                        <Image src='/assets/agents-01.jpg'

                        ></Image>
                        <Stack mt='6' spacing='3' pb={'50px'}>
                            <Heading
                                textAlign={'center'}
                                size='md'>Michael Rutter</Heading>
                            <Text
                                textAlign={'center'}>
                                Certified MyHome Broker
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>

                <Card maxW='250px' m={'50px 30px'} >
                    <CardBody
                        boxShadow={'lg'}
                        p={'0'}>
                        <Image src='/assets/agents-01.jpg'

                        ></Image>
                        <Stack mt='6' spacing='3' pb={'50px'}>
                            <Heading
                                textAlign={'center'}
                                size='md'>Michael Rutter</Heading>
                            <Text
                                textAlign={'center'}>
                                Certified MyHome Broker
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>

                <Card maxW='250px' m={'50px 30px'} >
                    <CardBody
                        boxShadow={'lg'}
                        p={'0'}>
                        <Image src='/assets/agents-01.jpg'

                        ></Image>
                        <Stack mt='6' spacing='3' pb={'50px'}>
                            <Heading
                                textAlign={'center'}
                                size='md'>Michael Rutter</Heading>
                            <Text
                                textAlign={'center'}>
                                Certified MyHome Broker
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>

                <Card maxW='250px' m={'50px 30px'} >
                    <CardBody
                        boxShadow={'lg'}
                        p={'0'}>
                        <Image src='/assets/agents-01.jpg'

                        ></Image>
                        <Stack mt='6' spacing='3' pb={'50px'}>
                            <Heading
                                textAlign={'center'}
                                size='md'>Michael Rutter</Heading>
                            <Text
                                textAlign={'center'}>
                                Certified MyHome Broker
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>





            </Flex>


        </Container>

    )
}

export default Our_agents