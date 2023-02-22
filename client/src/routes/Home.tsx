import { Box, Grid } from "@chakra-ui/react";
import Room from "../components/Room";

const Home = () => {
  return (
    <Grid
      pt="10"
      px={{ base: 4, lg: 20 }}
      templateColumns={{
        sm: "1fr",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
        xl: "repeat(4,1fr)",
        "2xl": "repeat(5,1fr)",
      }}
      columnGap="4"
      rowGap="8"
    >
      {[
        1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
        1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
      ].map((index) => (
        <Room key={index} />
      ))}
      <Box w="100%" h="280" bg="red.500" />
      <Box w="100%" h="280" bg="red.500" />
      <Box w="100%" h="280" bg="red.500" />
      <Box w="100%" h="280" bg="red.500" />
      <Box w="100%" h="280" bg="red.500" />
      <Box w="100%" h="280" bg="red.500" />
    </Grid>
  );
};

export default Home;
