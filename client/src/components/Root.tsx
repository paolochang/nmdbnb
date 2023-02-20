import {
  Box,
  Button,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { FaAirbnb, FaMoon } from "react-icons/fa";

const Root = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
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
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Log in</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>Hello</div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </HStack>
      Root
      <Outlet />
    </Box>
  );
};

export default Root;
