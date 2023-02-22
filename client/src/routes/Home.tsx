import { Box, Grid, Skeleton, SkeletonText } from "@chakra-ui/react";
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
      <Box color="red.500">
        <Skeleton rounded="2xl" mb={4} height={280} />
        <SkeletonText noOfLines={1} mb={4} />
        <SkeletonText w="50%" noOfLines={2} />
      </Box>
      <Box color="red.500">
        <Skeleton rounded="2xl" mb={4} height={280} />
        <SkeletonText noOfLines={1} mb={4} />
        <SkeletonText w="50%" noOfLines={2} />
      </Box>
      <Box color="red.500">
        <Skeleton rounded="2xl" mb={4} height={280} />
        <SkeletonText noOfLines={1} mb={4} />
        <SkeletonText w="50%" noOfLines={2} />
      </Box>
      <Box color="red.500">
        <Skeleton rounded="2xl" mb={4} height={280} />
        <SkeletonText noOfLines={1} mb={4} />
        <SkeletonText w="50%" noOfLines={2} />
      </Box>
      <Box color="red.500">
        <Skeleton rounded="2xl" mb={4} height={280} />
        <SkeletonText noOfLines={1} mb={4} />
        <SkeletonText w="50%" noOfLines={2} />
      </Box>
    </Grid>
  );
};

export default Home;
