import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// Utility
import Constants from "../other/constants"
const base = Constants.baseUnit

const Wrapper = styled.div`
  margin: 0;
  padding: ${base * 8}px ${base * 16}px;
  grid-row: 1;
  grid-column: 1 / 9;
  display: flex;
  justify-content: space-between;

  .activeNav {
    color: rgba(255, 255, 255, 1);
    border-bottom: 2px solid rgba(0, 0, 0, 1);

    @media (prefers-color-scheme: dark) {
      color: rgba(255, 255, 255, 1);
      border-bottom: 2px solid rgba(255, 255, 255, 1);
    }
  }

  @media (max-width: 600px) {
    padding: ${base * 8}px ${base * 6}px;
  }
`

const Item = styled.div`
  color: rgba(0, 0, 0, 1);

  a {
    padding: ${base * 8}px 0;
    font-family: "ITC Avant Garde Gothic Bold";
    font-size: 14px;
    line-height: ${base * 5}px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);

    &:hover {
      color: rgba(0, 0, 0, 1);
      text-decoration: none;

      @media (prefers-color-scheme: dark) {
        color: rgba(255, 255, 255, 1);
      }
    }

    @media (max-width: 800px) {
      font-size: 12px;
    }

    @media (prefers-color-scheme: dark) {
      color: rgba(255, 255, 255, 0.8);
    }

    &.activeNav {
      color: rgba(0, 0, 0, 1);

      @media (prefers-color-scheme: dark) {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
`

const links = [
  { url: "/", text: "John" },
  { url: "/cadre", text: "Cadre" },
  { url: "/trackqueen", text: "TrackQueen" },
]

const Navigation = () => (
  <Wrapper>
    {links.map(({ url, text }) => (
      <Item key={url}>
        <Link to={url} activeClassName={"activeNav"}>
          {text}
        </Link>
      </Item>
    ))}
  </Wrapper>
)

export default Navigation
