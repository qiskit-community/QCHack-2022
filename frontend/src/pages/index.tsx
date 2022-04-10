import React from "react";

import BaseLayout from "../components/layout/BaseLayout";
import Section from "../components/layout/Section";
import DescriptionSection from "../components/organisms/DescriptionSection";
import HeroSection from "../components/organisms/HeroSection";

const IndexPage = () => {
  return (
    <>
      <BaseLayout>
        <HeroSection />
        <Section>
          <DescriptionSection />
        </Section>
      </BaseLayout>
    </>
  );
};

export default IndexPage;
