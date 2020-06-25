module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["material icons", "roboto:300,400,500,700", "Fira Sans"],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/me.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: "38HWVABQ2c2xr9rzfdhbRBawI",
          consumer_secret: "G8DRdxO4yx6tSPNH99eDhK7paRAlTjRgICoiC9hOzgMhS0GStV",
          bearer_token:
            "AAAAAAAAAAAAAAAAAAAAAOCRFQEAAAAATKiUEWyqSLQrrbU2VIYWMZIgmnY%3DARaXfhm64MDktHjlYfJ7t1v1ymK7zkGKjm5sK3bfMdpAD8FsDl",
        },
        queries: {
          nameofthequery: {
            endpoint: "statuses/user_timeline",
            params: {
              screen_name: "matthughes2112",
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
          nameofanotherthequery: {
            endpoint: "search/tweets",
            params: {
              q: "#gatsbyjs",
              tweet_mode: "extended",
            },
          },
        },
      },
    },
  ],
}
