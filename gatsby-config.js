module.exports = {
    siteMetadata: {
        title: `Neon - Tech Voyager`,
        siteUrl: `https://voyager-neon.tech/`,
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
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
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};
