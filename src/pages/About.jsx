import { Text, Box, Flex, Heading } from "@chakra-ui/react";

function About() {
  return (
    <Flex direction={{ base: "column", md: "row" }} p={8} gap={16}>
      <Box flex="2" mt={4} fontSize="xl">
        <Text mb={4}>
          I'm a UX/UI designer with a passion for crafting intuitive digital experiences.
          Currently, I'm working on desktop software applications at Elgato,
          shaping tools that empower creators.</Text>
        <Text mb={4}>Before that, I focused on UX design for graphics engines, refining interfaces
          for both professional and casual users. My background spans user research,
          interface design, and A/B testing to create seamless and effective experiences.</Text>
        <Text mb={4}>I'm also exploring AI and product management, bridging the gap between design
          and strategy to create more meaningful and impactful products.</Text>
        <Text mb={4}>Originally from Portugal, I studied Design at the University of Porto and worked at
          Bosch before moving to Germany to continue my career in UX Design.</Text>
      </Box>

      <Box flex="1" mt={{ base: 0, md: 4 }} fontSize="xl">
        <Heading as="h2" mb={8} textTransform={"uppercase"}>
        Experience
        </Heading>

        <Heading as="h3">
        Elgato, a division of CORSAIR
        </Heading>
        <Text mb={4}>
        UX Designer
        </Text>

        <Heading as="h3" >
        GritWorld
        </Heading>
        <Text mb={4}>
        Junior UX/UI Designer
        </Text>

        <Heading as="h3" >
        Bosch
        </Heading>
        <Text >
        Graphic Designer
        </Text>

        <Heading as="h2" mb={8} mt={16} textTransform={"uppercase"}>
        Education
        </Heading>

        <Text color="gray.500">
        2017 - 2020
        </Text>

        <Heading as="h3">
        Master in Product and Industrial Design
        </Heading>
        <Text mb={4}>
        University of Porto, Portugal
        </Text>

        <Text color="gray.500">
        2014 - 2017
        </Text>

        <Heading as="h3" >
        Bachelor in Design
        </Heading>
        <Text mb={8}>
        University of Aveiro, Portugal
        </Text>

      </Box>
    </Flex>
  );
}

export default About;
