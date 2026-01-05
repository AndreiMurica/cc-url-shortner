import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useEffect, useState } from "react";
import { LoginModal } from "../components/login";

function Navbar() {
    const [username, setUsername] = useState<string | null>(
        localStorage.getItem("userName")
    );

    useEffect(() => {
        const storedUser = localStorage.getItem("userName");
        const storedToken = localStorage.getItem("token");
        if (storedUser && storedToken) {
            setUsername(storedUser);
        }
    }, []);
    return (
        <Box
            className="nav"
            bg="#133d57"
            width="100%"
            px={{ base: 0, md: 4, xl: 20 }}
        >
            <Flex
                justifyContent={"left"}
                columnGap={12}
                width="100%"
                py={8}
                fontSize="18px"
                color="white"
            >
                <Link to="/">
                    <Text
                        color="white"
                        border="2px solid transparent"
                        _hover={{
                            fontWeight: "bold",
                            borderBottomColor: "white",
                            borderBottomWidth: "2px",
                        }}
                    >
                        Shorten URL
                    </Text>
                </Link>
                {localStorage.getItem("token") && (
                    <Link to="/my-urls">
                        <Text
                            color="white"
                            _hover={{
                                fontWeight: "bold",
                                borderBottomColor: "white",
                                borderBottomWidth: "2px",
                            }}
                        >
                            My URLs
                        </Text>
                    </Link>
                )}
            </Flex>
            <Box fontSize="16px" minW="200px" fontWeight="bold">
                {username ? (
                    <Text color="white" px={4} py={2}>
                        <>
                            {username}
                            <Button
                                ml={4}
                                bg={"#b30000"}
                                color={"white"}
                                border={"2px solid #b30000"}
                                _hover={{
                                    bg: "#ff1a1a",
                                    borderColor: "#ff1a1a",
                                }}
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    localStorage.removeItem("userName");
                                    setUsername(null);
                                    window.location.reload();
                                }}
                            >
                                Logout
                            </Button>
                        </>
                    </Text>
                ) : (
                    <LoginModal onLoginSuccess={setUsername} />
                )}
            </Box>
        </Box>
    );
}

export default Navbar;
