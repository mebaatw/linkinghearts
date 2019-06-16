import React from 'react';
import Styles from './social-css-modules.module.css';

const PageContainer = ({ children }) => ( 
    <div className={`${Styles.w3Container} ${Styles.w3Content}`} style={{maxWidth:'1400px',marginTop:'80px'}} name="Page_Container">
        <main>{children}</main>
    </div>
)


  
  export default PageContainer