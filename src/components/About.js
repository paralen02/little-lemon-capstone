import { Box, Heading, Text, Image, Center } from "@chakra-ui/react";
import chicago from "../images/chicago.jpg";

const About = () => {
    return (
        <Box position="relative" width="full" display="flex" justifyContent="center" alignItems="center">
            <Image src={chicago} alt="Restaurant Image" objectFit="cover" width="60%" />
            <Center position="absolute" top="0" left="0" right="0" bottom="0" backdropFilter="blur(2px)">
                <Box p={5} shadow="lg" borderWidth="1px" borderRadius="25px" maxW="md" bg="rgba(237, 237, 237, 0.8)" m={5}>
                    <Center>
                        <Heading fontSize="xl" textShadow="5px 2px #888">About Us</Heading>                    </Center>
                    <Text mt={4} style={{textAlign:'center', color:'#495e57'}} fontSize="large" >
                        Little Lemon Restaurant, a family run Mediterranean restaurant located in Chicago, Illinois. 
                        Please come and enjoy our wide selection of authentic Mediterranean cuisine!
                    </Text>
                </Box>
            </Center>
        </Box>
    );
};

export default About;