import React from "react"
import Layout from "../components/layoutMain"
import Container from "../components/view/container"
import {Link, graphql } from 'gatsby'
//import Excerpt from "../components/views/ViewExcerpt"
import Styles from '../components/view/social-css-modules.module.css';
import Img from "gatsby-image"

export default ({ data }) => {
   // const post = data.allMarkdownRemark.edges.node
   //let i=0;
  return (
    <Layout>
      <Container>

     
      

      {/**** Photo Grid ******/}
        <div className={`${Styles.gridContainer}`} style={{padding:'0px', margin:'0px'}}>
          {data.allMarkdownRemark.edges.map(({node, slug = node.fields.slug, title=node.frontmatter.title}) =>( 
           <>  
              <div className={`${Styles.w3Third} ${Styles.w3Container}  `} key={node.id} style={{padding:'2px', marginBottom:'1px', border:'5px solid #e0eee0', backgroundColor:'#e0eee0'}}>
               <Link to={node.fields.slug}>      
                   <div className={`${Styles.gridItem}`} style={{ width:'200px',padding:'0px', margin:'0px', backgroundColor:'#e0eee0',border:'1px solid black'}}>
                  {data.allFile.edges==null||data.allFile.edges.length===0?'':
                      data.allFile.edges.map(({node})=>(
                          node.relativePath.indexOf(slug)===-1?'':
                          <>
                            <Img fixed={node.childImageSharp.fixed} />
                             {/**  <img src={node.childImageSharp.original.src} 
                                  alt={title}
                                  style={{width:'100%',height:'190px', paddingTop:'0px',paddingBottom:'0px', margin:'0px', backgroundColor:'#e0eee0' }} className={`${Styles.w3HoverOpacity} `}    />
                            */}
                          </>
                      ))
                  }  
                  <p style={{ padding:5, margin:0}}><b>{title}</b></p>
                      {/** <p style={{ padding:0, margin:0}}>{node.excerpt==null||node.excerpt.lenght===0?'':node.excerpt}</p>*/}
                      
                  </div>
                </Link>  
              </div>
               
              
              </>
            ))
          }
          </div>
        {/**** END Photo Grid ******/}

        </Container>
    </Layout>
  )
}

export const query = graphql`
  query($type: String!) {
    allMarkdownRemark(sort: {fields:[frontmatter___sort],order:ASC},filter:{frontmatter:{types:{glob: $type},country:{ne:null}}}){ 
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
            excerpt(pruneLength: 150)
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
              fixed(width: 197, height: 197) {
                ...GatsbyImageSharpFixed
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