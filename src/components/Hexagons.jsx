import React, { useCallback, useMemo, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import getPosition from "../constants/positions";
import getRotation from "../constants/rotations";
import getColor from "../constants/colors";
import useIsMobile from "../hooks/useIsMobile";

const Hexagon = ({
    rotation = [Math.PI / 2, 0, 0],
    position = [-5, 0, 0],
    color = "#012E62",
}) => {
    const [hovered, setHover] = useState(false);
    const ref = useRef();

    const isMobile = useIsMobile();
    const { springColor, springPosition, springRotation, scale } = useSpring({
        scale: isMobile ? 0.5 : 1,
        springColor: hovered ? "#2A6ABC" : color,
        springPosition: position,
        springRotation: rotation,
    });

    return (
        <animated.mesh
            scale={scale}
            ref={ref}
            position={springPosition}
            rotation={springRotation}
            onPointerOver={(e) => {
                e.stopPropagation();
                setHover(true);
            }}
            onPointerOut={(e) => setHover(false)}
        >
            <animated.cylinderGeometry args={[3, 3, 1, 6]} />
            <animated.meshStandardMaterial
                color={springColor}
                emissive={springColor}
                emissiveIntensity={2}
                toneMapped={false}
            />
        </animated.mesh>
    );
};

const Hexagons = ({ state, open }) => {
    const getHexPosition = useCallback(
        (hexValue) => getPosition(hexValue, state, open),
        [state, open]
    );

    const getHexRotation = useCallback(
        (hexValue) => getRotation(hexValue, state, open),
        [state, open]
    );

    const getHexColor = useCallback(
        (hexValue) => getColor(hexValue, state, open),
        [state, open]
    );

    const hexagons = useMemo(() => {
        const hexagonComponents = [];

        for (let i = 0; i < 24; i++) {
            const position = getHexPosition(i);
            const rotation = getHexRotation(i);
            const color = getHexColor(i);

            hexagonComponents.push(
                <Hexagon
                    key={i}
                    position={position}
                    rotation={rotation}
                    color={color}
                />
            );
        }

        return hexagonComponents;
    }, [getHexColor, getHexPosition, getHexRotation]);

    return hexagons;
};

export default Hexagons;
