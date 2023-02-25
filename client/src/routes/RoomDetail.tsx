import { Box, Grid, GridItem, Heading, HStack, Text } from "@chakra-ui/layout";
import { Image, Skeleton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoomDetail } from "../api";
import { IRoomDetail } from "../types";
import { FaStar } from "react-icons/fa";
import DefaultImage from "../assets/images/default.png";

const RoomDetail = () => {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>(
    ["rooms", roomPk],
    getRoomDetail
  );

  return (
    <Box pt="10" px={{ base: 4, lg: 20 }}>
      <Skeleton mb="2" h="43px" w="50%" isLoaded={!isLoading}>
        <Heading>{data?.name}</Heading>
      </Skeleton>
      <Skeleton h="16px" w="40%" isLoaded={!isLoading}>
        <HStack>
          <FaStar size={15} />
          <Text>{data?.rating} · </Text>
          <Text>
            {data?.city}, {data?.country}
          </Text>
        </HStack>
      </Skeleton>
      <Grid
        mt={8}
        rounded="xl"
        overflow="hidden"
        height="60vh"
        templateRows={"1fr 1fr"}
        templateColumns={"repeat(4, 1fr)"}
        gap={3}
      >
        {[...Array(5)].map((_, index) => (
          <GridItem
            key={index}
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            overflow="hidden"
          >
            <Skeleton isLoaded={!isLoading} h="100%" w="100%">
              <Image
                w="100%"
                h="100%"
                objectFit="cover"
                src={
                  DefaultImage
                  // data?.photos[index].file
                  //   ? data.photos[index].file
                  //   : DefaultImage
                }
              />
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default RoomDetail;
