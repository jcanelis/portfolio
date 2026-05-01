import styled from "styled-components"

const MainWrapper = styled.main`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(12, auto);
  // grid-gap: 0;
  // width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default MainWrapper
