import React, { useState } from 'react'
import {
  chakra,
  Stack, Text,
  useColorModeValue
} from '@chakra-ui/react'

const Ayat = () => {
  return (
    <>
      <Stack
        bg={useColorModeValue('gray.50', 'gray.800')}
        py={16}
        px={8}
        spacing={{ base: 8, md: 10 }}
        align={'center'}
        direction={'column'}>
        <Text
          fontSize={{ base: 'xl', md: '2xl' }}
          textAlign={'center'}
          maxW={'3xl'}>
          “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.”
        </Text>
        <chakra.h2> Ar Ruum Ayat 21 </chakra.h2>
        {/* <chakra.p> */}
        {/* </chakra.p> */}
        <Text
          fontSize={{ base: 'xl', md: '2xl' }}
          textAlign={'center'}
          maxW={'3xl'}>
          “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.”
        </Text>
        <chakra.h2> Az Zariyat Ayat 21 </chakra.h2>
      </Stack>
    </>
  )
}

export default Ayat