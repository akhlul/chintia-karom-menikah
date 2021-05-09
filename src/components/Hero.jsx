import React from 'react'
import {
  chakra,
  Flex, Box, Container, 
  VStack, Spacer,
  Text
} from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'

import img_hero from '../photos/IMG-20210424-WA0022.jpg'

// Chintia & Karom
const Hero = () => {
  // const bg = useColorModeValue('green', 'gray.800')

  return (
    <>
      <Box w="full" h="full" 
        bgImage={`url(${img_hero})`} 
        bgSize={'cover'} bgPosition={"center center"}>
        <Flex align="center" pos="relative" justify="center" boxSize="full" bg="blackAlpha.300" >
          <VStack textAlign="center" alignItems="center" spacing={6} color="whiteAlpha.800">
            <Spacer></Spacer>
            <Box>
              <Container>
              <chakra.h1 fontSize="21">Undangan Pernikahan</chakra.h1>
              <Text
                py={35}
                fontFamily="Heart Breath DEMO"
                fontWeight={450}
                fontSize="80"
                lineHeight={0.8}
              >
                Chintia & Karom
              </Text>
              <chakra.h3 fontSize="21">Sabtu, 22 Mei 2021</chakra.h3>
              <chakra.h3>Desa Plandi Utara RT 21/RW 05, Jombatan</chakra.h3>
              <chakra.h3>Jombang</chakra.h3>
              <br />
              <Text> Chintia & Karom </Text>
              </Container>
            </Box>
          </VStack>
        </Flex>
      </Box>
    </>
  )
}
export default Hero
