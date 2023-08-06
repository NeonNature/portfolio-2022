const rotations = [
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [Math.PI / 2, 0, Math.PI / 2],
    [Math.PI / 2, 0, Math.PI / 2],
    [Math.PI / 2, 0, Math.PI / 2],
    [Math.PI / 2, 0, Math.PI / 2],
    [Math.PI / 2, 0, Math.PI / 2],
];

const navRotations = [Math.PI / 2, Math.PI / 2, 0];

const testimonialRotations = [0, 0, 0];

const aboutRotations = [
    [Math.PI / 2, Math.PI / 2, 0],
    [Math.PI / 2, Math.PI / 2, 0],
    [Math.PI / 2, Math.PI / 2, 0],
    [Math.PI / 2, Math.PI / 2, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [0, Math.PI, 0],
    [Math.PI / 2, Math.PI / 2, 0],
    [Math.PI / 2, Math.PI / 2, 0],
    [Math.PI / 2, Math.PI / 2, 0],
    [Math.PI / 2, Math.PI / 2, 0],
    [Math.PI / 2, Math.PI / 2, 0],
];

const fallbackRotation = [0, 0, 0];

const getRotation = (hexagonValue, state, open) => {
    if (hexagonValue < 0 || hexagonValue > 23) {
        return fallbackRotation;
    }

    if (open) return navRotations;

    switch (state) {
        case "TESTIMONIALS":
            return testimonialRotations;
        case "ABOUT":
            return aboutRotations[hexagonValue];
        default:
            return rotations[hexagonValue];
    }
};

export default getRotation;
