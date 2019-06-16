import React from 'react';
import Styles from './social-css-modules.module.css';

const LayoutRightCol = ({ children }) => ( 
    <div className={`${Styles.w3Col} ${Styles.m2}`} id="Right_Column">
        <main>{children}</main>
    </div>
)


  
  export default LayoutRightCol