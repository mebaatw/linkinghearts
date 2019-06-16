import React, {Component} from 'react'
import Styles from '../social-css-modules.module.css';
import Lightbox from '.././Lightbox';

class CardImg1Top extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <>
            <br/>
            <img src="https://www.w3schools.com/w3images/avatar6.png" alt="Avatar" className={`${Styles.w3Left} ${Styles.w3Circle} ${Styles.w3MarginRight}`} style={{width:'60px'}}/>
            <span className={`${Styles.w3Right} ${Styles.w3Opacity}`}>32 min</span>
            <h4>Angie Jane</h4><br/>
            <hr className={`${Styles.w3Clear}`}/>
            <p>Have you seen this?</p>
            <img src="https://www.w3schools.com/w3images/nature.jpg" style={{width:'100%'}} className={`${Styles.w3MarginBottom}`} alt='img'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <br/>
            <Lightbox />
            </>
        );
    }
} export default CardImg1Top