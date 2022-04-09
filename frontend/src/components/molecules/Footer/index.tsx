import { Box, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <VStack
      bg="gray.800"
      py="8"
      justifyContent="center"
      alignItems="center"
      w="100%"
      color="white"
    >
      <Text>
        A Project by Felix Zilk, Bhavna Kandra and Daniel Petutschnigg
      </Text>
      <Text>Developed for the QCHack 2022 by Quantumcoalition</Text>
    </VStack>
  );
};

export default Footer;
