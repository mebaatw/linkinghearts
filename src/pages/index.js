import React from "react"
import {Link, graphql } from 'gatsby'

import Layout from "../components/layoutMain"
import Container from "../components/view/container"
import Styles from '../components/view/social-css-modules.module.css';
//import Content from "../components/view/contentMain"

const IndexPage = ({ data }) => (
  <Layout>
    <Container>
  
      <>
            {/* w3-content defines a container for fixed size centered content, 
                and is wrapped around the whole page content, except for the footer in this example -->*/}
            <div className={`${Styles.w3Content}`} style={{maxWidth:'1600px'}}>
                
                { /*-- Grid --*/}
                <div className={`${Styles.w3Row} ${Styles.w3Padding} ${Styles.w3Border}`}>

                    {/**** Main Entries ****/}
                    <div className={`${Styles.w4Col} ${Styles.l8} ${Styles.s12}`}>
                        
                        {/**** First Photo Grid ******/}
                        <div className={`${Styles.w3rowpadding}`}>
                          
                            {data.allMarkdownRemark.group.map((g,i) =>(
                              <div className={`${Styles.w3Third} ${Styles.w3Container} `}>
                                <Link  to={g.fieldValue}>
                                  {data.allFile.edges==null||data.allFile.edges.length===0?'':
                                    data.allFile.edges.map(({node})=>(
                                        node.relativePath.indexOf(g.fieldValue)===-1?'':
                                            <img src={node.childImageSharp.original.src} 
                                                alt=""
                                                style={{width:'100%',height:'200px'}} className={`${Styles.w3HoverOpacity}`}    />
                                    ))
                                  }
                                      <center><b>{g.fieldValue}</b></center> 
                                </Link>
                                  
                                  <br/><br/>
                              </div>

                              
                              ))}
                            
                        </div>
                        {/** End First Phot Grid */}
                        
                    </div>
                     {/****End Main Entries ****/}
                </div>
            </div>
            </>

    </Container>
    
  </Layout>
)

export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark(filter: {frontmatter: {type: {in:["Rock Art","Kingdoms","Architecture","Ruins","Metal"]}}}) {
      group(field: frontmatter___type) {
        fieldValue
        totalCount
      }
    }

    allFile(filter:{relativePath:{glob:"indx/*"}}){
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