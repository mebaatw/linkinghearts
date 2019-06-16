import React from 'react';
import Styles from './social-css-modules.module.css';

const CardLayoutRight = ({ children }) => ( 
    <div className={`${Styles.w3Card} ${Styles.w3Round} ${Styles.w3White} ${Styles.w3Center}`} id="Events">
        <main>{children}</main>
    </div>
)


  
  export default CardLayoutRight



