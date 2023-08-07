import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { useThree } from "@react-three/fiber";

const Line = ({
    rotation = [Math.PI / 2, 0, 0],
    position = [-5, 0, 0],
    args = [0.1, 0.1, 10],
}) => {
    const { springPosition, springRotation } = useSpring({
        springPosition: position,
        springRotation: rotation,
    });
    return (
        <animated.mesh position={springPosition} rotation={springRotation}>
            <animated.boxGeometry args={args} />
            <animated.meshStandardMaterial color={"red"} />
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

    const [hovered, setHover] = useState(false);

    useEffect(() => {
        if (hovered) document.body.style.cursor = "pointer";
        return () => (document.body.style.cursor = "auto");
    }, [hovered]);

    return (
        <>
            <group
                position={[-width / 2 + 3, height / 2 - 3, 0]}
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen(!open);
                }}
                onPointerOver={(e) => {
                    e.stopPropagation();
                    setHover(true);
                }}
                onPointerOut={(e) => setHover(false)}
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
                <mesh position={[0, 0, 0]}>
                    <planeGeometry args={[3, 3]} />
                    <meshStandardMaterial transparent={true} opacity={0} />
                </mesh>
            </group>
        </>
    );
};

export default NavIcon;
