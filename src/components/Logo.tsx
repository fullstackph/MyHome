import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Container, Box, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Container py={"105px"} maxW={"full"}>
      <Box
        px={{ base: "14", md: "16", xl: "355" }}
        __css={{
          ".splide": {
            h: "175px",
          },
          ".splide__pagination__page": {
            position: "relative",
            d: "inline-block",
            w: "16px",
            h: "16px",
            p: 0,
            border: "2px solid #ced4da",
            borderRadius: "50%",
            mx: "5px",
            textAlign: "center",
            outline: "none",
            cursor: "pointer",
            backgroundColor: "transparent",
            transition: ".22s",
          },
          ".splide__pagination__page::before:hover": {
            bg: "#bc986b",
          },
          ".splide__pagination__page::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate3d(-50%, -50%, 0)",
            background: "#bc986b",
            w: "6px",
            h: "6px",
            borderRadius: "inherit",
            transition: ".22s",
            opacity: 0,
          },
          ".splide__pagination__page.is-active": {
            transform: "scale(1)",
            borderColor: "#bc986b",
          },
          ".splide__pagination__page.is-active::before": {
            opacity: 1,
          },
          ".owl-dot.active::before": {
            opacity: 1,
            bg: "#bc986b",
          },
        }}
      >
        <Splide
          options={{
            pagination: true,
            arrows: false,
            perMove: 1,

            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
          }}
          aria-label="..."
        >
          <SplideSlide>
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              w={275}
              h={125}
              border="1px solid #919191"
            >
              <Image
                w={{ base: "50%", lg: "auto" }}
                src="/assets/brand.png"
                alt="Image 1"
              />
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              w={275}
              h={125}
              border="1px solid #919191"
            >
              <Image
                w={{ base: "50%", lg: "auto" }}
                src="/assets/brand.png"
                alt="Image 1"
              />
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              w={275}
              h={125}
              border="1px solid #919191"
            >
              <Image
                w={{ base: "50%", lg: "auto" }}
                src="/assets/brand.png"
                alt="Image 1"
              />
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              w={275}
              h={125}
              border="1px solid #919191"
            >
              <Image
                w={{ base: "50%", lg: "auto" }}
                src="/assets/brand.png"
                alt="Image 1"
              />
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              w={275}
              h={125}
              border="1px solid #919191"
            >
              <Image
                w={{ base: "50%", lg: "auto" }}
                src="/assets/brand.png"
                alt="Image 1"
              />
            </Box>
          </SplideSlide>
        </Splide>
      </Box>
    </Container>
  );
};

export default Logo;
