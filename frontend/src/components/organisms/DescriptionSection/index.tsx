import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const DescriptionSection = () => {
  return (
    <VStack w="6xl">
      <Heading textAlign="start" fontSize="1.5rem">
        What is this about?
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        labore eum quos quasi enim! Iusto sapiente nobis illo, exercitationem
        impedit sunt ratione, repudiandae nulla modi consectetur aperiam
        commodi, porro pariatur? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Dolorem, odio molestias aspernatur laboriosam natus
        excepturi rem, maxime voluptatem quaerat deleniti quas cupiditate
        aliquam deserunt similique, facere numquam pariatur architecto at!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit minima
        nam, eveniet esse dolor incidunt repellat qui, ab sed est reiciendis!
        Porro deserunt excepturi nam fuga quae maxime hic voluptates?
      </Text>
    </VStack>
  );
};

export default DescriptionSection;
