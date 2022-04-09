import React from "react";

import BaseLayout from "../components/layout/BaseLayout";
import DescriptionSection from "../components/organisms/DescriptionSection";
import HeroSection from "../components/organisms/HeroSection";

const IndexPage = () => {
  return (
    <>
      <BaseLayout>
        <HeroSection />
        <DescriptionSection />
      </BaseLayout>
    </>
  );
};

export default IndexPage;
