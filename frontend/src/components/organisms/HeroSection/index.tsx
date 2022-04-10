import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { HeroStyle } from "./style";

const HeroSection = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="calc(100vh - 100px)"
      color="white"
      position="relative"
      css={HeroStyle()}
    >
      <VStack spacing="5">
        <Heading>Quantum Prisoner's Dilemma</Heading>
        <Button colorScheme="orange" onClick={() => navigate("/game")}>
          Play the Game
        </Button>
      </VStack>
      <StaticImage
        src="../../../images/hero-image.jpg"
        alt="hero-image"
        className="image-container"
      />
    </Flex>
  );
};

export default HeroSection;
