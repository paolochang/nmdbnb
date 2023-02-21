import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { FaAirbnb, FaMoon, FaUser, FaLock } from "react-icons/fa";

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
              <VStack>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Box color="gray.500">
                        <FaUser />
                      </Box>
                    }
                  />
                  <Input variant="filled" placeholder="Username" />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Box color="gray.500">
                        <FaLock />
                      </Box>
                    }
                  />
                  <Input
                    type="password"
                    variant="filled"
                    placeholder="Password"
                  />
                </InputGroup>
              </VStack>
              <Button mt="4" colorScheme="red" w="100%">
                Log in
              </Button>
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
