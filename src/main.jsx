import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"

/* Themes */
import "@fontsource/pt-sans"
import "./fonts"
import theme from './theme'

import App from './App'
// import './index.css'

ReactDOM.render(
  <ChakraProvider theme={theme}>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      <App />
  </ChakraProvider>,
  document.getElementById('root')
)
