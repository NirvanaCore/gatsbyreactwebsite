/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import "./bootstrap.min.css"
import "./layout.css"
import Footer from "./Reusable/Footer"
import Navbar from "./Reusable//Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>     
      {children}
      <Footer/>   
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout