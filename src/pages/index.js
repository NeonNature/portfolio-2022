import * as React from "react";
import Composition from "../components/Composition";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

const IndexPage = () => {
    return (
        <Canvas style={{ transition: "all 2s ease" }}>
            <ScrollControls pages={5}>
                <Composition />
            </ScrollControls>
        </Canvas>
    );
};

export default IndexPage;

export const Head = () => <title>Portfolio 2022</title>;
