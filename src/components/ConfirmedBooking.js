import React from "react";
import { Box, Heading, Image, Center, VStack } from "@chakra-ui/react";

const ConfirmedBooking = () => {
    return(
        <Center h="50vh">
            <VStack spacing={5}>
                <Heading as="h1" size="xl">Booking has been confirmed!</Heading>
                <Image src="https://cdn-icons-png.flaticon.com/512/8832/8832108.png" alt="Confirmed Icon" boxSize="150px" />
            </VStack>
        </Center>
    )
}

export default ConfirmedBooking;