import React, {Component} from 'react'
import Styles from '../social-css-modules.module.css';


class CardRequest extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <>
            <div className={`${Styles.w3Container}`}>
                <p>Friend Request</p>
                <img src="https://www.w3schools.com/w3images/avatar6.png" alt="Avatar" style={{width:'50%'}}/><br/>
                <span>Jane Doe</span>
                <div className={`${Styles.w3Row} ${Styles.w3Opacity}`}>
                    <div className={`${Styles.w3Half}`}>
                        <button className={`${Styles.w3Button} ${Styles.w3Block} ${Styles.w3Green} ${Styles.w3Section}`} title="Accept"><i class="fa fa-check">A</i></button>
                    </div>
                    <div className={`${Styles.w3Half}`}>
                        <button className={`${Styles.w3Button} ${Styles.w3Block} ${Styles.w3Red} ${Styles.w3Section}`} title="Decline"><i class="fa fa-remove">D</i></button>
                    </div>
                </div>
            </div>
            </>
        );
    }
} export default CardRequest