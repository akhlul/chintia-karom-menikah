import React, { useState } from 'react'
import {
  chakra,
  Flex, Button
} from '@chakra-ui/react'
// import './App.css'

import Header from "./components/Header";
import Hero from "./components/Hero";
import Ayat from "./components/Ayat";

import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Flex overflow="hidden" flexDirection="column">
      {/* flex flex-col min-h-screen overflow-hidden */}

      <chakra.header
        h={"100vh"}
        >
        <Header />
        <Hero />
      </chakra.header>

      <chakra.main>

        <Ayat />
        {/* <Couples /> */}
        {/* <Events /> */}
        <Gallery />

        {/* <Maps /> */}
      </chakra.main>

      <chakra.footer>
        <Footer />
      </chakra.footer>
    </Flex>
  )
}

export default App
