import React from 'react';
import Styles from './social-css-modules.module.css';

const LayoutGridRow = ({ children }) => ( 
    <div className={`${Styles.w3Row}`} name="Grid">
        <main>{children}</main>
    </div>
)


  
  export default LayoutGridRow