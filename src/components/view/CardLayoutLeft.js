import React from 'react';
import Styles from './social-css-modules.module.css';

const CardLayoutleft = ({ children }) => ( 
    <div className={`${Styles.w3Card} ${Styles.w3Round} ${Styles.w3White}`}>
        <main>{children}</main>
    </div>
)


  
  export default CardLayoutleft