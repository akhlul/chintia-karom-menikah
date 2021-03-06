import React from 'react'
import { useState, useRef, useEffect } from 'react'
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
    // console.log(logo_cnk)

    const sticky_styles = {
        position: "fixed",
        zIndex: 100,
        top: 0,
        width: "100%",
        transition: "all 0.5s ease",
        animation: "smoothScroll 1s forwards",
    }

    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);

    // handle scroll event
    const handleScroll = (elTopOffset, elHeight) => {
        if (window.pageYOffset > (elTopOffset + elHeight)) {
            setSticky({ isSticky: true, offset: elHeight });
        } else {
            setSticky({ isSticky: false, offset: 0 });
        }
    };

    useEffect(() => {
        var header = headerRef.current.getBoundingClientRect();
        const handleScrollEvent = () => {
            handleScroll(header.top, header.height)
        }

        window.addEventListener('scroll', handleScrollEvent);

        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    return (
        <chakra.nav sx={sticky.isSticky ? {...sticky_styles} : {} } ref={headerRef}>
            <Box
                bg="gray.600"
                // bg="white"
                w="full"
                px={{ base: 2, sm: 4 }}
                py={2}>
                <Flex alignItems="center" justifyContent="space-between">
                    <Image
                        src={logo_cnk}
                        height="32px"
                        width="32px" />
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
