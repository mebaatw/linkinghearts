import React from 'react';
import Styles from './social-css-modules.module.css';

const LayoutMiddleCol = ({ children }) => ( 
    <div className={`${Styles.w3Col} ${Styles.m7}`} id="Middle_Column">
        <main>{children}</main>
    </div>
)


  
  export default LayoutMiddleCol