import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// Utility
import Constants from "../other/constants"
const base = Constants.baseUnit

// Styles
const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  grid-row: ${(props) => props.row};
  grid-column: 1 / 9;
  display: flex;
  flex-direction: column;
  gap: ${base * 2}px;
  word-wrap: break-word;
  color: rgba(33, 33, 33, 1);

  @media (max-width: 800px) {
    padding: ${base * 6}px;
  }

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.7);
  }

  .gatsby-resp-iframe-wrapper {
    margin: ${base * 16}px 0;
  }

  h2,
  h3,
  h4,
  h5,
  p,
  ul,
  ol,
  hr,
  blockquote {
    margin: 0 auto;
    padding: 0;
    font-weight: normal;
    width: 624px;
    color: inherit;

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  h2 {
    // background-color: pink;
    margin: ${base * 10}px auto 0;
    font-family: "Leitura Display Roman";
    font-size: 50px;
    line-height: ${base * 15}px;
    letter-spacing: 0.6px;

    @media (max-width: 800px) {
      // background-color: pink;
      font-size: 42px;
      line-height: ${base * 13}px;
      letter-spacing: 0;
    }
  }

  h3 {
    // background-color: red;
    margin: ${base * 2}px auto ${base * 4}px;
    font-family: "Leitura Sans Light";
    font-size: 44px;
    line-height: ${base * 15}px;

    @media (max-width: 800px) {
      // background-color: red;
      margin: 0 auto ${base * 3}px;
      font-size: 38px;
      line-height: ${base * 12}px;
    }
  }

  h4 {
    // background-color: black;
    margin: ${base * 6}px auto 0;
    font-family: "Leitura Bold";
    font-size: 20px;
    line-height: ${base * 6}px;
  }

  h5 {
    color: rgba(0, 0, 0, 1);
    margin: ${base * 12}px auto ${base * 1}px;
    font-family: "Fira Mono Medium";
    font-size: 15px;
    line-height: ${base * 3}px;
    letter-spacing: 0.6px;
    font-variant: small-caps;

    @media (prefers-color-scheme: dark) {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  p {
    // background-color: orange;
    margin: 0 auto ${base * 4}px;
    font-family: "Leitura Roman";
    font-size: 20px;
    line-height: ${base * 8}px;

    i,
    em {
      font-family: "Leitura Roman Italic";
      font-weight: normal;
    }

    strong,
    b {
      font-family: "Leitura Bold";
      font-weight: normal;
    }
  }

  ul {
    list-style: square;
  }

  ul,
  ol {
    padding: 0;
    margin: 0 auto ${base * 2}px;
    list-style-position: inside;
  }

  li {
    margin: 0 0 ${base * 6}px;
    padding: 0;
    font-family: "Leitura Roman";
    font-size: 20px;
    line-height: ${base * 8}px;
  }

  a {
    margin: 0;
    padding: 0;
    font-family: "Leitura Roman";
    text-decoration: underline;

    &:hover {
      color: rgba(255, 0, 0, 1);
    }
  }

  figure {
    padding: 0;

    &.gatsby-resp-image-figure {
      display: flex;
      flex-direction: column;
      gap: ${base * 4}px;
    }

    @media (max-width: 800px) {
      margin: 0;
    }
  }

  span.gatsby-resp-image-background-image {
    border-radius: ${base * 12}px;

    @media (max-width: 800px) {
      border-radius: ${base * 8}px;
    }
  }

  img.gatsby-resp-image-image {
    border-radius: ${base * 12}px;

    @media (max-width: 800px) {
      border-radius: ${base * 8}px;
    }
  }

  figcaption {
    padding: ${base * 2}px ${base * 3}px 0;
    text-align: center;
    font-family: "Leitura Roman Italic";
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.3px;
    line-height: ${base * 5}px;
    color: rgba(0, 0, 0, 0.8);

    @media (prefers-color-scheme: dark) {
      color: rgba(255, 255, 255, 0.65);
    }
  }

  strong,
  b {
    font-family: "Leitura Bold";
    font-weight: normal;
  }

  hr {
    margin: ${base * 8}px auto;
    border: none;
    border-top: ${base / 2}px solid rgba(0, 0, 0, 1);
  }

  del {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  blockquote {
    // background-color: blue;
    margin: ${base * 10}px auto;
    font-size: 55px;
    line-height: ${base * 18}px;
    text-align: center;
    font-family: "Leitura Display Italic";
    font-feature-settings:
      "liga" 1,
      "dlig" 1,
      "salt" 1,
      "ss01" 1;

    p {
      font-family: inherit;
      font-feature-settings: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    @media (max-width: 600px) {
      margin: ${base * 8}px auto;
      text-align: center;
      font-size: 36px;
      line-height: ${base * 12}px;
    }
  }
`

const Content = ({ content, row }) => (
  <Wrapper
    row={row}
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  ></Wrapper>
)

Content.propTypes = {
  content: PropTypes.string,
  row: PropTypes.string,
}

export default Content
