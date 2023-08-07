import React, { useRef, useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import { Text, Float, PositionalAudio } from "@react-three/drei";
import * as THREE from "three";
import useIsMobile from "../hooks/useIsMobile";

const SkillList = [
    "HTML",
    // CSS
    "CSS",
    "CSS in JS",
    "CSS Modules",
    "CSS Flexbox",
    "CSS Grid",
    "Bootstrap",
    "Tailwind",
    "Sass/Scss",
    // JS related
    "Rescript",
    "React",
    "Javascript",
    "JQuery",
    "Typescript",
    "React Native",
    "GatsbyJS",
    "ThreeJS",
    // Others
    "Cypress",
    "RESTful API",
    "GraphQL",
    "npm",
    "git",
    "Responsive Web Design",
    "Accessibility",
    "Cross-browser",
];

const Word = ({ text, key, position }) => {
    const color = new THREE.Color();
    const fontProps = {
        font: "/static/fonts/Play_Regular.json",
        fontSize: 1.5,
        letterSpacing: -0.05,
        lineHeight: 1,
        "material-toneMapped": false,
    };
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const over = (e) => {
        e.stopPropagation();
        setHovered(true);
    };
    const out = () => setHovered(false);
    useEffect(() => {
        if (hovered) document.body.style.cursor = "pointer";
        return () => (document.body.style.cursor = "auto");
    }, [hovered]);

    useFrame(({ camera, clock }) => {
        ref.current.quaternion.copy(camera.quaternion);
        ref.current.material.color.lerp(
            color.set(hovered || clicked ? "#FFC275" : "white"),
            0.1
        );
    });

    const onClick = () => {
        setClicked(true);
    };

    const isMobile = useIsMobile();

    const { scale } = useSpring({
        scale: isMobile ? 0.5 : 1,
    });

    return (
        <Float>
            <animated.group position={position} scale={scale}>
                <Text
                    position={[0, 0, 0]}
                    ref={ref}
                    onPointerOver={over}
                    onPointerOut={out}
                    onClick={onClick}
                    key={key}
                    {...fontProps}
                >
                    {text}
                </Text>
            </animated.group>

            <group position={[0, 0, 0]}>
                {hovered && (
                    <PositionalAudio
                        url={"/static/media/sound1.wav"}
                        distance={100}
                        loop
                    />
                )}
            </group>
        </Float>
    );
};

const SkillWord = () => {
    const { width, height } = useThree((state) => state.viewport);

    const randomIntFromInterval = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return SkillList.map((val, index) => (
        <Word
            key={index}
            position={[
                randomIntFromInterval(width / 2 - 3, -width / 2 + 3),
                randomIntFromInterval(height / 2 - 3, -height / 2 + 3),
                0,
            ]}
            text={val}
        />
    ));
};

const Skills = ({ isActive }) => {
    const ref = useRef();

    const { position, rotation, visible } = useSpring({
        position: isActive ? [0, 0, 0] : [0, 0, 50],
        rotation: isActive ? [0, 0, 0] : [Math.PI, Math.PI, -Math.PI],
        visible: isActive,
    });

    return (
        <>
            <animated.group
                position={position}
                ref={ref}
                visible={visible}
                rotation={rotation}
            >
                <SkillWord />
            </animated.group>
        </>
    );
};

export default Skills;
