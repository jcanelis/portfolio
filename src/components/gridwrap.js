import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
  grid-column: 1 / 9;
  grid-row: ${(props) => props.row};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justify || "space-between"};

  @media (max-width: 1000px) {
    flex-direction: ${(props) => props.direction || "column"}
    flex-wrap: nowrap;
  }
`

const GridWrap = (props) => <Wrapper {...props}></Wrapper>

GridWrap.propTypes = {
  row: PropTypes.string,
  columns: PropTypes.string,
}

export default GridWrap
