import React, { Suspense, useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
    PerspectiveCamera,
    OrthographicCamera,
    Stage,
    Environment,
    OrbitControls,
    Cylinder,
    Text3D,
    useScroll,
    useCamera,
} from "@react-three/drei";
import * as THREE from "three";
import { Vector3 } from "three";
import { useControls } from "leva";
import {
    EffectComposer,
    DepthOfField,
    Bloom,
    Noise,
    Vignette,
} from "@react-three/postprocessing";
import "../styles/composition.scss";
import { useSpring, animated } from "@react-spring/three";
import anime from "animejs/lib/anime.es.js";

const Hexagon = ({ x, y }) => {
    const [hovered, setHover] = useState(false);
    const ref = useRef();

    // const values = {
    //     color: "royalblue",
    //     points: 6,
    //     positionZ: 0,
    // };

    const { color, points, position, args } = useSpring({
        color: hovered ? "royalblue" : "#000",
        points: hovered ? 6 : 6,
        position: hovered ? [x * 2.75, y * 4.75, -5] : [x * 2.75, y * 4.75, 0],
        args: hovered ? [3, 3, 5, 6] : [3, 3, 5, 6],
    });

    // useEffect(() => {
    //     console.log("test");
    //     anime({
    //         targets: values,
    //         color: hovered ? "#FFBC42" : "royalblue",
    //         points: hovered ? 32 : 6,
    //         positionZ: hovered ? -5 : 0,
    //         easing: "linear",
    //         // round: 1,
    //         duration: 3000,
    //     });
    // }, [hovered]);

    return (
        // <animated.Cylinder
        //     position={[x * 2.75, y * 4.75, values.positionZ]}
        //     // rotateZ={Math.PI / 2}
        //     rotation={[Math.PI / 2, 0, 0]}
        //     args={[3, 3, 1, values.points]}
        //     onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
        //     onPointerOut={(e) => setHover(false)}
        // >
        //     <animated.meshPhongMaterial
        //         // emissive="red"
        //         emissiveIntensity={emissiveIntensity}
        //         toneMapped={false}
        //         color={values.color}
        //         // roughness={0.5}
        //         // metalness={0.5}
        //     />
        // </animated.Cylinder>

        <animated.mesh
            ref={ref}
            position={position}
            // rotateZ={Math.PI / 2}
            rotation={[Math.PI / 2, 0, 0]}
            onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
            onPointerOut={(e) => setHover(false)}
        >
            <animated.cylinderGeometry args={[3, 3, 5, 6]} />
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
    return Array.from({ length: 15 }, (_, i) => (
        <Hexagon position={[i * 2.75 + Math.round(i / 5) * 2, i * 4.75, 1]} />
    ));
};

const Composition = () => {
    const scroll = useScroll();
    const { camera } = useThree();
    const [isPhase2, setIsPhase2] = useState(false);

    const { backgroundColor } = useSpring({
        // backgroundColor: isPhase2 ? "#000000" : "#FFFFFF",
        backgroundColor: "#161616",
    });

    // useFrame(() => {
    //     const rotationX = 1 - scroll.range(0, 1 / 5);
    //     camera.rotation.set(rotationX, 0, 0);

    //     console.log(scroll.visible(1 / 5, 5 / 5));
    //     console.log(backgroundColor.get());
    //     setIsPhase2((_) => scroll.visible(1 / 5, 5 / 5));
    // });

    const { cameraX, cameraY, cameraZ, rotationX, rotationY, rotationZ } =
        useControls({
            cameraX: {
                value: 0,
                min: -100,
                max: 100,
                step: 1,
            },
            cameraY: {
                value: 0,
                min: -100,
                max: 100,
                step: 1,
            },
            cameraZ: {
                value: 35,
                min: -100,
                max: 100,
                step: 1,
            },
            rotationX: {
                value: 0,
                min: -Math.PI,
                max: Math.PI,
                step: 0.05,
            },
            rotationY: {
                value: 0,
                min: -Math.PI,
                max: Math.PI,
                step: 0.05,
            },
            rotationZ: {
                value: 0,
                min: -Math.PI,
                max: Math.PI,
                step: 0.05,
            },
        });

    return (
        <>
            <EffectComposer>
                <Bloom
                    luminanceThreshold={0}
                    luminanceSmoothing={0.9}
                    // height={300}
                />
            </EffectComposer>

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
                <meshStandardMaterial color={"white"} />
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
                I'm Min Maung Maung
                <meshStandardMaterial color={"white"} />
            </Text3D>

            <Hexagon x={13} y={3} />
            <Hexagon x={11} y={3} />
            <Hexagon x={9} y={3} />
            <Hexagon x={7} y={3} />
            <Hexagon x={5} y={3} />
            <Hexagon x={3} y={3} />
            <Hexagon x={1} y={3} />
            <Hexagon x={-1} y={3} />
            <Hexagon x={-3} y={3} />
            <Hexagon x={-5} y={3} />
            <Hexagon x={-7} y={3} />
            <Hexagon x={-9} y={3} />
            <Hexagon x={-11} y={3} />
            <Hexagon x={-13} y={3} />

            <Hexagon x={14} y={2} />
            <Hexagon x={12} y={2} />
            <Hexagon x={10} y={2} />
            <Hexagon x={8} y={2} />
            <Hexagon x={6} y={2} />
            <Hexagon x={4} y={2} />

            <animated.color
                attach="background"
                args={[backgroundColor.get()]}
            />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrthographicCamera
                zoom={20}
                position={[cameraX, cameraY, cameraZ]}
                rotation={[rotationX, rotationY, rotationZ]}
                makeDefault
            />
        </>
    );
};

export default Composition;
