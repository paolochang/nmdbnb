import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Avatar, Image, Skeleton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoomDetail, getRoomReviews } from "../api";
import { IReview, IRoomDetail } from "../types";
import { FaStar } from "react-icons/fa";
import DefaultImage from "../assets/images/default.png";

const RoomDetail = () => {
  const { roomPk } = useParams();
  const { isLoading: isRoomLoading, data: roomData } = useQuery<IRoomDetail>(
    ["rooms", roomPk],
    getRoomDetail
  );

  const { isLoading: isReviewsLoading, data: reviewsData } = useQuery<
    IReview[]
  >(["rooms", roomPk, "reviews"], getRoomReviews);

  return (
    <Box py="10" px={{ base: 4, lg: 20 }}>
      <Skeleton mb="2" h="43px" w="50%" isLoaded={!isRoomLoading}>
        <Heading>{roomData?.name}</Heading>
      </Skeleton>
      <Skeleton h="16px" w="40%" isLoaded={!isRoomLoading}>
        <HStack>
          <FaStar size={15} />
          <Text>{roomData?.rating} · </Text>
          <Text>
            {roomData?.city}, {roomData?.country}
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
            <Skeleton isLoaded={!isRoomLoading} h="100%" w="100%">
              <Image
                w="100%"
                h="100%"
                objectFit="cover"
                src={
                  DefaultImage
                  // roomData?.photos[index].file
                  //   ? roomData.photos[index].file
                  //   : DefaultImage
                }
              />
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <HStack justifyContent="space-between" w="40%" mt={10}>
        <VStack w="100%" alignItems="flex-start">
          <Skeleton w="80%" h="26px" isLoaded={!isRoomLoading}>
            <Heading fontSize="2xl">
              House hosted by {roomData?.owner.name}
            </Heading>
          </Skeleton>
          <Skeleton w="60%" h="18px" isLoaded={!isRoomLoading}>
            <HStack>
              <Text>
                {roomData?.rooms} bed{roomData?.rooms === 1 ? "" : "s"}
              </Text>
              <Text>·</Text>
              <Text>
                {roomData?.toilets} bath{roomData?.toilets === 1 ? "" : "s"}
              </Text>
            </HStack>
          </Skeleton>
        </VStack>
        <Avatar
          name={roomData?.owner.name}
          size="lg"
          src={roomData?.owner.avatar}
        />
      </HStack>
      <VStack alignItems="flex-start" mt={10}>
        <Skeleton w="30%" isLoaded={!isReviewsLoading}>
          <Heading fontSize="2xl">
            <HStack>
              <FaStar />
              <Text>{roomData?.rating}</Text>
              <Text>·</Text>
              <Text>
                {reviewsData?.length} review
                {reviewsData?.length === 1 ? "" : "s"}
              </Text>
            </HStack>
          </Heading>
        </Skeleton>
      </VStack>
    </Box>
  );
};

export default RoomDetail;
