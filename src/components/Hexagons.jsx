import React, { useRef, useState } from "react";
import { useControls } from "leva";
import "../styles/composition.scss";
import { useSpring, animated } from "@react-spring/three";

const Hexagon = ({
    rotation = [Math.PI / 2, 0, 0],
    position = [-5, 0, 0],
    debugColor = "#fff",
    // debugColor = "#012E62",
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
            {/* <Hexagon position={[0, 0, 0]} rotation={[0, 0, 0]} /> */}

            <Hexagon position={[2, -7, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[7, -7, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[12, -7, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[4.5, -7, 4.5]} rotation={[0, Math.PI, 0]} />

            <Hexagon position={[-5, -14, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[-10, -14, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[-15, -14, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[-20, -14, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[-25, -14, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[-30, -14, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[-35, -14, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[0, -14, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[5, -14, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[10, -14, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[15, -14, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[20, -14, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[25, -14, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[30, -14, 0]} rotation={[0, Math.PI, 0]} />
            <Hexagon position={[35, -14, 0]} rotation={[0, Math.PI, 0]} />

            <Hexagon
                position={[33, 2, 0]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Hexagon
                position={[33, -3, 0]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <Hexagon
                position={[33, -8, 0]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />

            <Hexagon
                position={[33, 7, 0]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />

            <Hexagon
                position={[33, 12, 0]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
        </>
    );
};

export default Hexagons;
