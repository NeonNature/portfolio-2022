import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";
import PageLink from "../components/PageLink";
import useIsMobile from "../hooks/useIsMobile";

const Introduction = ({ isActive, setState }) => {
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

    const isMobile = useIsMobile();

    const { position, rotation, scale } = useSpring({
        position: isActive ? [isMobile ? -8 : 0, 4, 0] : [0, 4, 50],
        rotation: isActive ? [0, 0, 0] : [Math.PI, Math.PI, Math.PI],
        scale: isMobile ? 0.5 : 1,
    });

    return (
        <>
            <animated.group
                scale={scale}
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
                    font="/Play_Regular.json"
                    position={[0, 0, 0]}
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
                    font="/Play_Regular.json"
                    position={[0, -5, 0]}
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
                    font="/Play_Regular.json"
                    position={[4, -5, 0]}
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
                    font="/Play_Regular.json"
                    position={[10, -5, 0]}
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
                    font="/Play_Regular.json"
                    position={[0, -10, 0]}
                >
                    Navigating the Digital Frontier!
                    <meshStandardMaterial color={"white"} />
                </Text3D>

                <PageLink
                    position={[4, -13, 0]}
                    onClick={() => setState("ABOUT")}
                    text="more about me"
                />

                <PageLink
                    position={[20, -13, 0]}
                    onClick={() => setState("TESTIMONIALS")}
                    text="see what people say about me!"
                />
            </animated.group>
        </>
    );
};

export default Introduction;
