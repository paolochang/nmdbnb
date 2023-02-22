import {
  Box,
  Button,
  HStack,
  IconButton,
  LightMode,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

const Header = () => {
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("red.500", "red.200");
  const ThemeIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <HStack
      justifyContent={"space-between"}
      py={4}
      px={8}
      borderBottomWidth={1}
    >
      <Box color={logoColor}>
        <Link to="/">
          <FaAirbnb size={28} />
        </Link>
      </Box>
      <HStack spacing={2}>
        <IconButton
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle dark mode"
          icon={<ThemeIcon />}
        />
        <Button onClick={onLoginOpen}>Log in</Button>
        <LightMode>
          <Button colorScheme={"red"} onClick={onSignUpOpen}>
            Sign up
          </Button>
        </LightMode>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </HStack>
  );
};

export default Header;
