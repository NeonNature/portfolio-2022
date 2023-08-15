import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { Image, Text } from "@react-three/drei";
import useIsMobile from "../hooks/useIsMobile";

const testimonials = [
    {
        name: "Hunter Williams",
        role: "CTO, BetterCast",
        testimonial:
            "Neon is the sort of person any dev team would be happy to have. He gives feedback on issues and  \n " +
            "participates in discussions. He delivers quality code and when it can be improved he takes feedback with a \n " +
            "smile. This feedback is immediately results in better code for that issue and continues to use it on other \n " +
            " issues. I'm quite happy to have had him on the team. \n \n " +
            "His time with BetterCast was only limited by the company itself having to close and not once was he ever \n " +
            "seen on any chopping block. I would be happy to work with him or recommend anyone to work with him in \n " +
            "the future.",
        profile: "hunter.jpeg",
        url: "https://www.linkedin.com/in/hunter-williams-3aa11a22/",
        short:
            "He delivers quality code and when it can be \n " +
            "improved he takes feedback with a smile. \n \n " +
            "This feedback is immediately results in \n " +
            "better code for that issue and  \n " +
            "continues to use it on other issues. \n " +
            "I'm quite happy to have had him on the team. ",
    },
    {
        name: "Benjamin S Powell",
        role: "CEO, BetterCast",
        testimonial:
            "It has been a real pleasure working with Neon, He was an amazing addition to the \n " +
            "team and brought to the role a dedication and talent that far exceeds expectations. \n \n " +
            "I can not recommend him highly enough to any role that he is considered for and I believe he is an asset to \n " +
            "any project.",
        profile: "ben.jpeg",
        url: "https://www.linkedin.com/in/benjaminspowell/",
        short:
            "It has been a real pleasure working with Neon, \n " +
            "He was an amazing addition to the team and \n " +
            "brought to the role a dedication and talent \n " +
            "that far exceeds expectations. \n\n " +
            "I can not recommend him highly enough to any \n " +
            "role that he is considered for and I believe \n " +
            "he is an asset to any project.",
    },
    {
        name: "Zaw Kyi Han Htoo",
        role: "General Manager, Appvantage Asia",
        testimonial:
            "I've know Min since 2019. Min was a great professional to work with. He has exhibited consistency in his \n " +
            "ability to remain committed and focused. I recommend Min highly and look forward to working together in \n " +
            "future.",
        profile: "htoo.jpeg",
        url: "https://www.linkedin.com/in/zaw-kyi-han-htoo-06ab94a7/",
        short:
            "I've know Min since 2019. Min was a great \n " +
            "professional to work with. He has exhibited \n " +
            "consistency in his ability to remain committed \n " +
            "and focused. \n \n " +
            "I recommend Min highly and look forward to working \n " +
            "together in future.",
    },

    {
        name: "Clara Chong",
        role: "UI/UX Designer, Appvantage Asia",
        testimonial:
            "Min is a Full-Stack Developer you'd love to have on your team. In my professional experience as a UX \n " +
            "Designer and Researcher, I've worked alongside numerous developers and rarely would you find someone as \n " +
            "efficient, bright and sharp at such a young age. \n\n" +
            "While working together on a tight deadline for a large-scale digital transformation project, he was able to \n " +
            "fully understand my design requirements and translate them into web applications swiftly with little to no \n " +
            "hiccups. He ensured that every corner case and edge scenario was accounted for in his code and when we \n " +
            "tested it out, it was bug- free.When there was a scope creep, he would roll up his sleeves to get the code \n " +
            "done in no time. \n\n" +
            "Furthermore, Min continues to elevate his developer competency through his voracious appetite for learning \n " +
            "new technologies.I have no doubt that he will be an asset to any company he's joining next.",
        profile: "clara.jpeg",
        url: "https://www.linkedin.com/in/clarageous/",
        short:
            "While working together on a tight deadline \n " +
            "for a large- scale digital transformation \n " +
            "project, he was able to fully understand my \n " +
            "design requirements and translate them into \n " +
            "web applications swiftly with little to no \n" +
            "hiccups. \n\n" +
            "He ensured that every corner case and edge \n " +
            "scenario was accounted for in his code and \n " +
            "when we tested it out, it was bug-free. \n " +
            "When there was a scope creep, he would  \n " +
            "roll up his sleeves to get the code done in \n" +
            "no time.",
    },
    {
        name: "Sarada Lakshmi",
        role: "Project Manager, Appvantage Asia",
        testimonial:
            "Min Maung Maung worked as a Front-end developer for few of the projects that were led by me  \n" +
            "as a Project Manager. During his tenure with Appvantage Asia Pte Ltd, he exhibited strong technical skills.  \n " +
            "He was involved in several development and maintenance projects. His duties included technical design, \n " +
            "front end development, testing, deployments, and very well written documentation. Troubleshooting skills \n " +
            "are exceptional. He also played a supporting role in preparation of POCs, demos and presentations.  \n\n " +
            "He demonstrated professionalism, unwavering dedication, and commitment to his work.In addition, his hardworking \n " +
            "and steady style had motivated other team members in meeting stringent deadlines and targets.He was a very \n " +
            "good team player and always open to feedback.Possesses exceptional ability to learn new technologies quickly \n " +
            "and successfully. \n\n" +
            "I would like to reflect over his conduct during his stay with us. During his service, he had \n " +
            "been found very sincere, reliable, trustworthy, sociable, and pleasant. Many of our staff members were pleased \n " +
            "to work with him as a team. He will be a great asset wherever he belongs.",
        profile: "sarada.jpeg",
        url: "https://www.linkedin.com/in/sarada-lakshmi-medapati-7150b218/",
        short:
            "During his service, he had been found \n " +
            "very sincere, reliable, trustworthy, \n " +
            "sociable, and pleasant. Many of our \n" +
            "staff members were pleased to work with \n " +
            "to work with him as a team. \n\n" +
            "He will be a great asset wherever he belongs.",
    },
    {
        name: "Waing La Min Lwin",
        role: "Co-Founder, Lankyone",
        testimonial:
            "Min is the kind of developer you'd love to work together, whether the business is a startup or a big \n " +
            "corporation.His talent, passion, and creativity are what made him stand out as an outstanding talent. \n \n" +
            "Min and I were part of the founding team of Lankyone, a ride-sharing startup based in Yangon. During our \n" +
            "time at Lankyone, Min has demonstrated his passion and creativity by contributing to front-end \n " +
            "development tasks including developing a landing page and implementing both web and mobile applications \n " +
            " for the startup.His creativity is what enabled us to develop an application that offers a fun and refreshing \n " +
            "experience for end-users. \n\n" +
            "Min is also a person who thinks differently. He would bring unforeseen perspectives to the table, allowing us \n " +
            "to develop our products with a broader range of considerations for users eventually resulting in products \n " +
            "with better and more unique qualities. \n\n" +
            "I've seen him learning continuously and performing diligently at a top level for years, so I think he'll be a \n " +
            "great talent for whatever company he's working in or joining next.",
        profile: "waing.jpeg",
        url: "https://www.linkedin.com/in/wlmlwin/",
        short:
            "Min is also a person who thinks differently. \n " +
            "He would bring unforeseen perspectives to  \n " +
            "the table, allowing us to develop our products \n " +
            "with a broader range of considerations for \n " +
            "users eventually resulting in products \n " +
            "with better and more unique qualities. \n\n" +
            "I've seen him learning continuously and \n " +
            "performing diligently at a top level for \n " +
            "years, so I think he'll be a great talent for \n " +
            "whatever company he's working in or joining next.",
    },
];

const ColleagueDetails = ({ position, name, role, url }) => {
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        if (hovered) document.body.style.cursor = "pointer";
        return () => (document.body.style.cursor = "auto");
    }, [hovered]);

    let onClick = () => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <group position={position}>
            <Text
                letterSpacing={0.01}
                fontSize={1}
                color="#fff"
                position={[0, 0, 0]}
                font="/Play_Regular.json"
                onClick={onClick}
                onPointerOver={(e) => {
                    e.stopPropagation();
                    setHovered(true);
                }}
                onPointerOut={() => setHovered(false)}
            >
                {name}
            </Text>
            <animated.mesh
                position={[0, -1, 0]}
                rotation={[0, Math.PI / 2, Math.PI / 2]}
            >
                <animated.boxGeometry args={[0.1, 0.1, 1.75]} />
                <animated.meshStandardMaterial color={"#fff"} />
            </animated.mesh>
            <Text
                letterSpacing={0.01}
                fontSize={1}
                color="#fff"
                position={[0, -2, 0]}
                font="/Play_Regular.json"
                onClick={onClick}
                onPointerOver={(e) => {
                    e.stopPropagation();
                    setHovered(true);
                }}
                onPointerOut={() => setHovered(false)}
            >
                {role}
            </Text>
        </group>
    );
};

const ColleagueIcon = ({
    position,
    src,
    isActive,
    onClick,
    rotation = [0, 0, 0],
}) => {
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        if (hovered) document.body.style.cursor = "pointer";
        return () => (document.body.style.cursor = "auto");
    }, [hovered]);

    return (
        <animated.group
            rotation={rotation}
            onClick={onClick}
            onPointerOver={(e) => {
                e.stopPropagation();
                setHovered(true);
            }}
            onPointerOut={() => setHovered(false)}
        >
            <Image
                scale={isActive ? 3 : 1}
                receiveShadow
                position={position}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                url={src}
            >
                <cylinderGeometry args={[1, 1, 0.1, 6]} />
            </Image>
        </animated.group>
    );
};

const Testimonials = ({ isActive }) => {
    const { position, rotation } = useSpring({
        position: isActive ? [0, 0, 0] : [0, 0, 50],
        rotation: isActive ? [0, 0, 0] : [Math.PI, Math.PI, Math.PI],
    });

    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const textMesh = useRef();
    const lastIndex = testimonials.length - 1;

    useEffect(() => {
        const interval = setInterval(() => {
            if (activeTestimonial === lastIndex) {
                setActiveTestimonial(0);
            } else {
                setActiveTestimonial(activeTestimonial + 1);
            }
        }, 10000);
        return () => clearInterval(interval);
    }, [activeTestimonial, lastIndex]);

    const prevIndex = useMemo(() => {
        if (activeTestimonial === 0) {
            return lastIndex;
        }
        return activeTestimonial - 1;
    }, [activeTestimonial, lastIndex]);

    const nextIndex = useMemo(() => {
        if (activeTestimonial === lastIndex) {
            return 0;
        }

        return activeTestimonial + 1;
    }, [activeTestimonial, lastIndex]);

    let openUrl = (url) => window.open(url, "_blank", "noreferrer");

    const rotationalValue = useMemo(
        () => (activeTestimonial + 1) * 2 * Math.PI,
        [activeTestimonial]
    );

    const isMobile = useIsMobile();

    const { textRotation, iconRotation, textScale, iconPosition } = useSpring({
        textRotation: [rotationalValue, 0, 0],
        iconRotation: [0, rotationalValue, 0],
        iconPosition: isMobile ? [0, -15, 0] : [15.5, -9, 0],
        textScale: isMobile ? 0.75 : 1,
    });

    return (
        <>
            <animated.group position={position} rotation={rotation}>
                <animated.group
                    scale={textScale}
                    position={[0, 5, 0]}
                    ref={textMesh}
                    rotation={textRotation}
                >
                    <Text
                        letterSpacing={0.01}
                        fontSize={1}
                        color="#fff"
                        position={[0, 0, 0]}
                        font="/Play_Regular.json"
                    >
                        {`"${
                            isMobile
                                ? testimonials[activeTestimonial].short
                                : testimonials[activeTestimonial].testimonial
                        }"`}
                    </Text>
                </animated.group>
                <animated.group position={iconPosition}>
                    <ColleagueDetails
                        position={[0, 0, 0]}
                        name={testimonials[activeTestimonial].name}
                        role={testimonials[activeTestimonial].role}
                        url={testimonials[activeTestimonial].url}
                    />
                    <ColleagueIcon
                        src={`/${testimonials[prevIndex].profile}`}
                        position={[-3, 2, 0]}
                        onClick={() => setActiveTestimonial(prevIndex)}
                    />
                    <ColleagueIcon
                        isActive
                        src={`/${testimonials[activeTestimonial].profile}`}
                        rotation={iconRotation}
                        position={[0, 4, 0]}
                        onClick={() =>
                            openUrl(testimonials[activeTestimonial].url)
                        }
                    />
                    <ColleagueIcon
                        src={`/${testimonials[nextIndex].profile}`}
                        position={[3, 2, 0]}
                        onClick={() => setActiveTestimonial(nextIndex)}
                    />
                </animated.group>
            </animated.group>
        </>
    );
};

export default Testimonials;
