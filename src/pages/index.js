import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

// Utility
import Constants from "../other/constants"
const base = Constants.baseUnit

// Hooks
import getPosts from "../hooks/getPosts"

// Components
import GridWrap from "../components/gridwrap"
import Article from "../components/article"
import Promo from "../components/promo"

const Wrapper = styled.div`
  display: grid;
  grid-column: 1 / 9;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: ${base * 8}px;
  padding: 0 ${base * 12}px ${base * 12}px;

  @media (max-width: 1200px) {
    grid-gap: ${base * 8}px;
    padding: 0 ${base * 6}px ${base * 16}px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p {
  font-family:  "Leitura Roman Italic";
  }

  @media (max-width: 1600px) {
    flex-wrap: wrap;
    gap: ${base * 16}px;
    padding: 0;
  }
`

const IndexPage = () => {
  const posts = getPosts()

  return (
    <>
      <Helmet title={"John Canelis"} />

      <Wrapper>
        <GridWrap row="2" columns="1/9" justify="center">
          <Promo
            font="ITC Avant Garde Gothic Bold"
            uppercase={true}
            fontFeatures={true}
            headline="John Canelis"
            alignment="center"
            tagline="Design samples 🎨 👨‍🍳"
          />
        </GridWrap>

        <GridWrap row="3/9" columns="1/9" justify="center">
          <Container>
            {posts.map(({ node }) => {
              return <Article key={node.id} node={node} />
            })}
          </Container>
        </GridWrap>

        <GridWrap row="9" columns="1/9" justify="center">
          <Container>
            <p>
              <a href="https://github.com/jcanelis">GitHub</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/johncanelis">LinkedIn</a>
            </p>
            <p>
              <a href="https://johnnyc.xyz/">Photo site</a>
            </p>

          </Container>
        </GridWrap>

        <GridWrap row="10 / 12" columns="1/9" justify="center">
          <Container>
            <p>This site was built using React with Gatsby, Contentful, and Netlify. Typography used includes Fira Mono, ITC Avant GardeGothic, and Leitura. You can view the source code on <a href="https://github.com/jcanelis/portfolio">GitHub</a>.</p>
          </Container>
        </GridWrap>

      </Wrapper>
    </>
  )
}
export default IndexPage
