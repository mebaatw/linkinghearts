/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Styles from './social-css-modules.module.css';

//import "./layout.css"

const container = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQueryContainer {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
      {/**** CONTAINER ****/}
      <div className={`${Styles.w3Content}`} style={{maxWidth:'1600px',backgroundColor: '#e0eee0'}}>

      {/**** GRID ****/}
      <div className={`${Styles.w3Row} ${Styles.w3Padding} ${Styles.w3Border}`}>

      {/**** Main Entries ****/}
      <div className={`${Styles.w3Col} ${Styles.l9} `} style={{padding:'0px', margin:'0px'}}>

      {/**** Photo Grid ******/}

             <main>{children}</main>

        {/**** END Photo Grid ******/}
            
        </div>
        {/****END  Main Entries ****/}

        {/**** SIDE ****/}
        <div className={`${Styles.w3Col} ${Styles.l3}`}>

          {/*** POSTS ****
          <div className={`${Styles.w3White} ${Styles.w3Margin}`}>
            <div className={`${Styles.w3Container} ${Styles.w3Padding} ${Styles.w3Black}`}>
              <h4>Popular Posts</h4>
            </div>/}

            <ul className={`${Styles.w3Ul} ${Styles.w3Hoverable} ${Styles.w3White}`}>
              <li className={`${Styles.w3Padding16}`}>
                <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" alt="" className={`${Styles.w3Left} ${Styles.w3MarginRight}`} style={{width:'50px'}}/>
                <span className={`${Styles.w3Large}`}>Denim</span>
                <br/>
                <span>Sed mattis nunc</span>
              </li>
              <li className={`${Styles.w3Padding16}`}>
                <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="" className={`${Styles.w3Left} ${Styles.w3MarginRight}`} style={{width:'50px'}}/>
                <span className={`${Styles.w3Large}`}>Denim</span>
                <br/>
                <span>Sed mattis nunc</span>
              </li>
              <li className={`${Styles.w3Padding16}`}>
                <img src="https://www.w3schools.com/w3images/workshop.jpg.jpg" alt="" className={`${Styles.w3Left} ${Styles.w3MarginRight}`} style={{width:'50px'}}/>
                <span className={`${Styles.w3Large}`}>Denim</span>
                <br/>
                <span>Sed mattis nunc</span>
              </li>
              <li className={`${Styles.w3Padding16}`}>
                <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" alt="" className={`${Styles.w3Left} ${Styles.w3MarginRight}`} style={{width:'50px'}}/>
                <span className={`${Styles.w3Large}`}>Denim</span>
                <br/>
                <span>Sed mattis nunc</span>
              </li>
              <li className={`${Styles.w3Padding16}`}>
                <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" alt="" className={`${Styles.w3Left} ${Styles.w3MarginRight}`} style={{width:'50px'}}/>
                <span className={`${Styles.w3Large}`}>Denim</span>
                <br/>
                <span>Sed mattis nunc</span>
              </li>
            </ul>
          </div>
          {/*** END POSTS ****/}
        </div>
        {/*** END SIDE ****/}

        </div>
        {/****END GRID ****/}

        </div>
        {/****END CONTAINER ****/}
      
      <footer className={`${Styles.w3Container} ${Styles.w3Black}`} style={{padding:'32px'}}>
        {/** <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" >w3.css</a></p>*/}
      </footer>        
        
          
          
          
        
      </>
    )}
  />
)

container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default container
