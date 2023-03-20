import React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { BsChevronLeft, BsChevronRight } from '../utils/icons'
import { Box, Button, Center, Divider, Flex, Heading, Image, Icon, Text } from '@chakra-ui/react';
import '@splidejs/react-splide/css';

const BannerSlider = () => {
    
  return (
    <Box p={'0 25px'}>
        {/* <Splide
        options={ {
            arrows : true,
            pagination : false,
            perMove    : 1,
            gap : '1rem',
            perPage : 2,
            cover   : true,
            height  : '33.8rem',
            lazyLoad: 'nearby',
        } }
            aria-label="Banner Images">
        </Splide> */}

        <Splide options={ {
                    pagination : false,
                    perMove    : 1,
                    gap : '3rem',
                    perPage : 2,
                    cover   : true,
                    height  : '28rem',
                    lazyLoad: 'nearby',
                    type: 'loop',
                } }
        hasTrack={ false }
        aria-label="...">

            <SplideTrack>

                {/* Slider Content */}
                    <SplideSlide>
                        <Image 
                        position={'relative'}
                        backgroundSize={'contain !important'}
                        src="/assets/banner1.jpg" 
                        alt="Image 1"
                        />
                        <Flex 
                        bgColor={'#000'} 
                        opacity={'.7'} 
                        justifyContent={'center'} 
                        alignItems={'center'}
                        p={'30px'}
                        position={'absolute'}
                        bottom={'0'}
                        w={'100%'}
                        >
                            <Box>
                                <Heading 
                                    _groupHover={{ color: '#bd9b6d' }}
                                    color={'#fff'}
                                    fontSize={'24px'}
                                    textAlign={'center'}
                                    fontWeight={'600'}
                                    >
                                    923 Folsom St, San Francisco
                                </Heading>
                            <Text color={'#fff'}>3 bedrooms, $240\day</Text>
                            </Box>
                        </Flex>

                    </SplideSlide>
                        <SplideSlide>
                            <Image src="/assets/banner2.jpg" alt="Image 2"/>
                            <Flex 
                        bgColor={'#000'} 
                        opacity={'.7'} 
                        justifyContent={'center'} 
                        alignItems={'center'}
                        p={'30px'}
                        position={'absolute'}
                        bottom={'0'}
                        w={'100%'}
                        >
                            <Box>
                                <Heading 
                                    _groupHover={{ color: '#bd9b6d' }}
                                    color={'#fff'}
                                    fontSize={'24px'}
                                    textAlign={'center'}
                                    fontWeight={'600'}
                                    >
                                    923 Folsom St, San Francisco
                                </Heading>
                            <Text color={'#fff'}>3 bedrooms, $240\day</Text>
                            </Box>
                        </Flex>

                        </SplideSlide>
                            <SplideSlide>
                                <Image src="/assets/banner3.jpg" alt="Image 2"/>
                                <Flex 
                        bgColor={'#000'} 
                        opacity={'.7'} 
                        justifyContent={'center'} 
                        alignItems={'center'}
                        p={'30px'}
                        position={'absolute'}
                        bottom={'0'}
                        w={'100%'}
                        >
                            <Box>
                                <Heading 
                                    _groupHover={{ color: '#bd9b6d' }}
                                    color={'#fff'}
                                    fontSize={'24px'}
                                    textAlign={'center'}
                                    fontWeight={'600'}
                                    >
                                    923 Folsom St, San Francisco
                                </Heading>
                            <Text color={'#fff'}>3 bedrooms, $240\day</Text>
                            </Box>
                        </Flex>

                            </SplideSlide>
                                <SplideSlide>
                                    <Image src="/assets/banner4.jpg" alt="Image 2"/>
                                    <Flex 
                        bgColor={'#000'} 
                        opacity={'.7'} 
                        justifyContent={'center'} 
                        alignItems={'center'}
                        p={'30px'}
                        position={'absolute'}
                        bottom={'0'}
                        w={'100%'}
                        >
                            <Box>
                                <Heading 
                                    _groupHover={{ color: '#bd9b6d' }}
                                    color={'#fff'}
                                    fontSize={'24px'}
                                    textAlign={'center'}
                                    fontWeight={'600'}
                                    >
                                    923 Folsom St, San Francisco
                                </Heading>
                            <Text color={'#fff'}>3 bedrooms, $240\day</Text>
                            </Box>
                        </Flex>
                        
                                </SplideSlide>
            </SplideTrack>

            <Box 
                className="splide__arrows" 
                bgColor={'#f3f3fd'} 
                p={'10px'} 
                mt={'30px'}
                >
                <Flex 
                    p={'5px 0'} 
                    justifyContent={'space-between'}
                    >
                        <Heading 
                            pl={'15px'} 
                            fontWeight={'400'}>
                            Recent Properties
                            </Heading>
                        <Box>  

                            <Button 
                            p={'20px 30px'} 
                            mr={'20px'} 
                            className="splide__arrow splide__arrow--prev">
                                <Icon 
                                as={BsChevronRight} 
                                fontSize={'15px'}/>
                                Prev
                                </Button>

                            <Button 
                            p={'20px 30px'} 
                            ml={'20px'}  
                            className="splide__arrow splide__arrow--next">
                                Next
                                <Icon 
                                as={BsChevronRight} 
                                fontSize={'15px'}/>
                                </Button>
                        </Box>
                </Flex>
            </Box>
        </Splide>

    </Box>
  )
}

export default BannerSlider