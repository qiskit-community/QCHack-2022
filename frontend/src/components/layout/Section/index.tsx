import { Box } from "@chakra-ui/react";
import React from "react";

const Section = (props: { children: JSX.Element[] | JSX.Element }) => {
  return <Box my="20">{props.children}</Box>;
};

export default Section;
