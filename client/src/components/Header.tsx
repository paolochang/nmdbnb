import {
  Box,
  Button,
  HStack,
  IconButton,
  LightMode,
  Stack,
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
  const ThemeIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <Stack
      direction={{
        sm: "column",
        md: "row",
      }}
      justifyContent={"space-between"}
      alignItems="center"
      spacing={{ sm: 4, md: 0 }}
      py={4}
      px={20}
      borderBottomWidth={1}
    >
      <Box color="red.500">
        <Link to="/">
          <FaAirbnb size={32} />
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
    </Stack>
  );
};

export default Header;
