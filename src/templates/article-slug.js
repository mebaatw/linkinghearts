import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layoutMain"
import Container from "../components/view/container"
import Styles from '../components/view/social-css-modules.module.css';
import Lightbox from '../components/view/Lightbox'
import Lightboxvid from '../components/view/Lightboxvid'
export default ({ data }) => {
    const post = data.markdownRemark
  return (
    <Layout>
    <Container>  
     {/**  {post.frontmatter.headers ===null||post.frontmatter.headers.length===0?'':
         <>l</>
      }*/}

     <div  className={`${Styles.w3RowPadding} ${Styles.w3Padding48} ${Styles.w3Container} ${Styles.w3Content} ` } style={{ maxWidth: 3050, paddingTop:'0px',padding: ` 1rem`, margin: '.0rem', backgroundColor:'white', border:'1px solid grey' }}>
        <h1 style={{textAlign: `center`,paddingTop:'0px',paddingBottom: `10px`, margin: '.3rem',fontWeight: '700',color: 'black'}}>{post.frontmatter.title}</h1>
        <div style={{borderTop: '6px solid #00843e',
            paddingTop: '30px',
            borderBottom: '1px dotted #9b9b9b',
            flexGrow: '0',
            flexShrink: '0',
            minWidth: '100%', 
            maxWidth: '100%'}}
          >
          {post.frontmatter.types.indexOf('KEYS') === -1?'':
              <div style={{fontWeight: '800',
                          color: '#00843e',
                          fontSize: '18px',
                          lineHeight: '1.05',
                          letterSpacing: '.6px',
                          textTransform: 'uppercase',
                          marginBottom: '1px',
                          marginTop: '2px',
                          paddingBottom: '0px'
                        }}
              >
                  Key Points
              </div>}
                { post.html===null?"": <div dangerouslySetInnerHTML={{ __html: post.html }} style={{padding:'0px'}} />}
       
            </div>
        {
      }
      <br/><br/>
      
      { 
          data.allFile===null||data.allFile.edges.length===0?"":
          <>
            <Lightbox imgSharp={ data.allFile.edges}
              imgs={post.frontmatter.img===undefined?"":post.frontmatter.img}/>
          </>
      }  
      <br/><br/>

      <br/><br/>
      {post.frontmatter.vid===null||post.frontmatter.vid.length===0?"":
        <>
          <Lightboxvid vids={post.frontmatter.vid}/>
        <br/>
        
        </>
      }
        <br/><br/> <br/> 
        
      <div style={{ float: ` left`}}>
      <b>External Links</b>
     {
       post.frontmatter.url ===null?"": 
       post.frontmatter.url.map((item,i) =>{
          return ( 
            <>
            
            </>        
            
          );
       })
     }
     <br/><br/>
      
     <br/>
     {post.frontmatter.refs === null||post.frontmatter.refs.length===0?"":
     <span>
       
      <p>
      This page uses materials from Wikipedia available in the references.
      It is released under the  <a href="https://creativecommons.org/licenses/by-sa/3.0/">
      Creative Commons Attribution-Share-Alike License 3.0.
      </a>
      </p>

      <b>References</b>
     </span>
    
     }
     </div>
     <br/><br/>
     <div style={{ float: ` left`, margin:`0rem`}} id='103'>
     {
            post.frontmatter.refs === null?"":
              post.frontmatter.refs.map((item,i) =>{
                return ( 
                  
                      <div style={{ padding: ` .5rem` , margin:`0px`}}  key={i}>
                           <span style={{align:`justify`,color: `grey`, margin: `.5rem`, padding: `0rem`}}> {item.ref} {" "}
                           {item.url.length===0?'': <a href={item.url}>Link</a>}
                           </span>
                      </div>
                  
                );
             })
     }
     </div>
     </div>
     </Container>
    </Layout> 
  )
}



export const query = graphql`
  query($slug: String!,$imgs: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        types
        headers{
          id
          name
        }
        img{
          name
          desc
        }
        vid{
          url
          title
        }
        url{
          id
         url
         title
         desc
         
       }
       refs{
         id
         ref
         url
       }
      }
    }

    allFile(filter:{relativePath: {glob: $imgs}}) {
      totalCount
       edges{
         node{
           id
           absolutePath
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