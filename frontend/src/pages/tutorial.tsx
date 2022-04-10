import React from "react";

import BaseLayout from "../components/layout/BaseLayout";
import Section from "../components/layout/Section";
import TutorialSection from "../components/organisms/TutorialSection";

const TutorialPage = () => {
  return (
    <BaseLayout>
      <Section>
        <TutorialSection />
      </Section>
    </BaseLayout>
  );
};

export default TutorialPage;
