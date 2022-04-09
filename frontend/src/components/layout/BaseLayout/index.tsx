import React from "react";
import { Flex } from "@chakra-ui/react";

import Navbar from "../../molecules/Navbar";
import Footer from "../../molecules/Footer";

const BaseLayout = (props: { children: JSX.Element[] | JSX.Element }) => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Navbar />
      {props.children}
      <Footer />
    </Flex>
  );
};

export default BaseLayout;
