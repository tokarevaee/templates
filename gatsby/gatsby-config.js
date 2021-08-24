const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const STATIC_PATH = isProd ? '/landings/finance/fonts/' : '/fonts/';
const ASSETS_PATH = isProd ? '/landings/finance/' : '';

module.exports = {
    assetPrefix: ASSETS_PATH,
    plugins: [
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-M7R88T6',
                includeInDevelopment: false,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `finance.alfaleads`,
                short_name: `finance.alfaleads`,
                icon: path.join(__dirname, 'src/images/favicon.png'),
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                additionalData: `@import "/src/styles/variables/_variables.scss";$staticPath:"${STATIC_PATH}";`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, '/src/images/'),
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: path.join(__dirname, '/src/pages/'),
            },
        },
        `gatsby-plugin-svgr-svgo`,
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                // language JSON resource path
                path: path.join(__dirname, '/src/intl'),
                // supported language
                languages: [`ru`, `en`],
                // language file path
                defaultLanguage: `ru`,
                // option to redirect to `/ru` when connecting `/`
                redirect: false,
            },
        },
        `gatsby-plugin-no-sourcemaps`,
    ],
};
