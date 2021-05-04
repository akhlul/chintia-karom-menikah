import React from 'react'
import {
  chakra,
  Flex, Box, VStack, Spacer,
  Text
} from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'

import img_hero from '../photos/hero-1.jpg'

// Chintia & Karom
const Header = () => {
  // const bg = useColorModeValue('green', 'gray.800')

  return (
    <>
      <Box
        w="full"
        h="full"
        bgImage={
          `url(${img_hero})`
        }
        // bgColor="red.100"
        bgSize={'cover'}
        bgPosition={"center center"}>
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          bg="blackAlpha.300"
        >
          <VStack textAlign="center" alignItems="center" spacing={6}>
            <Spacer></Spacer>
            <Box>
            <chakra.h1>We Are Getting Married</chakra.h1>
            <Text
              color="whiteAlpha.800"
              fontFamily="Heart Breath DEMO"
              fontWeight={700}
              fontSize="48px"
              lineHeight={1.3}
            >
              Chintia & Karom
              </Text>
            <Text
              color={'white'}
              >
              Chintia & Karom
            </Text>
            <chakra.h3>Jombang, Jawa Timur, Indonesia</chakra.h3>   
            </Box>
          </VStack>
        </Flex>
      </Box>
    </>
  )
}
export default Header
