import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Excerpt from "../components/view/ViewExcerpt"


export default ({ data }) => {
   // const post = data.allMarkdownRemark.edges.node
  return (
    <Layout>
      
      <Excerpt 
            data={data.allMarkdownRemark.edges}
            imgs={data.allFile.edges}
         />

          <p/>
      
    </Layout>
  )
}

export const query = graphql`
  query($country: String!) {
    allMarkdownRemark(sort: {fields:[frontmatter___sort],order:ASC},filter:{frontmatter:{countries:{glob: $country},country:{ne:"NA"}}}){ 
        edges{
          node{
            id
            frontmatter{
              country
              title
              date
            }
            fields {
                slug
              }
            excerpt(pruneLength: 480)
            timeToRead
            html
          }
        }
      }

      allFile(filter:{relativePath:{glob:"main/*"}}){
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
`