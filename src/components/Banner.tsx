import { Box, Button, Flex, Heading, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { TbCircleDot } from "@/utils/icons";
import OpenValue from './OpenValue';
import BannerSlider from './BannerSlider';

const Banner = () => {
    return (
        <Box w={'100%'} m={'30px 0'}>
        <Box>
            <Flex>
                <Flex w={'50%'}
                justifyContent={'flex-end'}
                bg={'#32323c'} 
                bgImage={'/assets/banner.png'} 
                bgSize={'contain'} 
                position={'relative'} 
                zIndex={'100'} 
                backgroundSize={'contain'} 
                backgroundRepeat={'no-repeat'}
                h={'550px'}
                pr={'70px'}
                 >

                    <Box>
                        <Box 
                        m={'50px 0'} 
                        p={'50px 0'} 
                        w={'100%'}
                        >

                            <Heading color={'#fff'}>
                                Find Your Property
                            </Heading>
                                <Flex>
                                    <Select placeholder='Choose Location' bg={'#fff'} p={'20px 30px 10px 0px'}>
                                        <option value='option1' >Alaska</option>
                                        <option value='option2'>Arizona</option>
                                        <option value='option3'>Arkansas</option>
                                        <option value='option3'>California</option>
                                        <option value='option3'>Colorado</option>
                                        <option value='option3'>Connecticut</option>
                                        <option value='option3'>Delaware</option>
                                        <option value='option3'>Florida</option>
                                    </Select>
                                    <Select placeholder='Property Type' bg={'#fff'} p={'20px 30px 10px 0px'}>
                                        <option value='option1'>Apartment</option>
                                        <option value='option2'>House</option>
                                        <option value='option3'>Lot</option>
                                    </Select>
                                </Flex>

                    <Flex mb={'20px'}>
                        <Select placeholder='Property Status' bg={'#fff'} p={'20px 30px 10px 0px'}>
                            <option value='option1'>For Sale</option>
                            <option value='option2'>For Rent</option>
                        </Select>
                        <Select placeholder='Min Baths' bg={'#fff'} p={'20px 30px 10px 0px'}>
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
                        <Select placeholder='Min Beds' bg={'#fff'} p={'20px 30px 10px 0px'}>
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

                    <Flex mb={'30px'}>
                        <Text color={'#fff'} w={'30%'}>Price Range ($)</Text>
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

                    <Flex mb={'20px'}>
                        <Text color={'#fff'} w={'32.5%'}>Area (Sq Ft)</Text>
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
                        <OpenValue/>
                        <Button ml={'25px'}>Search</Button>
                    </Flex>
                </Box>
                </Box>
                </Flex>


                <Box w={"50%"} height={'550px'}>
                <BannerSlider/>
                </Box>
            </Flex>
        </Box>
        </Box>
    )
}

export default Banner