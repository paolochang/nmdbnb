import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  LightMode,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { FaUser, FaLock } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
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
              <Input type="password" variant="filled" placeholder="Password" />
            </InputGroup>
          </VStack>
          <LightMode>
            <Button mt="4" colorScheme="red" w="100%">
              Log in
            </Button>
          </LightMode>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
