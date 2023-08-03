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
import About from "./About";
import Menu from "./Menu";

const Composition = () => {
    const { backgroundColor } = useSpring({
        backgroundColor: "#161616",
    });
    const [open, setOpen] = useState(false);
    const [state, setState] = useState("ABOUT");

    return (
        <>
            <EffectComposer>
                <Bloom luminanceThreshold={0} luminanceSmoothing={2.3} />
            </EffectComposer>

            <NavIcon open={open} setOpen={setOpen} />
            <Menu
                isActive={open}
                setState={setState}
                closeMenu={() => setOpen(false)}
            />

            <Introduction isActive={state === "INTRO" && !open} />
            <Skills isActive={state === "SKILLS" && !open} />
            <About isActive={state === "ABOUT" && !open} />

            <Hexagons state={state} open={open} />

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
