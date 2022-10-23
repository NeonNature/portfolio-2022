import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
    PerspectiveCamera,
    OrthographicCamera,
    Stage,
    Environment,
    OrbitControls,
    Cylinder,
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

const Hexagon = ({ emissiveIntensity, x, y }) => {
    const [hovered, setHover] = useState(false);
    const ref = useRef();

    // const values = {
    //     color: "royalblue",
    //     points: 6,
    //     positionZ: 0,
    // };

    const { color, points, position, args } = useSpring({
        color: hovered ? "royalblue" : "#171720",
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
            <animated.meshStandardMaterial color={color} />
        </animated.mesh>
    );
};

const Hexagons = ({ emissiveIntensity }) => {
    return Array.from({ length: 15 }, (_, i) => (
        <Hexagon
            emissiveIntensity
            position={[i * 2.75 + Math.round(i / 5) * 2, i * 4.75, 1]}
        />
    ));
};

const Composition = () => {
    const {
        cameraX,
        cameraY,
        cameraZ,
        rotationX,
        rotationY,
        rotationZ,
        emissiveIntensity,
    } = useControls({
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
            value: -35,
            min: -100,
            max: 100,
            step: 1,
        },
        rotationX: {
            value: 0.5,
            min: -Math.PI,
            max: Math.PI,
            step: 0.05,
        },
        rotationY: {
            value: Math.PI,
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
        emissiveIntensity: {
            value: 0,
            min: -100,
            max: 100,
            step: 1,
        },
    });

    return (
        <div className={"container"}>
            <Canvas>
                <EffectComposer>
                    <Bloom
                        luminanceThreshold={0}
                        luminanceSmoothing={0.9}
                        // height={300}
                    />
                </EffectComposer>

                <Hexagon emissiveIntensity x={14} y={4} />
                <Hexagon emissiveIntensity x={12} y={4} />
                <Hexagon emissiveIntensity x={10} y={4} />
                <Hexagon emissiveIntensity x={8} y={4} />
                <Hexagon emissiveIntensity x={6} y={4} />
                <Hexagon emissiveIntensity x={4} y={4} />
                <Hexagon emissiveIntensity x={2} y={4} />
                <Hexagon emissiveIntensity x={0} y={4} />
                <Hexagon emissiveIntensity x={-2} y={4} />
                <Hexagon emissiveIntensity x={-4} y={4} />
                <Hexagon emissiveIntensity x={-6} y={4} />
                <Hexagon emissiveIntensity x={-8} y={4} />
                <Hexagon emissiveIntensity x={-10} y={4} />
                <Hexagon emissiveIntensity x={-12} y={4} />
                <Hexagon emissiveIntensity x={-14} y={4} />

                <Hexagon emissiveIntensity x={13} y={3} />
                <Hexagon emissiveIntensity x={11} y={3} />
                <Hexagon emissiveIntensity x={9} y={3} />
                <Hexagon emissiveIntensity x={7} y={3} />
                <Hexagon emissiveIntensity x={5} y={3} />
                <Hexagon emissiveIntensity x={3} y={3} />
                <Hexagon emissiveIntensity x={1} y={3} />
                <Hexagon emissiveIntensity x={-1} y={3} />
                <Hexagon emissiveIntensity x={-3} y={3} />
                <Hexagon emissiveIntensity x={-5} y={3} />
                <Hexagon emissiveIntensity x={-7} y={3} />
                <Hexagon emissiveIntensity x={-9} y={3} />
                <Hexagon emissiveIntensity x={-11} y={3} />
                <Hexagon emissiveIntensity x={-13} y={3} />

                <Hexagon emissiveIntensity x={14} y={2} />
                <Hexagon emissiveIntensity x={12} y={2} />
                <Hexagon emissiveIntensity x={10} y={2} />
                <Hexagon emissiveIntensity x={8} y={2} />
                <Hexagon emissiveIntensity x={6} y={2} />
                <Hexagon emissiveIntensity x={4} y={2} />
                <Hexagon emissiveIntensity x={2} y={2} />
                <Hexagon emissiveIntensity x={0} y={2} />
                <Hexagon emissiveIntensity x={-2} y={2} />
                <Hexagon emissiveIntensity x={-4} y={2} />
                <Hexagon emissiveIntensity x={-6} y={2} />
                <Hexagon emissiveIntensity x={-8} y={2} />
                <Hexagon emissiveIntensity x={-10} y={2} />
                <Hexagon emissiveIntensity x={-12} y={2} />
                <Hexagon emissiveIntensity x={-14} y={2} />

                <Hexagon emissiveIntensity x={13} y={1} />
                <Hexagon emissiveIntensity x={11} y={1} />
                <Hexagon emissiveIntensity x={9} y={1} />
                <Hexagon emissiveIntensity x={7} y={1} />
                <Hexagon emissiveIntensity x={5} y={1} />
                <Hexagon emissiveIntensity x={3} y={1} />
                <Hexagon emissiveIntensity x={1} y={1} />
                <Hexagon emissiveIntensity x={-1} y={1} />
                <Hexagon emissiveIntensity x={-3} y={1} />
                <Hexagon emissiveIntensity x={-5} y={1} />
                <Hexagon emissiveIntensity x={-7} y={1} />
                <Hexagon emissiveIntensity x={-9} y={1} />
                <Hexagon emissiveIntensity x={-11} y={1} />
                <Hexagon emissiveIntensity x={-13} y={1} />

                <Hexagon emissiveIntensity x={14} y={0} />
                <Hexagon emissiveIntensity x={12} y={0} />
                <Hexagon emissiveIntensity x={10} y={0} />
                <Hexagon emissiveIntensity x={8} y={0} />
                <Hexagon emissiveIntensity x={6} y={0} />
                <Hexagon emissiveIntensity x={4} y={0} />
                <Hexagon emissiveIntensity x={2} y={0} />
                <Hexagon emissiveIntensity x={0} y={0} />
                <Hexagon emissiveIntensity x={-2} y={0} />
                <Hexagon emissiveIntensity x={-4} y={0} />
                <Hexagon emissiveIntensity x={-6} y={0} />
                <Hexagon emissiveIntensity x={-8} y={0} />
                <Hexagon emissiveIntensity x={-10} y={0} />
                <Hexagon emissiveIntensity x={-12} y={0} />
                <Hexagon emissiveIntensity x={-14} y={0} />

                <Hexagon emissiveIntensity x={13} y={-1} />
                <Hexagon emissiveIntensity x={11} y={-1} />
                <Hexagon emissiveIntensity x={9} y={-1} />
                <Hexagon emissiveIntensity x={7} y={-1} />
                <Hexagon emissiveIntensity x={5} y={-1} />
                <Hexagon emissiveIntensity x={3} y={-1} />
                <Hexagon emissiveIntensity x={1} y={-1} />
                <Hexagon emissiveIntensity x={-1} y={-1} />
                <Hexagon emissiveIntensity x={-3} y={-1} />
                <Hexagon emissiveIntensity x={-5} y={-1} />
                <Hexagon emissiveIntensity x={-7} y={-1} />
                <Hexagon emissiveIntensity x={-9} y={-1} />
                <Hexagon emissiveIntensity x={-11} y={-1} />
                <Hexagon emissiveIntensity x={-13} y={-1} />

                <Hexagon emissiveIntensity x={14} y={-2} />
                <Hexagon emissiveIntensity x={12} y={-2} />
                <Hexagon emissiveIntensity x={10} y={-2} />
                <Hexagon emissiveIntensity x={8} y={-2} />
                <Hexagon emissiveIntensity x={6} y={-2} />
                <Hexagon emissiveIntensity x={4} y={-2} />
                <Hexagon emissiveIntensity x={2} y={-2} />
                <Hexagon emissiveIntensity x={0} y={-2} />
                <Hexagon emissiveIntensity x={-2} y={-2} />
                <Hexagon emissiveIntensity x={-4} y={-2} />
                <Hexagon emissiveIntensity x={-6} y={-2} />
                <Hexagon emissiveIntensity x={-8} y={-2} />
                <Hexagon emissiveIntensity x={-10} y={-2} />
                <Hexagon emissiveIntensity x={-12} y={-2} />
                <Hexagon emissiveIntensity x={-14} y={-2} />

                <Hexagon emissiveIntensity x={13} y={-3} />
                <Hexagon emissiveIntensity x={11} y={-3} />
                <Hexagon emissiveIntensity x={9} y={-3} />
                <Hexagon emissiveIntensity x={7} y={-3} />
                <Hexagon emissiveIntensity x={5} y={-3} />
                <Hexagon emissiveIntensity x={3} y={-3} />
                <Hexagon emissiveIntensity x={1} y={-3} />
                <Hexagon emissiveIntensity x={-1} y={-3} />
                <Hexagon emissiveIntensity x={-3} y={-3} />
                <Hexagon emissiveIntensity x={-5} y={-3} />
                <Hexagon emissiveIntensity x={-7} y={-3} />
                <Hexagon emissiveIntensity x={-9} y={-3} />
                <Hexagon emissiveIntensity x={-11} y={-3} />
                <Hexagon emissiveIntensity x={-13} y={-3} />

                <Hexagon emissiveIntensity x={14} y={-4} />
                <Hexagon emissiveIntensity x={12} y={-4} />
                <Hexagon emissiveIntensity x={10} y={-4} />
                <Hexagon emissiveIntensity x={8} y={-4} />
                <Hexagon emissiveIntensity x={6} y={-4} />
                <Hexagon emissiveIntensity x={4} y={-4} />
                <Hexagon emissiveIntensity x={2} y={-4} />
                <Hexagon emissiveIntensity x={0} y={-4} />
                <Hexagon emissiveIntensity x={-2} y={-4} />
                <Hexagon emissiveIntensity x={-4} y={-4} />
                <Hexagon emissiveIntensity x={-6} y={-4} />
                <Hexagon emissiveIntensity x={-8} y={-4} />
                <Hexagon emissiveIntensity x={-10} y={-4} />
                <Hexagon emissiveIntensity x={-12} y={-4} />
                <Hexagon emissiveIntensity x={-14} y={-4} />

                <OrbitControls makeDefault />
                <color attach="background" args={["#171720"]} />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrthographicCamera
                    zoom={20}
                    position={[cameraX, cameraY, cameraZ]}
                    rotation={[rotationX, rotationY, rotationZ]}
                    makeDefault
                />
                {/* <PerspectiveCamera
                    position={[cameraX, cameraY, cameraZ]}
                    rotation={[rotationX, rotationY, rotationZ]}
                    makeDefault
                /> */}
            </Canvas>
        </div>
    );
};

export default Composition;
