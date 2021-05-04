import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
}

const theme = extendTheme({
    colors: {
        gray: {
            "50": "#F1F3F2",
            "100": "#D9DEDB",
            "200": "#C1C8C3",
            "300": "#A8B3AC",
            "400": "#909D95",
            "500": "#77887D",
            "600": "#606C64",
            "700": "#48514B",
            "800": "#303632",
            "900": "#181B19"
        }
    },
    fonts: {
        heading: "PT Sans",
        body: "PT Sans",
    },
})

export default theme