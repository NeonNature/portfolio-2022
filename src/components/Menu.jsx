import React, { useEffect, useRef, useState } from "react";
import { useControls } from "leva";
import "../styles/composition.scss";
import { useSpring, animated } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import { Float, Image, Text, Text3D } from "@react-three/drei";

const MenuLink = ({ onClick, position, text, disabled }) => {
    const [hovered, setHovered] = useState(false);
    const over = (e) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);
    useEffect(() => {
        if (hovered) document.body.style.cursor = "pointer";
        return () => (document.body.style.cursor = "auto");
    }, [hovered]);

    const { color } = useSpring({
        color: hovered ? "red" : "#fff",
    });

    return (
        <Float>
            <group
                position={position}
                onClick={(e) => (e.stopPropagation(), onClick())}
                onPointerOver={over}
                onPointerOut={out}
            >
                <Text
                    letterSpacing={0.01}
                    fontSize={1.5}
                    position={[0, 0, 0]}
                    font="/static/fonts/Play_Regular.json"
                >
                    {text}
                    <animated.meshStandardMaterial color={color} />
                </Text>
                {disabled && (
                    <Text
                        letterSpacing={0.01}
                        fontSize={0.5}
                        position={[0, -1, 0]}
                        font="/static/fonts/Play_Regular.json"
                    >
                        (coming soon!)
                        <animated.meshStandardMaterial color={color} />
                    </Text>
                )}
                <mesh position={[0, 0, -5]}>
                    <planeGeometry args={[3, 3]} />
                    <meshStandardMaterial transparent={true} opacity={0} />
                </mesh>
            </group>
        </Float>
    );
};

const Menu = ({ isActive, setState, closeMenu }) => {
    const { width, height } = useThree((state) => state.viewport);

    const { position, rotation } = useSpring({
        position: isActive ? [0, 2, 0] : [0, 0, 50],
        rotation: isActive ? [0, 0, 0] : [Math.PI, Math.PI, Math.PI],
    });

    let onMenuClick = (nav) => {
        closeMenu();
        setState(nav);
    };

    return (
        <animated.group position={position} rotation={rotation}>
            <MenuLink
                onClick={() => onMenuClick("INTRO")}
                text="Home"
                position={[0, 10, 0]}
            />

            <MenuLink
                onClick={() => onMenuClick("SKILLS")}
                text="Skills"
                position={[0, 6, 0]}
            />

            <MenuLink
                onClick={() => onMenuClick("ABOUT")}
                text="About Me"
                position={[0, 2, 0]}
            />

            <MenuLink
                onClick={() => onMenuClick("TESTIMONIALS")}
                text="Testimonials"
                position={[0, -2, 0]}
            />
            <MenuLink
                onClick={() => {}}
                disabled
                text="Projects"
                position={[0, -6, 0]}
            />
        </animated.group>
    );
};

export default Menu;
