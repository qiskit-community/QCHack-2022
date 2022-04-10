import {
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Spacer,
  Switch,
  VStack,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { GameStyle } from "./style";
import MathJax from "react-mathjax2";

const GameSection = () => {
  const [qpu, setQpu] = React.useState(false);
  const [phi, setPhi] = React.useState(0);
  const [gamma, setGamma] = React.useState(0);
  const [theta, setTheta] = React.useState(0);
  const [picker, setPicker] = React.useState("simple");

  const handleSubmit = () => {
    fetch(process.env.APIURL || "http://localhost:8080", {
      method: "POST",
      body: JSON.stringify({
        gamma: gamma,
        theta: theta,
        phi: phi,
        qpu: qpu,
      }),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <VStack css={GameStyle()} w="6xl" spacing="10">
      <StaticImage
        src="../../../images/game-image.jpg"
        alt="choices"
        className="image-container"
      />
      <Flex w="4xl" alignItems="center">
        <Flex>
          <Box mt="-0.5" mr="3">
            <MathJax.Context input="ascii">
              <MathJax.Node>gamma</MathJax.Node>
            </MathJax.Context>
          </Box>
          <FormLabel>0</FormLabel>
          <Switch onChange={() => (gamma === 1 ? setGamma(0) : setGamma(1))} />
          <FormLabel ml="3">1</FormLabel>
        </Flex>
        <Spacer />
        <MathJax.Context input="ascii">
          <MathJax.Node>
            U(theta, phi) = ((e^(i phi) cos(theta/2),
            sin(theta/2)),(-sin(theta/2), e^(-i phi) cos(theta/2)))
          </MathJax.Node>
        </MathJax.Context>
      </Flex>
      <VStack spacing="5">
        <RadioGroup
          defaultValue="simple"
          onChange={(value) => setPicker(value)}
        >
          <HStack spacing="5">
            <Radio value="simple">Simple Picker</Radio>
            <Radio value="parameter">Parameter Picker</Radio>
          </HStack>
        </RadioGroup>
        {picker === "simple" ? (
          <HStack spacing="5">
            <Button
              onClick={() => {
                setPhi(0);
                setTheta(0);
              }}
              colorScheme="orange"
            >
              C
            </Button>
            <Button
              onClick={() => {
                setPhi(0);
                setTheta(1);
              }}
              colorScheme="orange"
            >
              D
            </Button>
            <Button
              onClick={() => {
                setPhi(1);
                setTheta(0);
              }}
              colorScheme="orange"
            >
              Q
            </Button>
          </HStack>
        ) : (
          <HStack
            spacing="5"
            w="6xl"
            justifyContent="center"
            alignItems="center"
          >
            <Flex>
              <Box mt="2" mr="3">
                <MathJax.Context input="ascii">
                  <MathJax.Node>phi</MathJax.Node>
                </MathJax.Context>
              </Box>
              <NumberInput
                defaultValue={0}
                min={0}
                max={1}
                precision={2}
                onChange={(value) => setPhi(parseFloat(value))}
              >
                <NumberInputField />
              </NumberInput>
            </Flex>
            <Flex>
              <Box mt="2" mr="3">
                <MathJax.Context input="ascii">
                  <MathJax.Node>theta</MathJax.Node>
                </MathJax.Context>
              </Box>
              <NumberInput
                defaultValue={0}
                min={0}
                max={1}
                precision={2}
                onChange={(value) => setTheta(parseFloat(value))}
              >
                <NumberInputField />
              </NumberInput>
            </Flex>
          </HStack>
        )}
      </VStack>
      <RadioGroup
        defaultValue="sim"
        onChange={(value) => (value === "sim" ? setQpu(false) : setQpu(true))}
      >
        <HStack>
          <Radio value="sim">Simulator</Radio>
          <Radio value="qpu">QPU</Radio>
        </HStack>
      </RadioGroup>
      <Button colorScheme="orange" onClick={() => handleSubmit()}>
        Submit
      </Button>
    </VStack>
  );
};

export default GameSection;
