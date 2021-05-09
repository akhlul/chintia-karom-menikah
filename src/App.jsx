import React, { useState } from 'react'
import {
  chakra,
  Flex, Button
} from '@chakra-ui/react'
// import './App.css'

import Header from "./components/Header";
import Hero from "./components/Hero";
import Ayat from "./components/Ayat";

import Event from "./components/Event"
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
        <Hero />
      </chakra.header>

      <chakra.main>
        <Header />

        <Ayat />
        {/* <Couples /> */}
        <Event />
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


  // content: "";
  // background: url("/images/leaves-ti-p.png");
  // position: absolute;
  // left: -100px;
  // bottom: 100%;
  // height: 150px;
  // width: 200px;
  // z-index: 1;
  // background-repeat: no-repeat;
  // background-size: contain;
  // background-position: bottom;

// position: absolute;
// top: 0;
// bottom: 0;
// width: 100 %;
// height: 100 %;

// position: absolute;
// top: 0;
// bottom: 100%;
// width: 500px;
// height: 100%;
// // background-size: contain;

// <Box w="full" h={"100vh"} _after={{
  // content: `""`,
  // background: `url(${img_bungabesar}) 0 0 no-repeat`,
  // backgroundSize: 'contain',
  // position: "absolute",
  // top: 0,
  // bottom: "100%",
  // width: "500px",
  // height: "100%",
// }}>