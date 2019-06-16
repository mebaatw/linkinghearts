import React, {Component} from 'react';
import Styles from './social-css-modules.module.css';
//https://jsfiddle.net/quickcleancode/4q3fLbe3/
class Lightbox extends Component{
    constructor(props){
        super(props)
        this.state={
            slideIndex : 1
        }
        this.showLDivs = this.showLDivs.bind(this);
        this.openLModal = this.openLModal.bind(this);
        this.openLDiv = this.openLDiv.bind(this);
        this.closeLModal = this.closeLModal.bind(this);
        this.plusDivs = this.plusDivs.bind(this);
        this.currentLDiv = this.currentLDiv.bind(this);
    }
    
    showLDivs=(n)=> {
        var i;
        //console.log(this.state.slideIndex);
        var x = document.getElementsByClassName("LightboxSlides");
        //console.log("LightboxSlides",x);
        var dots = document.getElementsByClassName("LightboxDemo");
        //console.log("LightboxDemo",dots)
        var captionText = document.getElementById("LightboxCaption");
        if (n > x.length) {
            n=x.length;
            this.setState({slideIndex: 1})
        }
        if (n < 1) {
            n=x.length;
            this.setState({slideIndex : x.length})
        }
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" w3OpacityOff", "");
        }
        x[n-1].style.display = "block";
        dots[this.state.slideIndex-1].className += " w3OpacityOff";
        captionText.innerHTML = dots[n-1].alt;
      }

     openLModal=()=> {
        document.getElementById('LightboxModal').style.display = "block";
      }

      openLDiv=(n)=>{
        this.openLModal();
         this.currentLDiv(n);
      }

      closeLModal=()=> {
        document.getElementById('LightboxModal').style.display = "none";
      }

      plusDivs=(n)=> {
        this.showLDivs(this.setState({slideIndex: this.state.slideIndex+ n}));
      }
      
      currentLDiv=(n)=> {
          this.setState({slideIndex: n})
        this.showLDivs(n);
      }

    render(){
        const {  imgSharp,imgs } = this.props;
        return(
            <>
            <div className={`${Styles.w3Container}`}>
                <div className={`${Styles.w3RowPadding}`} style={{margin:'0 -16px'}}>
                {
                    imgSharp.map(({ node },i)=>(
                        node.childImageSharp===null|| node.childImageSharp.fluid===null?"":
                    <div className={`${Styles.w3Col} ${Styles.s3}`}>
                        <img src={node.childImageSharp.original.src} style={{width:'100%', height:'100px',cursor:'pointer'}} alt=''
                            onClick={()=>this.openLDiv(i+1)} className={`${Styles.w3HoverShadow}`}/>
                    </div>
                    
                    ))
                } 
                </div>
                
                <div id="LightboxModal" className={`${Styles.w3Modal} ${Styles.w3Black}`}>
                  <span className={`${Styles.w3TextWhite} ${Styles.w3Xxlarge} ${Styles.w3HoverTextGrey} ${Styles.w3Container} ${Styles.w3DisplayTopright}`} 
                      onClick={()=>this.closeLModal()}  style={{cursor:'pointer'}}>
                        ×
                    </span>
                    <div className={``} style={{margin: '15px'}}>
                        <div className={`${Styles.w3Content}`} style={{maxWidth:'1200px'}} id="top">
                        {
                            imgSharp.map(({ node })=>(
                                node.childImageSharp===null|| node.childImageSharp.fluid===null?"":
                                    <img  className={`LightboxSlides`} src={node.childImageSharp.original.src} style={{width:'100%'}} alt=''/>
                             ))
                        }  

                            <div className={`${Styles.w3Row} ${Styles.w3Black} ${Styles.w3Center}`}>
                                <div className={`${Styles.w3DisplayContainer}`}>
                                    <p id="LightboxCaption"></p>  
                                </div>
                                <div className={`${Styles.w3Container}`}>
                                {
                                  imgSharp.map(({ node },i)=>(
                                    node.childImageSharp===null|| node.childImageSharp.fluid===null?"":
                                    <a href="#top">
                                        <div className={`${Styles.w3Col} ${Styles.s6}`} style={{padding:'2px'}}>
                                            <img  className={`LightboxDemo ${Styles.w3Opacity} ${Styles.w3HoverOpacityOff}`} src={node.childImageSharp.original.src} style={{width:'100%'}} onClick={()=>this.currentLDiv(i+1)} 
                                                alt={imgs===undefined?"NA":imgs.find( img => img.name === node.relativePath )===undefined?"":imgs.find( img => img.name === node.relativePath ).desc} />
                                        </div>
                                        </a>
                                   ))
                                }   
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        
            </>
        );
    }
} export default Lightbox