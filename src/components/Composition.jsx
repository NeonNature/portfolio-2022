import React, { Suspense, useRef, useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import {
    OrthographicCamera,
    OrbitControls,
    Text3D,
    useScroll,
} from "@react-three/drei";
import { useControls } from "leva";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import "../styles/composition.scss";
import { useSpring, animated } from "@react-spring/three";
import Hexagons from "./Hexagons";

const Composition = () => {
    const { backgroundColor } = useSpring({
        backgroundColor: "#161616",
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
                <meshStandardMaterial color={"#ddd"} />
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
                I'm
                <meshStandardMaterial color={"#ddd"} />
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
                position={[4, -5, 15]}
            >
                Neon
                <meshStandardMaterial
                    color={"#2B6ABC"}
                    emissive={"#2B6ABC"}
                    emissiveIntensity={2}
                    toneMapped={false}
                />
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
                position={[10, -5, 15]}
            >
                , the Tech Voyager
                <meshStandardMaterial color={"#ddd"} />
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
                position={[0, -10, 15]}
            >
                Navigating the Digital Frontier!
                <meshStandardMaterial color={"white"} />
            </Text3D>

            <Hexagons />

            <OrbitControls makeDefault />

            <animated.color
                attach="background"
                args={[backgroundColor.get()]}
            />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrthographicCamera zoom={20} position={[0, 0, 35]} makeDefault />
        </>
    );
};

export default Composition;
