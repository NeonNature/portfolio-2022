import React, { useRef, useState, useEffect, useMemo } from "react";
import { useControls } from "leva";
import "../styles/composition.scss";
import { useSpring, animated } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import { Text3D, Text } from "@react-three/drei";
import * as THREE from "three";

const Word = ({ children, ...props }) => {
    const color = new THREE.Color();
    const fontProps = {
        font: "/Inter-Bold.woff",
        fontSize: 2.5,
        letterSpacing: -0.05,
        lineHeight: 1,
        "material-toneMapped": false,
    };
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const over = (e) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);
    // Change the mouse cursor on hover
    useEffect(() => {
        if (hovered) document.body.style.cursor = "pointer";
        return () => (document.body.style.cursor = "auto");
    }, [hovered]);
    // Tie component to the render-loop
    useFrame(({ camera }) => {
        // Make text face the camera
        ref.current.quaternion.copy(camera.quaternion);
        // Animate font color
        ref.current.material.color.lerp(
            color.set(hovered ? "#fa2720" : "white"),
            0.1
        );
    });
    return (
        <Text
            ref={ref}
            onPointerOver={over}
            onPointerOut={out}
            onClick={() => console.log("clicked")}
            {...props}
            {...fontProps}
            children={children}
        />
    );
};

const SkillWord = ({ count = 4, radius = 20 }) => {
    const words = useMemo(() => {
        const temp = [];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (count + 1);
        const thetaSpan = (Math.PI * 2) / count;
        for (let i = 1; i < count + 1; i++)
            for (let j = 0; j < count; j++)
                temp.push([
                    new THREE.Vector3().setFromSpherical(
                        spherical.set(radius, phiSpan * i, thetaSpan * j)
                    ),
                    "React",
                ]);
        return temp;
    }, [count, radius]);
    return words.map(([pos, word], index) => (
        <Word key={index} position={pos} children={word} />
    ));
};

const Skills = ({ isActive }) => {
    const { width, height } = useThree((state) => state.viewport);

    const mesh = useRef();

    const { position, rotation } = useSpring({
        position: isActive
            ? [width / 2 - 36, -height / 2 + 17, 0]
            : [width / 2 - 36, -height / 2 + 17, 50],
        rotation: isActive ? [0, 0, 0] : [Math.PI, Math.PI, Math.PI],
    });

    return (
        <>
            <animated.group
                position={position}
                rotation={rotation}
                className="nav-icon"
            >
                <SkillWord count={8} radius={20} />
            </animated.group>
        </>
    );
};

export default Skills;
