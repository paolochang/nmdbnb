import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaStar, FaRegHeart } from "react-icons/fa";

const Home = () => {
  return (
    <Grid
      pt="10"
      px="20"
      templateColumns="repeat(4, 1fr)"
      columnGap="4"
      rowGap="8"
    >
      <VStack alignItems="flex-start" spacing={-0.5}>
        <Box position="relative" overflow="hidden" mb="2" rounded="3xl">
          <Image
            h="280"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/6ba850bd-6582-45a5-bce7-5b96dc6f30dd.jpeg?im_w=720"
          />
          <Button
            variant="unstyled"
            position="absolute"
            top={2}
            right={0}
            color="white"
          >
            <FaRegHeart size={20} />
          </Button>
        </Box>
        <Box>
          <Grid templateColumns="6fr 1fr" gap="2">
            <Text as="b" fontSize="md" noOfLines={1}>
              Lac-Beauport, Quebec, Canada
            </Text>
            <HStack spacing={1}>
              <FaStar size={15} />
              <Text>5.0</Text>
            </HStack>
          </Grid>
          <Text fontSize="sm" color="gray.600">
            Viewed 10 times last week
          </Text>
        </Box>
        <Text fontSize="sm" color="gray.600">
          <Text as="b">$72</Text>/ night
        </Text>
      </VStack>

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
