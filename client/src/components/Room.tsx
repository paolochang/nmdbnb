import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaStar, FaRegHeart } from "react-icons/fa";

const Room = () => {
  const textColor = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems="flex-start" spacing={-0.5}>
      <Box position="relative" overflow="hidden" mb="2" rounded="3xl">
        <Image
          minH="280"
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
        <Text fontSize="sm" color={textColor}>
          Viewed 10 times last week
        </Text>
      </Box>
      <Text fontSize="sm" color={textColor}>
        <Text as="b">$72</Text>/ night
      </Text>
    </VStack>
  );
};

export default Room;
