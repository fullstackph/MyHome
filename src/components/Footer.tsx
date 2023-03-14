import React from "react";
import { Box, Flex, Heading, Text, Image, Icon, Input, Button } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Flex>
            <Box>
                <Heading>Latest Properties</Heading>
                <Flex>
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov'></Image>
                    <Box>
                        <Heading>Retail Store Southwest 186th Street</Heading>
                        <Text>From $120/month</Text>
                    </Box>
                </Flex>
                <Flex>
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov'></Image>
                    <Box>
                        <Heading>Apartment Building with subunits</Heading>
                        <Text>From $120/month</Text>
                    </Box>
                </Flex>
            </Box>

            <Box>
                <Heading>Contact US</Heading>
                <Flex>
                    <Icon></Icon>
                    <Text>1-800-700-6200</Text>
                </Flex>
                <Flex>
                    <Icon></Icon>
                    <Text>info@demolink.org</Text>
                </Flex>
                <Flex>
                    <Icon></Icon>
                    <Text>3015 Grand Ave, CoconutGrove,Merrick Way, FL 12345</Text>
                </Flex>
            </Box>

            <Box>
                <Heading>Newsletter Signup</Heading>
                <Text>Enter your e-mail to get the latest news of MyHome</Text>
                <Flex>
                    <Input placeholder='Enter your email' size='lg' type={'email'}/>
                    <Button type={'submit'}></Button>
                </Flex>
                <Flex>
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                    <Icon></Icon>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Footer;
