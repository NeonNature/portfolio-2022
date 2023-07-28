import React, { useRef, useState } from "react";
import { useControls } from "leva";
import "../styles/composition.scss";
import { useSpring, animated } from "@react-spring/three";
import { useThree } from "@react-three/fiber";

const Line = ({
    rotation = [Math.PI / 2, 0, 0],
    position = [-5, 0, 0],
    debugColor = "red",
    // debugColor = "#012E62",
    args = [0.1, 0.1, 10],
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
            <animated.boxGeometry args={args} />
            <animated.meshStandardMaterial
                color={color}
                // emissive={color}
                // emissiveIntensity={2}
                // toneMapped={false}
            />
        </animated.mesh>
    );
};

const NavIcon = ({ open, setOpen }) => {
    const { width, height } = useThree((state) => state.viewport);

    const { position1, position2, position3, rotation1, rotation2, rotation3 } =
        useSpring({
            position1: open ? [0.375, -0.5, 0] : [-0.5, 1, 0],
            position2: open ? [0, 0, 0] : [0, 0, 0],
            position3: open ? [-0.125, 0, 0] : [-0.125, -1, 0],
            rotation1: open
                ? [Math.PI / 2, Math.PI / 4, Math.PI]
                : [0, Math.PI / 2, Math.PI / 2],
            rotation2: open
                ? [Math.PI / 2, -Math.PI / 4, Math.PI / 2]
                : [0, Math.PI / 2, Math.PI / 2],
            rotation3: open
                ? [Math.PI / 2, Math.PI / 4, Math.PI]
                : [0, Math.PI / 2, Math.PI / 2],
        });

    return (
        <>
            <group
                position={[-width / 2 + 3, height / 2 - 3, 0]}
                onClick={(e) => (e.stopPropagation(), setOpen(!open))}
                className="nav-icon"
            >
                <Line
                    position={position1}
                    rotation={rotation1}
                    args={[0.1, 0.1, 1]}
                />
                <Line
                    position={position2}
                    rotation={rotation2}
                    args={[0.1, 0.1, 2]}
                />
                <Line
                    position={position3}
                    rotation={rotation3}
                    args={[0.1, 0.1, 1.75]}
                />
                <animated.mesh position={[0, 0, 0]}>
                    <animated.planeGeometry args={[3, 3]} />
                    <animated.meshStandardMaterial
                        transparent={true}
                        opacity={0}
                    />
                </animated.mesh>
            </group>
        </>
    );
};

export default NavIcon;
