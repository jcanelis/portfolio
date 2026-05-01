import React from "react"
// import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

// Components
import Button from "../components/button"
import Constants from "../other/constants"
const base = Constants.baseUnit

const Wrapper = styled.footer`
  margin: ${base * 8}px 0 ${base * 24}px;
  padding: 0;
  grid-column: 1 / 9;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Footer = () => {
  return (
    <Wrapper>
      <Button
        text={"View all projects"}
        func={() => {
          window.location.href = "https://design.johncanelis.com/"
        }}
      />
    </Wrapper>
  )
}

export default Footer
