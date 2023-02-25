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
import { Link } from "react-router-dom";

interface IRoomProps {
  pk: number;
  name: string;
  rating: number;
  city: string;
  country: string;
  imageUrl: string;
  price: number;
}

const Room = ({
  pk,
  name,
  rating,
  city,
  country,
  imageUrl,
  price,
}: IRoomProps) => {
  const textColor = useColorModeValue("gray.600", "gray.300");
  return (
    <Link to={`rooms/${pk}`}>
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
    </Link>
  );
};

export default Room;
