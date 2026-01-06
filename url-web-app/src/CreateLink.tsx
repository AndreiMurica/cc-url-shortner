import {
    Box,
    Button,
    Input,
    VStack,
    Heading,
    Text,
    Container,
    Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ShortenURL } from "./service";

export const CreateLink = () => {
    const [url, setUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);
    const WEB_URL =
        import.meta.env.VITE_WEB_APP_URL || "http://localhost:30003";

    const generateLink = async () => {
        if (!url) return;
        ShortenURL(url).then((response) => {
            setShortenedUrl(response);
        });
    };

    return (
        <Container maxW="lg" centerContent pt={{ base: 10, md: 20 }}>
            <Box
                w="full"
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow="xl"
                border="1px solid"
                borderColor="gray.100"
            >
                <VStack gap={6} align="stretch">
                    <Box textAlign="center">
                        <Heading as="h1" size="lg" color="#0f2942" mb={2}>
                            Shorten URL
                        </Heading>
                        <Text color="gray.500" fontSize="sm">
                            Paste your long link below to create a short,
                            shareable URL.
                        </Text>
                    </Box>

                    <Box>
                        <Input
                            placeholder="https://example.com/very-long-url..."
                            size="lg"
                            variant="outline"
                            bg="gray.50"
                            border="1px solid"
                            borderColor="gray.300"
                            _focus={{
                                borderColor: "#0f2942",
                                boxShadow: "0 0 0 1px #0f2942",
                            }}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </Box>

                    <Button
                        size="lg"
                        bg="#0f2942"
                        color="white"
                        _hover={{ bg: "#1A365D" }}
                        onClick={() => generateLink()}
                        width="full"
                    >
                        Shorten URL
                    </Button>

                    {shortenedUrl && (
                        <Box
                            mt={4}
                            p={4}
                            bg="blue.50"
                            borderRadius="md"
                            border="1px dashed"
                            borderColor="blue.200"
                            textAlign="center"
                        >
                            <Text color="gray.600" fontSize="sm" mb={1}>
                                Your shortened URL:
                            </Text>
                            <Link
                                href={`${WEB_URL}/${shortenedUrl}`}
                                target="_blank"
                                rel="noreferrer"
                                color="#0f2942"
                                fontWeight="bold"
                                fontSize="lg"
                                textDecoration="underline"
                                _hover={{ color: "blue.600" }}
                            >
                                {WEB_URL}/{shortenedUrl}
                            </Link>
                        </Box>
                    )}
                </VStack>
            </Box>
        </Container>
    );
};
