import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import BaseLayout from "../components/layout/BaseLayout";

const TutorialPage = () => {
  return (
    <BaseLayout>
      <VStack minH="calc(100vh - 100px)" w="6xl" my="20">
        <Heading>So how do I play?</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          veritatis dignissimos atque beatae distinctio recusandae doloribus,
          quibusdam quidem, rem sit vitae perferendis qui quod soluta. Eum et
          excepturi vel quod? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ad nesciunt ipsa tenetur consectetur illum
          voluptates neque impedit ab itaque? Obcaecati mollitia accusantium
          corporis unde sint natus aperiam eligendi nostrum ducimus? Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Laborum nam
          laboriosam sint, placeat minima ullam odit possimus? Possimus sed
          porro, vero molestias quibusdam non molestiae veniam. Culpa accusamus
          quos ea.
        </Text>
      </VStack>
    </BaseLayout>
  );
};

export default TutorialPage;
