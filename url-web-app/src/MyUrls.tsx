import { useEffect, useState } from "react";
import { GetUserUrls } from "./service";
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    Link,
    HStack,
    Badge,
    Spacer,
} from "@chakra-ui/react";

export const MyUrls = () => {
    const WEB_URL = import.meta.env.VITE_WEB_APP_URL;

    // Use 'any' for now, but ideally define a type interface later
    const [urls, setUrls] = useState<any[]>([]);

    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            window.location.href = "/";
            return;
        }
        const fetchData = async () => {
            const urlsList = await GetUserUrls();
            setUrls(urlsList);
        };
        fetchData();
    }, []);

    return (
        <Container maxW="container.md" py={10}>
            <VStack gap={2} mb={8} align="start" w="full">
                <Heading as="h2" size="xl" color="#0f2942">
                    Your Dashboard
                </Heading>
                <Text color="gray.500">
                    Manage and track the performance of your links.
                </Text>
            </VStack>

            <VStack gap={5} align="stretch">
                {urls.length === 0 ? (
                    <Box
                        p={8}
                        textAlign="center"
                        bg="gray.50"
                        borderRadius="lg"
                        border="1px dashed"
                        borderColor="gray.300"
                    >
                        <Text color="gray.500">
                            No links found. Create one to get started!
                        </Text>
                    </Box>
                ) : (
                    urls.map((url: any) => (
                        <Box
                            key={url.short_code}
                            p={6}
                            bg="white"
                            borderRadius="xl"
                            boxShadow="sm"
                            border="1px solid"
                            borderColor="gray.100"
                            transition="all 0.2s"
                            _hover={{
                                borderColor: "#0f2942",
                                boxShadow: "md",
                                transform: "translateY(-2px)",
                            }}
                        >
                            <VStack align="stretch" gap={3}>
                                <HStack>
                                    <Link
                                        href={`${WEB_URL}/${url.short_code}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="#0f2942"
                                        fontSize="lg"
                                        fontWeight="bold"
                                        _hover={{
                                            textDecoration: "underline",
                                            color: "blue.600",
                                        }}
                                    >
                                        {WEB_URL}/{url.short_code}
                                    </Link>
                                    <Spacer />
                                    <Badge
                                        colorPalette="blue"
                                        variant="subtle"
                                        px={2}
                                        py={1}
                                        borderRadius="md"
                                        fontSize="xs"
                                    >
                                        {url.click_count} Clicks
                                    </Badge>
                                </HStack>

                                <Box>
                                    <Text
                                        fontSize="xs"
                                        color="gray.400"
                                        fontWeight="bold"
                                        textTransform="uppercase"
                                    >
                                        Original Destination
                                    </Text>
                                    <Link
                                        href={url.long_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="gray.600"
                                        fontSize="sm"
                                        truncate
                                        display="block"
                                        maxW="100%"
                                        _hover={{ color: "blue.500" }}
                                    >
                                        {url.long_url}
                                    </Link>
                                </Box>

                                <Box
                                    pt={2}
                                    borderTop="1px solid"
                                    borderColor="gray.50"
                                >
                                    <Text fontSize="xs" color="gray.400">
                                        Created on{" "}
                                        {new Date(
                                            url.created_at
                                        ).toLocaleDateString()}{" "}
                                        at{" "}
                                        {new Date(
                                            url.created_at
                                        ).toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </Text>
                                </Box>
                            </VStack>
                        </Box>
                    ))
                )}
            </VStack>
        </Container>
    );
};
