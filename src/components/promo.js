import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// Components
import Constants from "../other/constants"
const base = Constants.baseUnit

const Wrapper = styled.div`
  margin: ${base * 6}px 0;
  padding: ${base * 8}px 0 0;
  grid-row: ${(props) => props.row || "2"};
  grid-column: 1 / 9;
  display: flex;
  flex-direction: column;
  gap: ${base * 4}px;
  text-align: ${(props) => props.alignment || "center"};

  @media (max-width: 1000px) {
    padding: ${base * 6}px;
  }
`

const Headline = styled.h1`
  margin: 0;
  padding: 0;
  grid-column: 1 / 9;
  font-family: ${(props) => props.font || "ITC Avant Garde Gothic Bold"};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
  font-size: 78px;
  line-height: ${base * 24}px;
  color: rgba(0, 0, 0, 1);
  font-feature-settings: ${(props) =>
    props.fontFeatures
      ? "'liga' 1, 'dlig' 1, 'ss01' 1, 'kern' 1, 'salt' 1"
      : "'liga' 1, 'dlig' 1, 'ss01' 1, 'kern' 1, 'salt' 1"};

  @media (max-width: 600px) {
    font-size: 58px;
    line-height: ${base * 16}px;
  }

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
`

const Tagline = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 37px;
  grid-column: 1 / 9;
  line-height: ${base * 14}px;
  font-family: "ITC Avant Garde Gothic Medium";
  color: rgba(95, 95, 95, 1);

  @media (max-width: 600px) {
    font-size: 25px;
    line-height: ${base * 8}px;
  }

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.8);
  }
`

const Promo = ({
  alignment,
  font,
  fontFeatures,
  headline,
  tagline,
  uppercase,
  row,
}) => (
  <Wrapper row={row} alignment={alignment}>
    <Headline fontFeatures={fontFeatures} uppercase={uppercase} font={font}>
      {headline}
    </Headline>
    <Tagline>{tagline}</Tagline>
  </Wrapper>
)

Promo.propTypes = {
  alignment: PropTypes.string,
  font: PropTypes.string,
  fontFeatures: PropTypes.bool,
  headline: PropTypes.string,
  tagline: PropTypes.string,
  uppercase: PropTypes.bool,
  row: PropTypes.string,
}

export default Promo
