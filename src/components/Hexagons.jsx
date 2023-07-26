import React, { useRef, useState } from "react";
import { useControls } from "leva";
import "../styles/composition.scss";
import { useSpring, animated } from "@react-spring/three";

const Hexagon = ({
    rotation = [Math.PI / 2, 0, 0],
    position = [-5, 0, 0],
    debugColor = "#012E62",
}) => {
    const [hovered, setHover] = useState(false);
    const ref = useRef();

    const { color, springPosition, springRotation } = useSpring({
        color: hovered ? "#2A6ABC" : debugColor,
        springPosition: position,
        springRotation: rotation,
    });

    return (
        <animated.mesh
            ref={ref}
            position={springPosition}
            rotation={springRotation}
            onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
            onPointerOut={(e) => setHover(false)}
        >
            <animated.cylinderGeometry args={[3, 3, 1, 6]} />
            <animated.meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={2}
                toneMapped={false}
            />
        </animated.mesh>
    );
};

const Hexagons = () => {
    const { rotationX, rotationY, rotationZ } = useControls({
        rotationX: {
            value: -Math.PI,
            min: -Math.PI,
            max: Math.PI,
            step: 0.05,
        },
        rotationY: {
            value: 2.65,
            min: -Math.PI,
            max: Math.PI,
            step: 0.05,
        },
        rotationZ: {
            value: -Math.PI / 3,
            min: -Math.PI,
            max: Math.PI,
            step: 0.05,
        },
    });

    return (
        <>
            <Hexagon
                position={[0, 0, 0]}
                rotation={[0, Math.PI / 2, 0]}
                debugColor="orange"
            />

            <Hexagon
                position={[0, 3, -5]}
                rotation={[Math.PI / 3, Math.PI / 2, 0]} // 60deg
                debugColor="orange"
            />
            <Hexagon
                position={[5, 3, 2]}
                rotation={[-Math.PI / 3, Math.PI, -Math.PI / 3]} // 60deg
                debugColor="orange"
            />
            <Hexagon
                position={[-5, 3, 2]}
                rotation={[-Math.PI, 2.65, (-Math.PI * 4) / 3]}
                debugColor="yellow"
            />
        </>
    );
};

export default Hexagons;
