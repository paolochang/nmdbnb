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
import { FaUser, FaEnvelope, FaLock, FaTag } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal = ({ isOpen, onClose }: SignUpModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign Up</ModalHeader>
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
                    <FaTag />
                  </Box>
                }
              />
              <Input variant="filled" placeholder="Name" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color="gray.500">
                    <FaEnvelope />
                  </Box>
                }
              />
              <Input variant="filled" placeholder="Email" />
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
              Sign Up
            </Button>
          </LightMode>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SignUpModal;
