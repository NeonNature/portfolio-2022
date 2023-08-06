import React, { useEffect, useRef, useState } from "react";
import { useControls } from "leva";
import "../styles/composition.scss";
import { useSpring, animated } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import { Float, Image, Text, Text3D } from "@react-three/drei";

const PageLink = ({ onClick, position, text }) => {
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        if (hovered) document.body.style.cursor = "pointer";
        return () => (document.body.style.cursor = "auto");
    }, [hovered]);

    return (
        <group position={position}>
            <Text
                letterSpacing={0.01}
                fontSize={1}
                color="#fff"
                position={[0, 0, 0]}
                font="/static/fonts/Play_Regular.json"
                onClick={onClick}
                onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
                onPointerOut={() => setHovered(false)}
            >
                {text}
            </Text>
            <animated.mesh
                position={[0, -1, 0]}
                rotation={[0, Math.PI / 2, Math.PI / 2]}
            >
                <animated.boxGeometry args={[0.1, 0.1, 1.75]} />
                <animated.meshStandardMaterial color={"#fff"} />
            </animated.mesh>
        </group>
    );
};

export default PageLink;
