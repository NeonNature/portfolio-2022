import React, { useRef, useState, useEffect, useMemo } from "react";
import { useControls } from "leva";
import "../styles/composition.scss";
import { useSpring, animated } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import {
    Text3D,
    Text,
    Billboard,
    TrackballControls,
    Float,
    PositionalAudio,
} from "@react-three/drei";
import * as THREE from "three";

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

const Word = ({ ...props }) => {
    const color = new THREE.Color();
    const fontProps = {
        font: "/Inter-Bold.woff",
        fontSize: 1.5,
        letterSpacing: -0.05,
        lineHeight: 1,
        "material-toneMapped": false,
    };
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const over = (e) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);
    useEffect(() => {
        if (hovered) document.body.style.cursor = "pointer";
        return () => (document.body.style.cursor = "auto");
    }, [hovered]);

    useFrame(({ camera, clock }) => {
        ref.current.quaternion.copy(camera.quaternion);
        ref.current.material.color.lerp(
            color.set(hovered || clicked ? "#fa2720" : "white"),
            0.1
        );

        const a = clock.getElapsedTime();

        // ref.current.position.x =
        //     ref.current.position.x + 0.1 * Math.sin(2 * Math.PI * 0.25 * a);
    });

    const onClick = () => {
        setClicked(true);
    };

    return (
        <Float>
            <Text
                ref={ref}
                onPointerOver={over}
                onPointerOut={out}
                onClick={onClick}
                {...props}
                {...fontProps}
            >
                {props.text}
            </Text>

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
    const { width, height } = useThree((state) => state.viewport);

    const ref = useRef();

    const { position, rotation } = useSpring({
        position: isActive
            ? [width / 2 - 36, -height / 2 + 17, 0]
            : [width / 2 - 36, -height / 2 + 17, 50],
        rotation: isActive ? [0, 0, 0] : [Math.PI, Math.PI, Math.PI],
    });

    return (
        <>
            <animated.group position={position} ref={ref}>
                <SkillWord />
            </animated.group>
        </>
    );
};

export default Skills;
