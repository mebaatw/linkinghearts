import React from 'react';
import Styles from './social-css-modules.module.css';

const LayoutLeftCol = ({ children }) => ( 
    <div className={`${Styles.w3Col} ${Styles.m3}`} name="Left_Column" >
        <main >{children}</main>
    </div>
)


  
  export default LayoutLeftCol



