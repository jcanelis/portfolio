import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Components
import Author from "../components/author"
import Content from "../components/content"
import Footer from "../components/footer"
import GridWrap from "../components/gridwrap"
import Promo from "../components/promo"
import Tags from "../components/tags"

// Design
import Constants from "../other/constants"
const { baseUnit } = Constants

// Styled Components
const Article = styled.article`
  grid-column: 1 / 9;
  grid-row: 2 / 12;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: ${baseUnit * 8}px;
  row-gap: 0;
`

const Header = styled.header`
  grid-column: 1 / 9;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: ${baseUnit * 8}px;
`

const Hero = styled.figure`
  margin: 0 auto;
  padding: 0;
  grid-column: 1 / 9;
  display: flex;
  flex-direction: column;
  gap: ${baseUnit * 4}px;
  padding: 0 ${baseUnit * 8}px;
  // background-color: pink;

  @media (max-width: 800px) {
    padding: 0 ${baseUnit * 6}px;
  }

  .gatsby-image-wrapper {
    border-radius: ${baseUnit * 12}px;
    // box-shadow:
    //   rgba(0, 0, 0, 0.02) 0px 2.8px 2.2px,
    //   rgba(0, 0, 0, 0.027) 0px 6.7px 5.3px,
    //   rgba(0, 0, 0, 0.035) 0px 12.5px 10px,
    //   rgba(0, 0, 0, 0.043) 0px 22.3px 17.9px,
    //   rgba(0, 0, 0, 0.05) 0px 41.8px 33.4px,
    //   rgba(0, 0, 0, 0.07) 0px 100px 80px;

    @media (max-width: 800px) {
      border-radius: ${baseUnit * 8}px;
    }
  }

  figcaption {
    font-family: "Leitura Roman Italic";
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.3px;
    line-height: ${baseUnit * 8}px;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);

    @media (prefers-color-scheme: dark) {
      color: rgba(255, 255, 255, 0.65);
    }
  }
`

const Section = styled.section`
  grid-column: 1 / 9;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: ${baseUnit * 8}px;
  row-gap: ${baseUnit * 2}px;
`

const Post = ({ pageContext }) => {
  const post = pageContext.data.node
  const image = getImage(post.featuredImage)

  return (
    <Article>
      <Header>
        <Promo
          row="2"
          headline={post.title}
          tagline={post.tagline}
          color={post.accentColor}
        />

        <GridWrap columns="1/9" row="3" direction="row" justify="center">
          <Author
            timestamp={post.timeStamp}
            updatedAt={post.timeline}
            author={post.author}
          />
        </GridWrap>

        <GridWrap columns="1/9" row="4" direction="row">
          <Hero>
            <a href={post.featuredImage.publicUrl}>
              <GatsbyImage image={image} alt={post.featuredImage.description} />
            </a>
            <figcaption>{post.featuredImage.description}</figcaption>
          </Hero>
        </GridWrap>
      </Header>

      <Section>
        <Content row="6" content={post.body.childMarkdownRemark.html} />
      </Section>

      <Footer image={post.author.image} text={"Nice category"} link={"/"} />
    </Article>
  )
}

Post.propTypes = {
  pageContext: PropTypes.object,
}

export default Post
