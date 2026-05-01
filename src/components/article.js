import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import PropTypes from "prop-types"

// Components
import Constants from "../other/constants"
const base = Constants.baseUnit

const Header = styled.header`
  flex: 1;
  display: flex;
  flex-direction: column;

  div {
    height: ${base * 72}px;
    top: 0;
    transition: 0.2s ease all;
    border-radius: ${base * 12}px;
    // box-shadow:
    //   rgba(0, 0, 0, 0.02) 0px 2.8px 2.2px,
    //   rgba(0, 0, 0, 0.027) 0px 6.7px 5.3px,
    //   rgba(0, 0, 0, 0.035) 0px 12.5px 10px,
    //   rgba(0, 0, 0, 0.043) 0px 22.3px 17.9px,
    //   rgba(0, 0, 0, 0.05) 0px 41.8px 33.4px,
    //   rgba(0, 0, 0, 0.07) 0px 100px 80px;

    &:hover {
      top: -8px;
    }

    @media (max-width: 800px) {
      border-radius: ${base * 8}px;
    }
  }

  img {
    flex: 1;
    height: ${base * 72}px;
  }
`

const Wrapper = styled.article`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0;
  flex-direction: column;

  @media (max-width: 600px) {
    flex: 1 100%;
  }

  a {
    display: flex;
    flex: 1;
    text-decoration: none;
  }

  h2 {
    margin: 0;
    padding: ${base * 4}px 0 0;
    color: rgba(0, 0, 0, 1);
    font-size: 48px;
    line-height: ${base * 18}px;
    font-family: "ITC Avant Garde Gothic Bold";
    font-feature-settings:
      "liga" 1,
      "dlig" 1,
      "ss01" 1,
      "kern" 1,
      "salt" 1;

    &:hover {
      text-decoration: underline;
    }
  }

  h3 {
    margin: 0;
    padding: 0;
    font-size: 21px;
    line-height: ${base * 6}px;
    font-family: "Leitura Roman Italic";
    color: rgba(0, 0, 0, 1);
  }

  time {
    margin: ${base * 3}px 0 ${base * 6}px;
    padding: 0;
    font-size: 15px;
    line-height: ${base * 8}px;
    font-family: "Fira Mono Medium";
    color: rgba(0, 0, 0, 0.6);
  }

  h2,
  h3,
  time {
    @media (prefers-color-scheme: dark) {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`

const Article = ({ node }) => {
  const image = getImage(node.featuredImage)
  return (
    <Wrapper key={node.id}>
      <Header>
        <Link to={`/${node.slug}`}>
          <GatsbyImage image={image} alt={node.title} />
        </Link>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            gap: base,
            width: "fit-content",
          }}
        >
          <Link to={`/${node.slug}`}>
            <h2>{node.title}</h2>
          </Link>
          <h3>{node.tagline}</h3>
        </span>
      </Header>
      <time>{node.timeline}</time>
    </Wrapper>
  )
}

Article.propTypes = {
  node: PropTypes.object,
}

export default Article
