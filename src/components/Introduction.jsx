import React, { useRef, useState } from "react";
import { useControls } from "leva";
import "../styles/composition.scss";
import { useSpring, animated } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";

const Introduction = ({ isActive }) => {
    const { width, height } = useThree((state) => state.viewport);

    const mesh = useRef();

    useFrame(({ clock }) => {
        const amplitude = 0.1;
        const frequency = 0.25;

        const a = clock.getElapsedTime();

        mesh.current.rotation.x =
            amplitude * Math.sin(2 * Math.PI * frequency * a);

        mesh.current.rotation.y =
            amplitude * Math.sin(2 * Math.PI * frequency * a);

        mesh.current.rotation.z =
            amplitude * Math.sin(0.5 * Math.PI * frequency * a);
    });

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
                <Text3D
                    curveSegments={32}
                    bevelEnabled
                    bevelSize={0.04}
                    bevelThickness={0.1}
                    height={0.5}
                    lineHeight={0.5}
                    letterSpacing={-0.06}
                    size={1.5}
                    font="/static/fonts/Play_Regular.json"
                    position={[0, 0, 15]}
                >
                    hi.
                    <meshStandardMaterial color={"#ddd"} />
                </Text3D>

                <Text3D
                    curveSegments={32}
                    bevelEnabled
                    bevelSize={0.04}
                    bevelThickness={0.1}
                    height={0.5}
                    lineHeight={0.5}
                    letterSpacing={-0.06}
                    size={1.5}
                    font="/static/fonts/Play_Regular.json"
                    position={[0, -5, 15]}
                >
                    I'm
                    <meshStandardMaterial color={"#ddd"} />
                </Text3D>
                <Text3D
                    ref={mesh}
                    curveSegments={32}
                    bevelEnabled
                    bevelSize={0.04}
                    bevelThickness={0.1}
                    height={0.5}
                    lineHeight={0.5}
                    letterSpacing={-0.06}
                    size={1.5}
                    font="/static/fonts/Play_Regular.json"
                    position={[4, -5, 15]}
                    // rotation={[0.25, 0, 0.25]}
                >
                    Neon
                    <meshStandardMaterial
                        color={"#2B6ABC"}
                        emissive={"#2B6ABC"}
                        emissiveIntensity={2}
                        toneMapped={false}
                    />
                </Text3D>
                <Text3D
                    curveSegments={32}
                    bevelEnabled
                    bevelSize={0.04}
                    bevelThickness={0.1}
                    height={0.5}
                    lineHeight={0.5}
                    letterSpacing={-0.06}
                    size={1.5}
                    font="/static/fonts/Play_Regular.json"
                    position={[10, -5, 15]}
                >
                    , the Tech Voyager
                    <meshStandardMaterial color={"#ddd"} />
                </Text3D>

                <Text3D
                    curveSegments={32}
                    bevelEnabled
                    bevelSize={0.04}
                    bevelThickness={0.1}
                    height={0.5}
                    lineHeight={0.5}
                    letterSpacing={-0.06}
                    size={1.5}
                    font="/static/fonts/Play_Regular.json"
                    position={[0, -10, 15]}
                >
                    Navigating the Digital Frontier!
                    <meshStandardMaterial color={"white"} />
                </Text3D>
            </animated.group>
        </>
    );
};

export default Introduction;
