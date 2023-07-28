import React, { Suspense, useRef, useState, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import {
    OrthographicCamera,
    OrbitControls,
    Text3D,
    Html,
    useScroll,
} from "@react-three/drei";
import { useControls } from "leva";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import "../styles/composition.scss";
import { useSpring, animated } from "@react-spring/three";
import Hexagons from "./Hexagons";
import NavIcon from "./NavIcon";
import Introduction from "./Introduction";
import Skills from "./Skills";

const Composition = () => {
    const { backgroundColor } = useSpring({
        backgroundColor: "#161616",
    });
    const [open, setOpen] = useState(false);
    const [state, setState] = useState("SKILLS");

    return (
        <>
            <EffectComposer>
                <Bloom
                    luminanceThreshold={0}
                    luminanceSmoothing={0.9}
                    // height={300}
                />
            </EffectComposer>

            <NavIcon open={open} setOpen={setOpen} />

            <Introduction isActive={state === "INTRO" && !open} />
            <Skills isActive={state === "SKILLS" && !open} />

            <Hexagons />

            <OrbitControls makeDefault />

            <animated.color
                attach="background"
                args={[backgroundColor.get()]}
            />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrthographicCamera zoom={20} position={[0, 0, 35]} makeDefault />
        </>
    );
};

export default Composition;
