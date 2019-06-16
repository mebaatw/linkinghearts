import React, {Component} from 'react';
import Styles from './social-css-modules.module.css';


class Interests extends Component{
    constructor(props){
        super(props)

        this.state={

        }
    }

    render(){
        return(
            <>
            <div className={`${Styles.w3Card} ${Styles.w3Round} ${Styles.w3White} ${Styles.w3HideSmall}`} name="Interests">
              <div className={`${Styles.w3Container}`}>
                <p>Interests</p>
                <p>
                    <span className={`${Styles.w3Tag} ${Styles.w3Small} ${Styles.w3ThemeD5}`}>News</span>
                    <span className={`${Styles.w3Tag} ${Styles.w3Small} ${Styles.w3ThemeD4}`}>W3Schools</span>
                    <span className={`${Styles.w3Tag} ${Styles.w3Small} ${Styles.w3ThemeD3}`}>Labels</span>
                    <span className={`${Styles.w3Tag} ${Styles.w3Small} ${Styles.w3ThemeD2}`}>Games</span>
                    <span className={`${Styles.w3Tag} ${Styles.w3Small} ${Styles.w3ThemeD1}`}>Friends</span>
                    <span className={`${Styles.w3Tag} ${Styles.w3Small} ${Styles.w3Theme}`}>Games</span>
                    <span className={`${Styles.w3Tag} ${Styles.w3Small} ${Styles.w3ThemeL1}`}>Friends</span>
                    <span className={`${Styles.w3Tag} ${Styles.w3Small} ${Styles.w3ThemeL2}`}>Food</span>
                    <span className={`${Styles.w3Tag} ${Styles.w3Small} ${Styles.w3ThemeL3}`}>Design</span>
                    <span className={`${Styles.w3Tag} ${Styles.w3Small} ${Styles.w3TthemeL4}`}>Art</span>
                    <span className={`${Styles.w3Tag} ${Styles.w3Small} ${Styles.w3ThemeL5}`}>Photos</span>
                </p>
              </div>
            </div>
            </>
        );
    }
} export default Interests