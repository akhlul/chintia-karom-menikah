import React, { useState } from 'react'
import {
  chakra,
  Box, Stack, Flex,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

import img_bungabesar from '../images/bunga-besar.jpg';

const Ayat = () => {

  return (
    <>
      <Box w="full" h={"100vh"}>
        <Flex align="center" pos="relative" justify="center" boxSize="full" 
          
          >
          <Stack py={16} px={8} spacing={{ base: 8, md: 10 }} align={'center'} alignItems="center" direction={'column'}
            _after={{
              content: `""`,
              background: `url(${img_bungabesar}) 0 0 no-repeat`,
              backgroundSize: 'contain',
              position: "absolute",
              top: "55px",
              bottom: "100%",
              width: "45%",
              height: "100%",
            }}>
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              fontStyle='italic'
              textAlign={'center'}
              maxW={'3xl'}>
              “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.”
        </Text>
            <chakra.h2>( Ar Ruum Ayat 21 )</chakra.h2>
            {/* <chakra.p> */}
            {/* </chakra.p> */}
            {/* <Text
          fontSize={{ base: 'xl', md: '2xl' }}
          textAlign={'center'}
          maxW={'3xl'}>
          “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.”
        </Text>
        <chakra.h2> Az Zariyat Ayat 21 </chakra.h2> */}
          </Stack>
        </Flex>
      </Box>
    </>
  )
}

export default Ayat