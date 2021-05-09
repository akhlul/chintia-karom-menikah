import React, { ReactNode } from 'react'
import {
  chakra,
  Flex, SimpleGrid, Box, HStack, VStack,
  Heading, Text, Link,
  useColorModeValue,
  Stack
} from '@chakra-ui/react'

const events_list = [
  {
    nama_event: "Akad Nikah",
    img_url: 'https://kabarjombang.com/wp-content/uploads/2021/04/masid-jami-2048x1637.jpg',
    waktu: '07.00 s/d 09.00 WIB',
    lokasi: "Masjid Agung Baitul Mukminin Jombang",
    alamat: "Jl. KH.A.Dahlan No.28, Jombatan, Kec. Jombang, Kab. Jombang",
    link_gmaps: "dll",
    link_calendar: "dll"
  },
  {
    nama_event: "Resepsi",
    img_url: 'https://kabarjombang.com/wp-content/uploads/2021/04/masid-jami-2048x1637.jpg',
    waktu: '09.30 s/d 10.30 WIB',
    lokasi: "Kediaman Mempelai Wanita",
    alamat: "Desa Plandi Utara RT 21/RW 05 Kec. Jombang, Kab. Jombang",
    link_gmaps: "dll",
    link_calendar: "dll"
  }
]

const EventWrapper = (props) => {
  const { nama_event, img_url, waktu, lokasi, alamat, link_gmaps, link_calendar } = props
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      // m={{ base:2, lg: 8 }}
      display={{ lg: "flex" }}
      maxW={{ lg: "5xl" }}
      shadow={{ lg: "lg" }}
      rounded={{ lg: "lg" }}
    >
      <Box w={{ lg: "50%" }}>
        <Box
          h={{ base: 64, lg: "full" }}
          rounded={{ lg: "lg" }}
          bgSize="cover"
          style={{
            backgroundImage:
              `url('${img_url}')`,
          }}
        ></Box>
      </Box>

      <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
        <chakra.h2
          fontSize={{ base: "2xl", md: "3xl" }}
          color={useColorModeValue("gray.800", "white")}
          fontWeight="bold"
        >
          {nama_event}
        </chakra.h2>
        <chakra.p mt={4} color={useColorModeValue("gray.600", "gray.400")}>
          {waktu} <br />
          {lokasi} <br />
          {alamat}
        </chakra.p>

        <HStack mt={8} spacing="24px">
          <Link
            fontSize="sm"
            bg="gray.900"
            color="gray.100"
            px={5}
            py={3}
            fontWeight="semibold"
            rounded="lg"
            _hover={{ bg: "gray.800" }}
          >
            View Lokasi
            </Link>
          <Link
            fontSize="sm"
            bg="gray.900"
            color="gray.100"
            px={5}
            py={3}
            fontWeight="semibold"
            rounded="lg"
            _hover={{ bg: "gray.800" }}
          >
            Add to Calender
            </Link>
        </HStack>
      </Box>
    </Box>
  )
}

const Event = () => {
  // <Flex
  //   bg={useColorModeValue("#F9FAFB", "gray.600")}
  //   p={{ lg: 50 }}
  //   w="full"
  //   alignItems="center"
  //   justifyContent="center"
  //   flexFlow="column"
  // >
  // </Flex>
  return (
    <Box>
      <VStack textAlign="center" alignItems="center" py={6} color="whiteAlpha.800">
        <Heading as="h1" fontSize="4xl" color={'gray.600'}>
          Event
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text>
      </VStack>
      <SimpleGrid
        bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={{ base: 8, lg: 25 }}
        columns={{ base: 1, lg: 2 }}
        spacing={25}
      >
        {events_list.map((eventProps, index) => (
          <EventWrapper {...eventProps} index={index} />
        ))}
      </SimpleGrid >
    </Box>
  );
};

export default Event;