import * as React from "react";
import Composition from "../components/Composition";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";

const IndexPage = () => {
    return (
        <>
            <Canvas>
                <Composition />
            </Canvas>
            <Loader />
        </>
    );
};

export default IndexPage;

export const Head = () => <title>Portfolio 2022</title>;
