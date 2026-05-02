if (process.env.NODE_ENV !== "production") {
  console.log("Building in development mode.")
  require("dotenv").config()
}

module.exports = {
  siteMetadata: {
    author: "John Canelis",
    description: "John's design portfolio.",
    title: "John Canelis",
    siteUrl: "https://design.johncanelis.com",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-sqip",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              ratio: 1.6,
              related: false,
              noIframeBorder: true,
              loadingStrategy: "lazy",
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: (videoId) =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
              containerClass: "embedVideoContainer",
            },
          },
          "gatsby-remark-responsive-iframe",
          "gatsby-remark-prismjs",
          {
            resolve: "gatsby-remark-images-contentful",
            options: {
              maxWidth: 1400,
              linkImagesToOriginal: true,
              showCaptions: true,
              withWebp: true,
              loading: "lazy",
              backgroundColor: "transparent",
              // wrapperStyle: "border-radius: 48px",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
