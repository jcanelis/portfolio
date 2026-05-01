import { useStaticQuery, graphql } from "gatsby"

export default function getPosts() {
  const data = useStaticQuery(graphql`
    query getPostss {
      allContentfulPost(sort: { publishDate: DESC }) {
        edges {
          node {
            id
            slug
            title
            tagline
            timeline
            publishDate
            cleanDate: updatedAt(formatString: "MMMM Do, YYYY")
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
            author {
              name
              title
              image {
                gatsbyImageData(
                  width: 160
                  quality: 75
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
            createdAt(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return data.allContentfulPost.edges
}
