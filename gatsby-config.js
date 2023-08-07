module.exports = {
    siteMetadata: {
        title: `Neon - Tech Voyager`,
        siteUrl: `https://voyager-neon.tech/`,
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-sitemap",
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ["G-9HK0TS22D8"],
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
    ],
};
