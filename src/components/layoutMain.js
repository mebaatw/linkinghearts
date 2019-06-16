/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./headerMain"
//import "./layout.css"

const LayoutMain = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQueryMain {
        site {
          siteMetadata {
            title
          }
        }

        allFile(filter:{relativePath:{glob:"logo/logo.png"}}){
          edges{
            node{
              id
              relativePath
              childImageSharp{
                fluid(maxWidth: 300){
                 ...GatsbyImageSharpFluid
                }
                original{
                 src
               }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} logo={data.allFile.edges}/>
        
          <main>{children}</main>
          
        
      </>
    )}
  />
)

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutMain
