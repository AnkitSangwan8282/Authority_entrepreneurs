import React from "react";
import {
  Button,
  ButtonGroup,
  IconButton,
  Input,
  Stack,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <Box w="100%" p="8">
      <Stack
        spacing="8"
        direction={{
          base: "column",
          md: "row",
        }}
        py={{
          base: "12",
          md: "16",
        }}
        m="auto"
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Stack
          spacing={{
            base: "4",
            md: "6",
          }}
        >
          <Image
            src="https://authorityentrepreneurs.com/wp-content/uploads/2023/02/Logo-Orange-300x52.png"
            alt="logo"
            w="120px"
            ml="70px"
          />
        </Stack>
        <Stack
          direction={{
            base: "column-reverse",
            md: "column",
            lg: "row",
          }}
          spacing={{
            base: "12",
            md: "8",
          }}
        >
          <Stack direction="row" spacing="8">
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Privacy Policy
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">Terms of use</Button>
                <Button variant="link">Polices</Button>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Legal
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">Privacy</Button>
                <Button variant="link">Term & Conditions</Button>
                <Button variant="link">License</Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing="4">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Subscribe Us
            </Text>
            <Stack
              spacing="4"
              direction={{
                base: "column",
                sm: "row",
              }}
              maxW={{
                lg: "360px",
              }}
            >
              <Input placeholder="Enter your email" type="email" required />
              <Button color="red">Subscribe</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{
          base: "column-reverse",
          md: "row",
        }}
        align="center"
      >
        <Text fontSize="bold" color="black" paddingLeft="15%">
          &copy; {new Date().getFullYear()} Authority Entrepreneurs | Powered by Fist of Success Private Limited - All
          rights reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Box>
  );
}

export default Footer;
