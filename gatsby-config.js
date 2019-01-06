const path = require(`path`);

const siteMetadata = {
  siteUrl: "https://mileswoodwork.netlify.com",
  title: "Miles Woodwork",
  description: "A Website Showcasing David Miles' Woodworking Projects",
  homePage: "https://github.com/prp1277/DavesWoodwork#daves-woodworking",
  contact: {
    name: "Patrick Powell",
    email: "MailTo:prp1277@gmail.com",
    github: "https://github.com/prp1277/",
    linkedin: "https://linkedin.com/in/prpowell1277/",
    twitter: "https://twitter.com/patp0w/"
  },
  socialMedia: {
    home: {
      url: "/",
      logo: "https://img.icons8.com/metro/32/ffffff/home.png"
    },
    facebook: {
      url: "https://www.facebook.com/Daves-Woodworking-1577530669229362/",
      logo: "https://img.icons8.com/metro/40/ffffff/facebook.png"
    },
    instagram: {
      url: "https://www.instagram.com/dtmiles1591/",
      logo: "https://img.icons8.com/metro/40/ffffff/instagram-new.png"
    },
    shop: {
      url: "/md/",
      logo: "https://img.icons8.com/metro/32/ffffff/shop.png"
    },
  }
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "MilesWoodwork",
        short_name: "MilesWoodwork",
        start_url: "/",
        background_color: "#E7E6E6",
        theme_color: "#DC3545",
        display: "minimal-ui",
        icon: "src/favicon.svg"
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ["gatsby-remark-copy-linked-files"],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 200,
          linkImagesToOriginal: true,
          wrapperStyle: "margin-bottom:10px",
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages/md/`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ], //End Plugins
};
