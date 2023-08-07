import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { Float, Image, Text } from "@react-three/drei";
import useIsMobile from "../hooks/useIsMobile";
import PageLink from "./PageLink";

const ResumeLink = ({ position }) => {
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        if (hovered) document.body.style.cursor = "pointer";
        return () => (document.body.style.cursor = "auto");
    }, [hovered]);

    let onClick = () => {
        window.open(
            "/static/resume/Min Maung Maung ; Neon - Frontend Developer.pdf",
            "_blank",
            "noreferrer"
        );
    };

    return (
        <group position={position}>
            <Text
                letterSpacing={0.01}
                fontSize={1}
                color="#fff"
                position={[0, 0, 0]}
                font="/static/fonts/Play_Regular.json"
                onClick={onClick}
                onPointerOver={(e) => {
                    e.stopPropagation();
                    setHovered(true);
                }}
                onPointerOut={() => setHovered(false)}
            >
                resume
            </Text>
            <animated.mesh
                position={[0, -1, 0]}
                rotation={[0, Math.PI / 2, Math.PI / 2]}
            >
                <animated.boxGeometry args={[0.1, 0.1, 1.75]} />
                <animated.meshStandardMaterial color={"#fff"} />
            </animated.mesh>
        </group>
    );
};

const SocialIcon = ({ position, src, url }) => {
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        if (hovered) document.body.style.cursor = "pointer";
        return () => (document.body.style.cursor = "auto");
    }, [hovered]);

    let onClick = () => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <Float>
            <group
                onClick={onClick}
                onPointerOver={(e) => {
                    e.stopPropagation();
                    setHovered(true);
                }}
                onPointerOut={() => setHovered(false)}
            >
                <Image
                    receiveShadow
                    position={position}
                    rotation={[Math.PI / 2, Math.PI / 2, 0]}
                    url={src}
                >
                    <cylinderGeometry args={[1, 1, 0.1, 6]} />
                </Image>
            </group>
        </Float>
    );
};

const About = ({ isActive, setState }) => {
    let text =
        " Hey there! I'm Min Maung Maung, aka Neon—a developer from Myanmar. \n \n " +
        'I\'m on a wild ride to the "Silk" point of life, exploring all tech stuff out there! \n ' +
        "No limits, no boundaries—I dive into every cool technology I find. \n " +
        "That's why I proudly wear the title Tech Voyager! \n  \n \n" +
        "Ready to conquer the digital universe together? 🚀";

    const isMobile = useIsMobile();

    const {
        position,
        rotation,
        avatarPosition,
        resumePosition,
        detailPosition,
        detailScale,
    } = useSpring({
        position: isActive ? [0, 0, 0] : [0, 0, 50],
        rotation: isActive ? [0, 0, 0] : [Math.PI, Math.PI, Math.PI],
        avatarPosition: isMobile ? [0, 9.5, 0] : [20.5, 9.5, 0],
        resumePosition: isMobile ? [0, 2, 0] : [20.5, 2.5, 0],
        detailPosition: isMobile ? [0, -4, 0] : [-10, 6, 0],
        detailScale: isMobile ? 0.5 : 1,
    });

    return (
        <>
            <animated.group position={position} rotation={rotation}>
                <animated.group position={avatarPosition}>
                    <Image
                        position={[0, 0, 0]}
                        rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        url="/static/media/avatar.jpeg"
                    >
                        <cylinderGeometry args={[6, 6, 1, 6]} />
                    </Image>
                </animated.group>
                <animated.group position={detailPosition} scale={detailScale}>
                    <Text
                        letterSpacing={0.01}
                        fontSize={1}
                        color="#fff"
                        position={[0, 0, 0]}
                        font="/static/fonts/Play_Regular.json"
                    >
                        {text}
                    </Text>

                    <PageLink
                        position={[-10, -8, 0]}
                        onClick={() => setState("TESTIMONIALS")}
                        text="see what people say about me!"
                    />
                    <PageLink
                        position={[5, -8, 0]}
                        onClick={() => setState("SKILLS")}
                        text="skills"
                    />
                </animated.group>
                <animated.group position={resumePosition}>
                    <ResumeLink position={[0, 0, 0]} />
                    <SocialIcon
                        src="/static/media/linkedin.jpeg"
                        position={[-3, -2, 0]}
                        url="https://www.linkedin.com/in/min-maung-maung/"
                    />
                    <SocialIcon
                        src="/static/media/github.jpeg"
                        position={[0, -2, 0]}
                        url="https://github.com/NeonNature"
                    />
                    <SocialIcon
                        src="/static/media/mail.svg"
                        position={[3, -2, 0]}
                        url="mailto:mustachemaung@gmail.com"
                    />
                </animated.group>
            </animated.group>
        </>
    );
};

export default About;
