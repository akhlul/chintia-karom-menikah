import React from 'react'
import {
    chakra,
    Flex,
    Image,
    Text,
    IconButton,
    Box,
    useColorModeValue
} from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'

import logo_cnk from "../images/logo-cnk.png";

// Chintia & Karom
const Header = () => {
    console.log(logo_cnk)
    return (
        <chakra.nav>
            <Box 
                bg="gray.600"
                // bg="white"
                w="full" 
                px={{ base:2, sm: 4}}
                py={2}>
            <Flex alignItems="center" justifyContent="space-between">
                <Image 
                    src={logo_cnk}
                    height="32px" 
                    width="32px"/>
                <Text as="p"
                    color="whiteAlpha.800"
                    fontFamily="Heart Breath DEMO"
                    fontSize="lg"
                    >
                    Chintia & Karom
                </Text>
                    <IconButton 
                        bg="gray.700"
                        color="whiteAlpha.800" 
                        aria-label="icon" 
                        icon={<CalendarIcon />} 
                        size="md" />
            </Flex>
            </Box>
        </chakra.nav>
    )
}
export default Header
