import { useStaticQuery, graphql } from "gatsby"

export default function getPosts() {
  const data = useStaticQuery(graphql`
    query getPosts {
      allContentfulPost(sort: { publishDate: DESC }) {
        edges {
          node {
            id
            slug
            title
            tagline
            timeline
            publishDate
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
          }
        }
      }
    }
  `)

  return data.allContentfulPost.edges
}
