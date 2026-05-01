import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// Utility
import Constants from "../other/constants"
const base = Constants.baseUnit

const Wrapper = styled.button`
  margin: 0;
  padding: 0 ${base * 5}px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  height: ${base * 12}px;
  font-family: "ITC Avant Garde Gothic Medium";
  font-size: 14px;
  line-height: ${base * 12}px;
  letter-spacing: 0.3px;
  white-space: nowrap;
  appearance: button;
  background: transparent;
  border: 2px solid rgba(0, 0, 0, 1);
  color: rgba(0, 0, 0, 1);
  border-radius: 32px;
  font-family: "Fira Mono Medium";
  font-size: 15px;
  letter-spacing: 0.2px;
  transition: 0.2s ease all;

  &:hover {
    cursor: pointer;
    color: rgba(255, 0, 0, 1);
    border: 2px solid rgba(255, 0, 0, 1);
  }

  @media (prefers-color-scheme: dark) {
    border: 2px solid rgba(255, 255, 255, 0.7);
    color: rgba(255, 255, 255, 0.85);
  }
`

const Button = ({ func, text }) => <Wrapper onClick={func}>{text}</Wrapper>

Button.propTypes = {
  text: PropTypes.string,
  func: PropTypes.func,
}

export default Button
