exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query getContent {
      allContentfulPost(sort: { createdAt: DESC }) {
        edges {
          node {
            id
            slug
            title
            tagline
            tags
            video {
              url
              description
            }
            featuredImage {
              id
              publicUrl
              description
              file {
                url
              }
              gatsbyImageData(
                width: 1400
                quality: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
            timeline
            cleanDate: updatedAt(formatString: "MMMM Do, YYYY")
            timeStamp: updatedAt
            createdAt(formatString: "MMMM Do, YYYY")
            author {
              name
              title
            }
            body {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)

  data.allContentfulPost.edges.forEach((item) => {
    actions.createPage({
      path: `/${item.node.slug}`,
      component: require.resolve("./src/components/post.js"),
      context: {
        data: item,
        metadata: {
          title: item.node.title,
          description: item.node.tagline,
          image: `https://${item.node.featuredImage.file.url.substring(
            2,
            item.node.featuredImage.file.url.length
          )}`,
          imageAlt: item.node.featuredImage.description.length,
          url: "https://design.johncanelis.com",
        },
      },
    })
  })
}
