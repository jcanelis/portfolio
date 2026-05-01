import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// Utility
import Constants from "../other/constants"
const base = Constants.baseUnit

// Styles
const Wrapper = styled.div`
  margin: ${base * 8}px auto 0;
  width: 624px;
  grid-row: ${(props) => props.row || "5"};
  grid-column: 1 / 9;
  display: flex;
  flex-direction: column;
  gap: ${base * 2}px;
  justify-content: flex-start;
  text-align: flex-start;
  justify-content: flex-start;

  @media (max-width: 800px) {
    margin: ${base * 4}px 0 ${base * 2}px;
    padding: 0;
    text-align: center;
    justify-content: center;
    width: 100%;
  }

  span {
    margin: 0;
    padding: 0;
    font-size: 15px;
    line-height: ${base * 8}px;
    font-family: "Fira Mono Medium";

    @media (prefers-color-scheme: dark) {
      color: rgba(255, 255, 255, 0.8);
    }
  }

  ul {
    padding: 0 0 ${base * 4}px;
    display: flex;
    flex-wrap: wrap;
    gap: ${base * 4}px;
    justify-content: flex-start;
    list-style: none;

    @media (max-width: 800px) {
      padding: 0 ${base * 6}px;
      justify-content: center;
    }
  }

  li {
    padding: ${base * 3}px ${base * 6}px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 14px;
    letter-spacing: 0.3px;
    font-family: "Fira Mono Medium";
    color: rgba(0, 0, 0, 1);
    background-color: rgba(0, 0, 0, 0.075);
    border-radius: ${base * 10}px;
    height: ${base * 5}px;
    transform: scale(1);
    transition: all 0.2s ease;

    @media (prefers-color-scheme: dark) {
      color: rgba(255, 255, 255, 0.8);
      background-color: rgba(30, 30, 30, 1);
    }

    &:hover {
      transform: scale(1.1);
      transition: all 0.2s ease;
    }
  }
`

const Tags = ({ tags, color }) => (
  <Wrapper color={color}>
    <span>Project Topics</span>
    <ul>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  </Wrapper>
)

Tags.propTypes = {
  tags: PropTypes.array,
  color: PropTypes.string,
}

export default Tags
