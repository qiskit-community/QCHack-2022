import { Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link, navigate } from "gatsby";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      h="100px"
      w="100%"
      alignItems="center"
      bg="gray.800"
      color="white"
      px="20"
    >
      <Heading fontSize="1.5rem" onClick={() => navigate("/")} cursor="pointer">
        Quantum Prisoner's Dilemma
      </Heading>
      <Spacer />
      <Flex w="8%" fontSize={"1.25rem"}>
        <Link to="/tutorial">Tutorial</Link>
        <Spacer />
        <Link to="/game">Game</Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
