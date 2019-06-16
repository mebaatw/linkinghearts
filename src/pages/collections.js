import React from "react"
import Layout from "../components/layoutMain"
import Styles from '../components/view/social-css-modules.module.css';
import { Link, graphql } from 'gatsby'



export default ({ data }) => {
    // const post = data.allMarkdownRemark.edges.node
   return (
    <Layout>
      <br/>
     
               <div className={`${Styles.w3rowpadding}`}> 
                  {data.allMarkdownRemark.group.map((g,i) =>(
                    <div className={`${Styles.w3Third} ${Styles.w3Container} `}>
                        <div className={`${Styles.w3Container} ${Styles.w3White}`}>
                          <Link  to={g.fieldValue}>
                            <p><b>{g.fieldValue}</b></p>  
                          </Link>
                        </div>
                    </div>
                    
                    ))}
                </div>
                 <br/><br/>
              
    </Layout>
   )
 }
 
 export const query = graphql`
   query {
     allMarkdownRemark(filter: {frontmatter: {type: {in:["Cities","Kingdoms","Architecture","History,Ruins,Metal"]}}}) {
         group(field: frontmatter___type) {
           fieldValue
           totalCount
         }
       }
   }
 `