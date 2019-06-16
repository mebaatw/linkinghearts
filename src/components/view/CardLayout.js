import React from 'react';
import Styles from './social-css-modules.module.css';

const CardImgLayout = ({ children }) => ( 
    <div className={`${Styles.w3Container} ${Styles.w3Card} ${Styles.w3White} ${Styles.w3Round} ${Styles.w3Margin}`} id="CardDisplay2imgB">
        <main>{children}</main>
    </div>
)


  
  export default CardImgLayout



