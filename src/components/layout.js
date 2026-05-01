import React from "react"
import PropTypes from "prop-types"

// Components
import GlobalStyle from "../components/style"
import MainWrapper from "../components/mainwrapper"
import Navigation from "../components/navigation"
import Seo from "../components/seo"

const Layout = (props) => {
  return (
    <>
      <Seo metadata={props.pageContext.metadata} />
      <GlobalStyle />
      <MainWrapper>
        <Navigation />
        {props.children}
      </MainWrapper>
    </>
  )
}

Layout.propTypes = {
  pageContext: PropTypes.object,
  children: PropTypes.array,
}

export default Layout
