/* eslint-disable react-hooks/exhaustive-deps */
import { Flex } from "@chakra-ui/react";
import React from "react";
import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface PrivateLayoutProps {
    children: ReactNode;
}

const Layout: React.FC<PrivateLayoutProps> = ({ children }) => {
    return (
        <Flex height="100%" pt={0} flexDir={"column"} alignItems={"center"}>
            <Flex
                mt={0}
                bg="gray.100"
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
            >
                <Navbar />
            </Flex>
            <Flex flexDir={"column"} py={5} px={10} width="100%">
                {children}
            </Flex>
        </Flex>
    );
};

export default Layout;
