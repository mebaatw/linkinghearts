import React, {Component} from 'react'
import Styles from '../social-css-modules.module.css';


class CardEvent extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <>
            <div className={`${Styles.w3Container}`}>
                <p>Upcoming Events:</p>
                <img src="https://www.w3schools.com/w3images/forest.jpg" alt="Forest" style={{width:'100%'}}/>
                <p><strong>Holiday</strong></p>
                <p>Friday 15:00</p>
                <p><button className={`${Styles.w3Button} ${Styles.w3Block} ${Styles.w3ThemeL4}`}>Info</button></p>
            </div>
            </>
        );
    }
} export default CardEvent