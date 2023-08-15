import React, { useState } from "react";
import { OrthographicCamera } from "@react-three/drei";
import "../styles/composition.scss";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useSpring, animated } from "@react-spring/three";
import Hexagons from "./Hexagons";
import NavIcon from "./NavIcon";
import Introduction from "../screens/Introduction";
import Skills from "../screens/Skills";
import About from "../screens/About";
import Menu from "./Menu";
import Testimonials from "../screens/Testimonials";
import useIsMobile from "../hooks/useIsMobile";

const Composition = () => {
    const { backgroundColor } = useSpring({
        backgroundColor: "#161616",
    });
    const [open, setOpen] = useState(false);
    const [state, setState] = useState("INTRO");

    const isMobile = useIsMobile();

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
            <Introduction
                isActive={state === "INTRO" && !open}
                setState={setState}
            />
            <Skills isActive={state === "SKILLS" && !open} />
            <About isActive={state === "ABOUT" && !open} setState={setState} />
            <Testimonials isActive={state === "TESTIMONIALS" && !open} />
            {!isMobile && <Hexagons state={state} open={open} />}
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
