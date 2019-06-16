import React, {Component} from 'react';
import Styles from '../social-css-modules.module.css';
import ImageModal from './ImageModal';
import VideoModal from './VideoModal';


class CardImg2Btm extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <>
            <br/>
            <span className={`${Styles.w3Right} ${Styles.w3Opacity}`}></span>
            <h4>John Doe</h4><br/>
            <hr className={`${Styles.w3Clear}`}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className={`${Styles.w3RowPadding}`} style={{margin:'0 -16px'}}>
              <div className={`${Styles.w3Half}`}>
                
                <ImageModal imgsrc="https://www.w3schools.com/w3images/lights.jpg" 
                imgcaption="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"/>
              </div>
              <div className={`${Styles.w3Half}`}>
                <ImageModal imgsrc="https://www.w3schools.com/howto/img_snow.jpg" 
                    imgcaption="Test Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"/>
              </div>
            </div>
            <br/>
            <div className={`${Styles.w3RowPadding}`} style={{margin:'0 -16px'}}>
              <div className={`${Styles.w3Half}`}>
                
                <VideoModal imgsrc="https://www.youtube.com/embed/Df0YG3qfZ8E" 
                imgcaption="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"/>
              </div>
              <div className={`${Styles.w3Half}`}>
                <VideoModal imgsrc="https://www.youtube.com/embed/SV-FdNDDjYg" 
                    imgcaption="Test Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"/>
              </div>
            </div>
            <br/>
              
              
               
              
           
            Lightbox
            
            <br/>
            </>
        );
    }
} export default CardImg2Btm