import { Box } from "@chakra-ui/layout";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoomDetail } from "../api";

const RoomDetail = () => {
  const { roomPk } = useParams();
  const { data } = useQuery(["rooms", roomPk], getRoomDetail);
  return <Box>{data.name}</Box>;
};

export default RoomDetail;
