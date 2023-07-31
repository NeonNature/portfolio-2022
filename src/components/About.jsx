import React, { useRef, useState } from "react";
import { useControls } from "leva";
import "../styles/composition.scss";
import { useSpring, animated } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import { Image, Text, Text3D } from "@react-three/drei";

const About = ({ isActive }) => {
    const { width, height } = useThree((state) => state.viewport);

    const { position, rotation } = useSpring({
        position: isActive
            ? [width / 2 - 36, -height / 2 + 17, 0]
            : [width / 2 - 36, -height / 2 + 17, 50],
        rotation: isActive ? [0, 0, 0] : [Math.PI, Math.PI, Math.PI],
    });

    let text =
        " Hey there! I'm Min Maung Maung, aka Neon—a developer from Myanmar. \n \n " +
        'I\'m on a wild ride to the "Silk" point of life, exploring all tech stuff out there! \n ' +
        "No limits, no boundaries—I dive into every cool technology I find. \n " +
        "That's why I proudly wear the title Tech Voyager! \n  \n \n" +
        "Ready to conquer the digital universe together? 🚀";

    return (
        <>
            <animated.group
                position={position}
                rotation={rotation}
                className="nav-icon"
            >
                <Image
                    position={[20.5, 9.5, 0]}
                    rotation={[Math.PI / 2, Math.PI / 2, 0]}
                    url="/static/media/avatar.jpeg"
                    // onClick={click}
                    // onPointerOver={over}
                    // onPointerOut={out}
                >
                    <cylinderGeometry args={[6, 6, 1, 6]} />
                </Image>
                <animated.group position={[0, 0, 0]}>
                    <Text
                        letterSpacing={0.01}
                        fontSize={1}
                        color="white"
                        position={[-10, 6, 0]}
                        font="/static/fonts/Play_Regular.json"
                    >
                        {text}
                    </Text>
                </animated.group>
            </animated.group>
        </>
    );
};

export default About;
