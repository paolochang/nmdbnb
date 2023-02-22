import { Box, Grid, Skeleton, SkeletonText } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Room from "../components/Room";

interface IPhoto {
  pk: number;
  file: string;
  description: string;
}

interface IRoom {
  pk: string;
  name: string;
  country: string;
  city: string;
  price: number;
  rating: number;
  is_owner: boolean;
  photos: IPhoto[];
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rooms, setRooms] = useState<IRoom[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/v1/rooms/");
      const json = await response.json();
      setRooms(json);
      setIsLoading(false);
    };
    fetchRooms();
  }, []);

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
      {isLoading
        ? [...Array(20)].map((e, i) => (
            <Box color="red.500">
              <Skeleton rounded="2xl" mb={4} height={280} />
              <SkeletonText noOfLines={1} mb={4} />
              <SkeletonText w="50%" noOfLines={2} />
            </Box>
          ))
        : rooms.map((room, index) => (
            <Room
              key={index}
              imageUrl="" // imageUrl={room.photos[0].file}
              name={room.name}
              rating={room.rating}
              city={room.city}
              country={room.country}
              price={room.price}
            />
          ))}
    </Grid>
  );
};

export default Home;
