import Navbar from "../../molecules/Navbar";
import Footer from "../../molecules/Footer";
import React from "react";

const BaseLayout = (props: { children: JSX.Element }) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default BaseLayout;
