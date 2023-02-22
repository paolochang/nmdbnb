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

interface IRoomProps {
  imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
}

const Room = ({ imageUrl, name, rating, city, country, price }: IRoomProps) => {
  const textColor = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems="flex-start" spacing={-0.5}>
      <Box position="relative" overflow="hidden" mb="2" rounded="3xl">
        <Image minH="280" src={imageUrl} />
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
            {name}
          </Text>
          <HStack spacing={1} alignItems="center">
            <FaStar size={15} />
            <Text>{rating}</Text>
          </HStack>
        </Grid>
        <Text fontSize="sm" color={textColor}>
          {city}, {country}
        </Text>
      </Box>
      <Text fontSize="sm" color={textColor}>
        <Text as="b">${price}</Text>/ night
      </Text>
    </VStack>
  );
};

export default Room;
