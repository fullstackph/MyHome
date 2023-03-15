import { Box, Button, Flex, Heading, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { TbCircleDot } from "@/utils/icons";

const Banner = () => {
  return (
    <Box w={'100%'}>
        <Flex>
            <Box>
                <Heading>Find Your Property</Heading>
                <Flex>
                    <Select placeholder='Choose Location'>
                        <option value='option1'>Alaska</option>
                        <option value='option2'>Arizona</option>
                        <option value='option3'>Arkansas</option>
                        <option value='option3'>California</option>
                        <option value='option3'>Colorado</option>
                        <option value='option3'>Connecticut</option>
                        <option value='option3'>Delaware</option>
                        <option value='option3'>Florida</option>
                    </Select>
                    <Select placeholder='Property Type'>
                        <option value='option1'>Apartment</option>
                        <option value='option2'>House</option>
                        <option value='option3'>Lot</option>
                    </Select>
                </Flex>

                <Flex>
                    <Select placeholder='Property Status'>
                            <option value='option1'>For Sale</option>
                            <option value='option2'>For Rent</option>
                    </Select>
                    <Select placeholder='Min Baths'>
                            <option value='option1'>1</option>
                            <option value='option2'>2</option>
                            <option value='option2'>3</option>
                            <option value='option2'>4</option>
                            <option value='option2'>5</option>
                            <option value='option2'>6</option>
                            <option value='option2'>7</option>
                            <option value='option2'>8</option>
                            <option value='option2'>9</option>
                    </Select>
                    <Select placeholder='Min Beds'>
                    <option value='option1'>1</option>
                            <option value='option2'>2</option>
                            <option value='option2'>3</option>
                            <option value='option2'>4</option>
                            <option value='option2'>5</option>
                            <option value='option2'>6</option>
                            <option value='option2'>7</option>
                            <option value='option2'>8</option>
                            <option value='option2'>9</option>
                    </Select>
                </Flex>

                <Flex>
                    <Text>Price Range ($)</Text>
                    <RangeSlider aria-label={['min', 'max']} defaultValue={[50, 10000]}>
                        <RangeSliderTrack bg='#bd9969'>
                            <RangeSliderFilledTrack bg='#4a4a54' />
                        </RangeSliderTrack>
                        <RangeSliderThumb boxSize={6} index={0}>
                            <Box color='#bd9969' as={TbCircleDot} />
                        </RangeSliderThumb>
                        <RangeSliderThumb boxSize={6} index={1}>
                            <Box color='#bd9969' as={TbCircleDot} />
                        </RangeSliderThumb>
                    </RangeSlider>
                </Flex>

                <Flex>
                    <Text>Area (Sq Ft)</Text>
                    <RangeSlider aria-label={['min', 'max']} defaultValue={[70, 20000]}>
                        <RangeSliderTrack bg='#bd9969'>
                            <RangeSliderFilledTrack bg='#4a4a54' />
                        </RangeSliderTrack>
                        <RangeSliderThumb boxSize={6} index={0}>
                            <Box color='#bd9969' as={TbCircleDot} />
                        </RangeSliderThumb>
                        <RangeSliderThumb boxSize={6} index={1}>
                            <Box color='#bd9969' as={TbCircleDot} />
                        </RangeSliderThumb>
                    </RangeSlider>
                </Flex>

                <Flex>
                    
                    <Button>Search</Button>
                </Flex>
            </Box>
        </Flex>
    </Box>
  )
}

export default Banner