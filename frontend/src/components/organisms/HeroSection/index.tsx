import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { navigate } from "gatsby";

const HeroSection = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="calc(100vh - 100px)"
      bg="green.400"
      color="white"
    >
      <VStack spacing="5">
        <Heading>Quantum Prisoner's Dilemma</Heading>
        <Button colorScheme="orange" onClick={() => navigate("/game")}>
          Play the Game
        </Button>
      </VStack>
    </Flex>
  );
};

export default HeroSection;
