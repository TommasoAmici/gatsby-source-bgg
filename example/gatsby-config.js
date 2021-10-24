/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "gatsby-source-bgg test",
    titleTemplate: "%s · gatsby-source-bgg test",
    description: "A test page for the gatsby-source-bgg package",
  },
  plugins: [
    {
      resolve: "gatsby-source-bgg",
      options: {
        username: "tommasoamici",
        own: 1,
      },
    },
  ],
};
