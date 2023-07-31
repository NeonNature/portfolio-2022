const colors = [
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
];

const aboutColors = [
    "#012E62",
    "#012E62",
    "#012E62",
    "#012E62",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#fff",
    "#012E62",
    "#012E62",
    "#012E62",
    "#012E62",
    "#012E62",
];

const fallbackColor = "#fff";

const getColor = (hexagonValue, state, open) => {
    if (hexagonValue < 0 || hexagonValue > 23) {
        return fallbackColor;
    }

    switch ((state, open)) {
        case ("ABOUT", false):
            return aboutColors[hexagonValue];
        default:
            return colors[hexagonValue];
    }
};

export default getColor;
