import { Button, Dialog, Input, Stack, Tabs, Field } from "@chakra-ui/react";
import { useState } from "react";
import { Login, Register } from "../service";

type LoginModalProps = {
    onLoginSuccess: (username: string) => void;
};

export const LoginModal = ({ onLoginSuccess }: LoginModalProps) => {
    const [tabValue, setTabValue] = useState("login");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <Dialog.Root placement="center" motionPreset="slide-in-bottom">
            <Dialog.Trigger asChild>
                <Button
                    bg="white"
                    color="#133d57"
                    _hover={{ borderColor: "#133d57" }}
                    variant="solid"
                    size="sm"
                >
                    Sign In / Register
                </Button>
            </Dialog.Trigger>

            <Dialog.Backdrop bg="blackAlpha.500" />
            <Dialog.Positioner>
                <Dialog.Content
                    bg="white"
                    borderRadius="md"
                    boxShadow="xl"
                    maxW="md"
                >
                    <Dialog.Header
                        borderBottomWidth="1px"
                        borderColor="gray.100"
                        pb="4"
                    >
                        <Dialog.Title
                            color="#0f2942"
                            fontSize="xl"
                            fontWeight="bold"
                        >
                            Welcome
                        </Dialog.Title>
                    </Dialog.Header>

                    <Dialog.Body pt="6">
                        <Tabs.Root
                            value={tabValue}
                            onValueChange={(e) => setTabValue(e.value)}
                            fitted
                            variant="line"
                        >
                            <Tabs.List>
                                <Tabs.Trigger
                                    value="login"
                                    _selected={{
                                        color: "black",
                                    }}
                                >
                                    Login
                                </Tabs.Trigger>
                                <Tabs.Trigger
                                    value="register"
                                    _selected={{
                                        color: "black",
                                    }}
                                >
                                    Register
                                </Tabs.Trigger>
                            </Tabs.List>

                            <Tabs.Content value="login" pt="6">
                                <Stack gap="5">
                                    <Field.Root>
                                        <Field.Label
                                            color="gray.700"
                                            fontWeight="medium"
                                        >
                                            Username
                                        </Field.Label>
                                        <Input
                                            variant="outline"
                                            borderColor="gray.300"
                                            _focus={{
                                                borderColor: "#0f2942",
                                                ringColor: "#0f2942",
                                            }}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                        />
                                    </Field.Root>
                                    <Field.Root>
                                        <Field.Label
                                            color="gray.700"
                                            fontWeight="medium"
                                        >
                                            Password
                                        </Field.Label>
                                        <Input
                                            type="password"
                                            variant="outline"
                                            borderColor="gray.300"
                                            _focus={{
                                                borderColor: "#0f2942",
                                                ringColor: "#0f2942",
                                            }}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </Field.Root>
                                    <Button
                                        bg="#0f2942"
                                        color="white"
                                        width="full"
                                        _hover={{ bg: "#1A365D" }}
                                        onClick={() =>
                                            Login(username, password).then(
                                                (user) => {
                                                    if (user) {
                                                        onLoginSuccess(user);
                                                    }
                                                }
                                            )
                                        }
                                    >
                                        Sign In
                                    </Button>
                                </Stack>
                            </Tabs.Content>

                            <Tabs.Content value="register" pt="6">
                                <Stack gap="5">
                                    <Field.Root>
                                        <Field.Label
                                            color="gray.700"
                                            fontWeight="medium"
                                        >
                                            Name
                                        </Field.Label>
                                        <Input
                                            variant="outline"
                                            borderColor="gray.300"
                                            _focus={{
                                                borderColor: "#0f2942",
                                                ringColor: "#0f2942",
                                            }}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                        />
                                    </Field.Root>
                                    <Field.Root>
                                        <Field.Label
                                            color="gray.700"
                                            fontWeight="medium"
                                        >
                                            Email
                                        </Field.Label>
                                        <Input
                                            variant="outline"
                                            borderColor="gray.300"
                                            _focus={{
                                                borderColor: "#0f2942",
                                                ringColor: "#0f2942",
                                            }}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </Field.Root>
                                    <Field.Root>
                                        <Field.Label
                                            color="gray.700"
                                            fontWeight="medium"
                                        >
                                            Password
                                        </Field.Label>
                                        <Input
                                            type="password"
                                            variant="outline"
                                            borderColor="gray.300"
                                            _focus={{
                                                borderColor: "#0f2942",
                                                ringColor: "#0f2942",
                                            }}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </Field.Root>
                                    <Button
                                        bg="#0f2942"
                                        color="white"
                                        width="full"
                                        _hover={{ bg: "#1A365D" }}
                                        onClick={() =>
                                            Register(username, email, password)
                                        }
                                    >
                                        Create Account
                                    </Button>
                                </Stack>
                            </Tabs.Content>
                        </Tabs.Root>
                    </Dialog.Body>

                    <Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <Button variant="ghost" bg="#133d57" color="white">
                                Cancel
                            </Button>
                        </Dialog.CloseTrigger>
                    </Dialog.Footer>
                </Dialog.Content>
            </Dialog.Positioner>
        </Dialog.Root>
    );
};
