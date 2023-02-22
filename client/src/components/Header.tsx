import {
  Box,
  Button,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaAirbnb, FaMoon } from "react-icons/fa";
import LoginModal from "./LoginModal";

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <HStack justifyContent={"space-between"} py={4} px={8} borderBottom={1}>
      <Box color="red.500">
        <FaAirbnb size={28} />
      </Box>
      <HStack spacing={2}>
        <IconButton
          variant="ghost"
          aria-label="Toggle dark mode"
          icon={<FaMoon />}
        />
        <Button onClick={onOpen}>Log in</Button>
        <Button colorScheme={"red"}>Sign up</Button>
      </HStack>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
};

export default Header;
