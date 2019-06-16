import React from "react"
import Layout from "../components/layoutMain"
import Container from "../components/view/container"
import {Link, graphql } from 'gatsby'
//import Excerpt from "../components/views/ViewExcerpt"
import Styles from '../components/view/social-css-modules.module.css';

export default ({ data }) => {
   // const post = data.allMarkdownRemark.edges.node
   //let i=0;
  return (
    <Layout>
      <Container>

     
      

      {/**** Photo Grid ******/}
        <div className={`${Styles.w3rowpadding}`} style={{padding:'0px', margin:'0px'}}>
          {data.allMarkdownRemark.edges.map(({node, slug = node.fields.slug, title=node.frontmatter.title}) =>( 
           <>  
              <div className={`${Styles.w3Third} ${Styles.w3Container}  `} key={node.id} style={{padding:'2px', marginBottom:'1px', border:'5px solid #e0eee0', backgroundColor:'#e0eee0'}}>
               <Link to={node.fields.slug}>      
                   <div className={`${Styles.w3White}`} style={{ width:'80%',padding:'0px', margin:'0px', backgroundColor:'#e0eee0',border:'1px solid black'}}>
                  {data.allFile.edges==null||data.allFile.edges.length===0?'':
                      data.allFile.edges.map(({node})=>(
                          node.relativePath.indexOf(slug)===-1?'':
                              <img src={node.childImageSharp.original.src} 
                                  alt={title}
                                  style={{width:'100%',height:'190px', paddingTop:'0px',paddingBottom:'0px', margin:'0px', backgroundColor:'#e0eee0' }} className={`${Styles.w3HoverOpacity} `}    />
                      ))
                  }</div>

                  <div className={`${Styles.w3Container}  `} style={{width:'80%', height:'70px',padding:5, margin:0,  backgroundColor:'#00843e', border:'1px solid black'}}>
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
              original{
               src
             }
            }
          }
        }
      }
  }
`