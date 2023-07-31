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

    switch ((state, open)) {
        case ("ABOUT", false):
            return aboutRotations[hexagonValue];
        default:
            return rotations[hexagonValue];
    }
};

export default getRotation;
