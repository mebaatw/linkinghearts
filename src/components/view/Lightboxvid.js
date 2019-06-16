import React, {Component} from 'react';
import Styles from './lightboxvid-css-modules.module.css';
//https://jsfiddle.net/quickcleancode/4q3fLbe3/
class Lightboxvid extends Component{
    constructor(props){
        super(props)
        this.state={
            slideIndex : 1
        }
        this.closeLModal = this.closeLModal.bind(this);
        this.appendImg = this.appendImg.bind(this);
        this.videoClick = this.videoClick.bind(this);
        
    }

    componentDidMount(){
        this.appendImg();
    }

    appendImg=()=>{
        var x = document.getElementsByClassName("didi");
        //console.log("XXXX****",x);
        var i;
        for (i = 0; i < x.length; i++) {
            var data = x[i].getAttribute("data");
            var imge = document.createElement("img");
            var imagesrc= data.substring(data.lastIndexOf("/")+1);
            imge.setAttribute("src", 'http://img.youtube.com/vi/'+imagesrc+'/hqdefault.jpg');
           // console.log("DATA****",data);
           x[i].innerHTML.replace(' ','');
            x[i].appendChild(imge);
          }
    }

    videoClick=(n)=>{
        var ldr = document.getElementById("loader");
        var x = document.getElementsByClassName("didi");
         document.getElementById("overlay").style.opacity = "1";
         document.getElementById('overlay').style.display = "block";
        //console.log("TTTT****",n);
        var data = x[n].getAttribute("data");
        //console.log("DATA****",data);
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", data+'?autoplay=1');
        ifrm.setAttribute('allowFullScreen', '');
        ifrm.setAttribute('frameborder', '0');
        ldr.appendChild(ifrm);
        //console.log("O****",o);
        //o.style.opacity=1;
    }

    closeLModal=()=> {
        document.getElementById('loader').innerHTML = '';
        document.getElementById('overlay').style.display = "none";

      }

    

    render(){
        const {  vids } = this.props;
        return(
            <>
            <div id="videos" className={`${Styles.videos}`}>
            {
                vids.map((item,i) =>{
                    return(
                        <>
                        <a href="#dac" data={item.url} className="didi" onClick={()=>this.videoClick(i)} alt={item.title} title={item.title}> </a>
                        
                        </>
                    )
                 })
            }

            </div>

            <div id="overlay" className={`${Styles.overlay}`}>
                <div className={`${Styles.modal}`}>
                    <div id="close" className={`${Styles.close}`} onClick={()=>this.closeLModal()}><b>X</b></div>
                    <div id="loader"></div>
                </div>
            </div>
        
            </>
        );
    }
} export default Lightboxvid