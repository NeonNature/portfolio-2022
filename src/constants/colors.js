const colors = "#fff";

const navColors = "#1f1f1f";

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

const testimonialColors = "#1f1f1f";

const fallbackColor = "#fff";

const getColor = (hexagonValue, state, open) => {
    if (hexagonValue < 0 || hexagonValue > 23) {
        return fallbackColor;
    }

    if (open) return navColors;

    switch (state) {
        case "TESTIMONIALS":
            return testimonialColors;
        case "ABOUT":
            return aboutColors[hexagonValue];
        default:
            return colors;
    }
};

export default getColor;
