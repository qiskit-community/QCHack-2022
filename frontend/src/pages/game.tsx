import BaseLayout from "../components/layout/BaseLayout";
import React from "react";
import IntroSection from "../components/organisms/IntroSection";
import GameSection from "../components/organisms/GameSection";
import Section from "../components/layout/Section";

const GamePage = () => {
  return (
    <BaseLayout>
      <Section>
        <GameSection />
      </Section>
      <Section>
        <IntroSection />
      </Section>
    </BaseLayout>
  );
};

export default GamePage;
