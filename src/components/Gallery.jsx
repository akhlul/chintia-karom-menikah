import React, { useState } from 'react'
import {
  chakra,
  Flex, Box, Container, VStack,
  Image, Heading, Text,
  useColorModeValue
} from '@chakra-ui/react'

const Gallery = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const slides = [
    { img: "./src/photos/IMG-20210424-WA0005.jpg", },
    { img: "./src/photos/IMG-20210424-WA0006.jpg", },
    { img: "./src/photos/IMG-20210424-WA0007.jpg", },
    { img: "./src/photos/IMG-20210424-WA0008.jpg", },
    { img: "./src/photos/IMG-20210424-WA0009.jpg", },
    { img: "./src/photos/IMG-20210424-WA0010.jpg", },
    { img: "./src/photos/IMG-20210424-WA0011.jpg", },
    { img: "./src/photos/IMG-20210424-WA0013.jpg", },
    { img: "./src/photos/IMG-20210424-WA0014.jpg", },
    { img: "./src/photos/IMG-20210424-WA0015.jpg", },
    { img: "./src/photos/IMG-20210424-WA0016.jpg", },
    { img: "./src/photos/IMG-20210424-WA0017.jpg", },
    { img: "./src/photos/IMG-20210424-WA0018.jpg", },
    { img: "./src/photos/IMG-20210424-WA0019.jpg", },
    { img: "./src/photos/IMG-20210424-WA0020.jpg", },
    { img: "./src/photos/IMG-20210424-WA0021.jpg", },
    { img: "./src/photos/IMG-20210424-WA0022.jpg", },
    // hero
    { img: "./src/photos/IMG-20210424-WA0023.jpg", },
    { img: "./src/photos/IMG-20210424-WA0024.jpg", },
    { img: "./src/photos/IMG-20210424-WA0025.jpg", },
    // {
    //   img:
    //     "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    // },
    // {
    //   img:
    //     "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    // },
    // {
    //   img:
    //     "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    // },
    // {
    //   img:
    //     "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    // },
    // {
    //   img:
    //     "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    // },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex
      w="full"
      bg={useColorModeValue("gray.200", "gray.600")}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="container.lg">
        <VStack textAlign="center" alignItems="center" py={6} color="whiteAlpha.800">
          <Heading as="h1" fontSize="4xl">
            Galeri
          </Heading>
          <Text fontSize="lg" color={'gray.500'}>
            Start with 14-day free trial. No credit card needed. Cancel at
            anytime.
          </Text>
        </VStack>
        <Flex w="full" overflow="hidden" pos="relative">
          <Flex h="400px" w="full" transition="all .5s" ml={`-${currentSlide * 100}%`}>
            {slides.map((slide, sid) => (
              <Box rounded={{ lg: "lg" }} key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                <Text color="white" fontSize="xs" p="8px 12px" pos="absolute" top="0" >
                  {sid + 1} / {slidesCount}
                </Text>
                <Image rounded={{ lg: "lg" }} src={slide.img} boxSize="full" backgroundSize="cover" objectFit="contain" />
              </Box>
            ))}
          </Flex>
          <Text {...arrowStyles} left="0" onClick={prevSlide}>
            &#10094;
        </Text>
          <Text {...arrowStyles} right="0" onClick={nextSlide}>
            &#10095;
        </Text>
        </Flex>
        <Image rounded={{ lg: "lg" }} maxH="100px" src={slides[0].img} objectFit="cover" backgroundSize="cover" />
      </Container>
    </Flex>
  );
};

export default Gallery


