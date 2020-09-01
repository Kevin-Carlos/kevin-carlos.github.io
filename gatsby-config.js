module.exports = {
  siteMetadata: {
    title: `Kevin Carlos`,
    siteUrl: `https://kevin-carlos.github.io`,
    description: `My personal website`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        pages: `${__dirname}/src/pages`,
        common: `${__dirname}/src/common`,
        state: `${__dirname}/src/state`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}