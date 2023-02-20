import { Box, Button, HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa";

const Root = () => {
  return (
    <Box>
      <HStack justifyContent={"space-between"} py={4} px={8} borderBottom={1}>
        <Box color="red.500">
          <FaAirbnb size={28} />
        </Box>
        <HStack spacing={2}>
          <Button>Log in</Button>
          <Button colorScheme={"red"}>Sign up</Button>
        </HStack>
      </HStack>
      Root
      <Outlet />
    </Box>
  );
};

export default Root;
