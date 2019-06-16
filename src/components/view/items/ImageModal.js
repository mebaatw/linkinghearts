import React, {Component} from 'react';
import Styles from './imagemodal-modules.module.css';

class ImageModal extends Component{
    constructor(props){
        super(props)
        this.state={
            //divcontent: ''
        }
        this.expandImg = this.expandImg.bind(this);
        this.closeImg = this.closeImg.bind(this);
    }

    expandImg=(x)=>{

        //console.log(x.props);
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        //var img = document.getElementById('myImg');
        //var txt = x.props.imgcaption;
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");

        modal.style.display = "block";
        modalImg.src = x.props.imgsrc;
        captionText.innerHTML = x.props.imgcaption;
       // this.setState({
         //   divcontent: txt
         // });
    }

    closeImg=()=>{
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
         modal = '';
    }

    render(){

        const{imgsrc} = this.props;

        return(
            <>
                <img id="myImg" src={imgsrc} onClick={()=>this.expandImg(this)} alt="Snow" style={{width:'100%',maxWidth:'300px'}}></img>
                <div id="myModal" className={`${Styles.modal}`}>
                    <span className={`${Styles.close}`} onClick={()=>this.closeImg()}>&times;</span>
                    <img className={`${Styles.modalContent}`} id="img01" alt=''/>
                    <div id="caption" className={`${Styles.caption}`}></div>
                </div>
            </>
        );
    }
} export default ImageModal