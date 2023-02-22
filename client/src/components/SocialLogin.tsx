import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaComment } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const SocialLogin = () => {
  return (
    <Box mb={4}>
      <HStack my={4}>
        <Divider />
        <Text textTransform="uppercase" color="gray.500" fontSize="xs" as="b">
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button leftIcon={<ImGithub />} colorScheme="gray" w="100%">
          Continue with GitHub
        </Button>
        <Button leftIcon={<FaComment />} colorScheme="yellow" w="100%">
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
};

export default SocialLogin;
