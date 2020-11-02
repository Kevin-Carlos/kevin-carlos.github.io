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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/android-chrome-512x512.png`,
        name: `Kevin Carlos`,
        short_name: `Personal website to host fun side projects.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
      },
    },
  ],
};
