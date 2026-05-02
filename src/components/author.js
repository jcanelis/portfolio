import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

// Components
import Constants from "../other/constants"
const base = Constants.baseUnit

const Wrapper = styled.div`
  margin: ${base * 2}px 0 ${base * 8}px;
  padding: 0;
  grid-column: 1 / 9;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Name = styled.div`
  margin: 0;
  padding: 0;
  font-size: 16px;
  letter-spacing: 0.3px;
  line-height: ${base * 8}px;
  font-family: "Leitura Medium Italic";
  font-weight: normal;
  color: rgba(0, 0, 0, 0.75);

  a,
  span {
    font-family: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.7);
  }
`

const Time = styled.time`
  margin: 0;
  padding: 0;
  font-size: 15px;
  line-height: ${base * 7}px;
  font-family: "Fira Mono Medium";
  font-weight: normal;
  color: rgba(0, 0, 0, 0.6);

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.5);
  }
`

const Author = ({ author, timestamp, updatedAt }) => {
  return (
    <Wrapper>
      <Name>
        <span>by </span>{author.name}, <span>{author.title}</span>
      </Name>
      <Time dateTime={timestamp}>{updatedAt}</Time>
    </Wrapper>
  )
}

Author.propTypes = {
  author: PropTypes.object,
  timestamp: PropTypes.string,
  updatedAt: PropTypes.string,
}

export default Author
