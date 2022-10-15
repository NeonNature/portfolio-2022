import React, { Suspense, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
    PerspectiveCamera,
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

const Hexagon = ({ emissiveIntensity, position }) => {
    return (
        <Cylinder
            position={position}
            // rotateZ={Math.PI / 2}
            rotation={[Math.PI / 2, 0, 0]}
            args={[3, 3, 1, 6]}
        >
            <meshStandardMaterial
                // emissive="red"
                emissiveIntensity={emissiveIntensity}
                toneMapped={false}
                color="#9b59b6"
            />
        </Cylinder>
    );
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
            value: 5,
            min: -100,
            max: 100,
            step: 1,
        },
        cameraZ: {
            value: -12,
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
            <Canvas
                dpr={[1, 1.5]}
                shadows
                camera={{ position: [0, 5, 15], fov: 50 }}
            >
                <EffectComposer>
                    <Bloom
                        luminanceThreshold={0}
                        luminanceSmoothing={0.9}
                        // height={300}
                    />
                </EffectComposer>
                <Hexagon emissiveIntensity position={[1, 1, 1]} />
                <Hexagon emissiveIntensity position={[2, 2, 1]} />
                <OrbitControls makeDefault />
                <color attach="background" args={["#171720"]} />
                <ambientLight />
                <PerspectiveCamera
                    position={[cameraX, cameraY, cameraZ]}
                    rotation={[rotationX, rotationY, rotationZ]}
                    makeDefault
                />
            </Canvas>
        </div>
    );
};

export default Composition;
