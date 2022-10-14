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
import "../styles/composition.scss";

const Composition = () => {
    const { cameraX, cameraY, cameraZ, rotationX, rotationY, rotationZ } =
        useControls({
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
        });

    return (
        <div className={"container"}>
            {/* <Canvas
                dpr={[1, 1.5]}
                shadows
                camera={{ position: [0, 5, 15], fov: 50 }}
            >
                <fog attach="fog" args={["#171720", 10, 50]} />
                <color attach="background" args={["#171720"]} />
                <Suspense fallback={null}>
                    <Environment preset="night" />
                </Suspense>
            </Canvas> */}
            <Canvas
                dpr={[1, 1.5]}
                shadows
                camera={{ position: [0, 5, 15], fov: 50 }}
            >
                <Cylinder>
                    <meshBasicMaterial color="hotpink" />
                </Cylinder>

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
