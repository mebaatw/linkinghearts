import React, {Component} from 'react'
import Styles from './view/social-css-modules.module.css';
import { Link } from 'gatsby'
//import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'

class headerMain extends Component{
    constructor(props){
        super(props)
        this.state={

        }
        this.w3Open=this.w3Open.bind(this);
        this.w3Close=this.w3Close.bind(this);
        
    }
    w3Open=()=>{
        
        var mySidebar = document.getElementById("mySidebar");
        console.log("mySidebar",mySidebar);
        if (mySidebar.style.display === 'block') {
            mySidebar.style.display = 'none';
          } else {
            mySidebar.style.display = 'block';
          }
    }

    w3Close=()=>{   
        var mySidebar = document.getElementById("mySidebar");
        mySidebar.style.display = "none";
    }

    render(){
        return(
            <>
               
        <div className={`${Styles.w3Top}`} desc="Navbar (sit on top)" >
            <div className={`${Styles.w3Bar} ${Styles.w3PanRed} ${Styles.w3Card}`} style={{paddingTop:'10px',paddingLeft:'1px'}} id="myNavbar">
            <div className={`${Styles.w3Left} `} style={{paddingLeft:'20px',paddingBottom:'0px'}} >
               {this.props.logo.map(({node})=>(
                   <>
                   {/**<Img className={`  ${Styles.w3Wide}`} fluid={node.childImageSharp.fluid} style={{paddingLeft:'20px',width:'100%', padding:'0px'}}/> */ }
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} size="2x" color="#00843E"/>
                         {/**<img src={node.childImageSharp.original.src} style={{width:'30%', paddingBottom:'5px', padding:'0px', margin:'0px'}} alt=''/>*/ }
                    </Link>
                    </>
               )) } 
               <strong></strong> <center className={`${Styles.w3Right} `} style={{fontSize:'25px',textAlign:'center', color:'#00843E'}}>&nbsp;Pan-Africa</center>
            </div>
                <div style={{fontSize:'18px',textAlign:'center'}}></div>
                <div className={`${Styles.w3Right} ${Styles.w3HideSmall}`} desc="Right-sided navbar links">
                
                {/** <a href="#about" className={`${Styles.w3BarItem} ${Styles.w3Button}`}>ABOUT</a>*/}
                {/****/}
                 <div className={`${Styles.w3DropdownHover} ${Styles.w3HideMedium} ${Styles.w3HideSmall}`}>
                    <button className={`${Styles.w3Button}`} title="Notifications" style={{backgroundColor:'#e31c23', paddingRight:'150px'}}><FontAwesomeIcon icon={faCaretDown} size="2x" color="#00843E"/> <i className="fa fa-caret-down"></i></button>     
                    <div className={`${Styles.w3DropdownContent} ${Styles.w3Card4} ${Styles.w3BarBlock}`}>
                    <Link to="/Architecture/" className={`${Styles.w3BarItem} ${Styles.w3Button}`}>Architecture&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                    <Link to="/Ruins/" className={`${Styles.w3BarItem} ${Styles.w3Button}`}>Ruins&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                    <Link to="/Kingdoms/" className={`${Styles.w3BarItem} ${Styles.w3Button}`}>Kingdoms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                    <Link to="/Rock Art/" className={`${Styles.w3BarItem} ${Styles.w3Button}`}>Rock Art&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                    <Link to="/Metal/" className={`${Styles.w3BarItem} ${Styles.w3Button}`}>Metal-Working Cultures</Link>
                    </div>
               </div> 
                {/** <a href="#contact" className={`${Styles.w3BarItem} ${Styles.w3Button}`}><i className="fa fa-envelope"></i> CONTACT</a>*/}
                <br/><br/>
                </div>
            

                <a href="#4" className={` ${Styles.w3Right} ${Styles.w3HideLarge} `} onClick={()=>this.w3Open()} style={{paddingRight:'50px'}}> 
                    <FontAwesomeIcon icon={faBars} size="2x" color="#00843E"/>
                </a>
            </div>
        </div>


        <nav className={`${Styles.w3Sidebar} ${Styles.w3BarBlock} ${Styles.w3Black} ${Styles.w3Card} ${Styles.w3AnimateLeft} ${Styles.w3HideLarge}`} style={{display:'none'}} id="mySidebar">
        <a href="#f" onClick={()=>this.w3Close()} className={`${Styles.w3BarItem} ${Styles.w3Button} ${Styles.w3Large} ${Styles.w3Padding16}`}>Close ×</a>
        {/** <a href="#about" onClick={()=>this.w3Close()} className={`${Styles.w3BarItem} ${Styles.w3Button}`}>ABOUT</a>
        <a href="#contact" onClick={()=>this.w3Close()} className={`${Styles.w3BarItem} ${Styles.w3Button}`}>CONTACT</a>*/}
        <div className={`${Styles.w3DropdownHover} `}>
            <button className={`${Styles.w3Button}`} title="Notifications">COLLECTIONS <i className="fa fa-caret-down"></i></button>     
            <div className={`${Styles.w3DropdownContent} ${Styles.w3Card4} ${Styles.w3BarBlock}`}>
            <Link to="/Architecture/" className={`${Styles.w3BarItem} ${Styles.w3Button}`}>Architecture</Link>
            <Link to="/Ruins/" className={`${Styles.w3BarItem} ${Styles.w3Button}`}>Ruins&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            <Link to="/Kingdoms/" className={`${Styles.w3BarItem} ${Styles.w3Button}`}>Kingdoms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            <Link to="/Rock Art/" className={`${Styles.w3BarItem} ${Styles.w3Button}`}>Rock Art&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            <Link to="/Metal/" className={`${Styles.w3BarItem} ${Styles.w3Button}`}>Metallurgy&nbsp;&nbsp;</Link>
            </div>
        </div>
        </nav>

        <header className={`${Styles.w3Container} ${Styles.w3PanRed} ${Styles.w3Center}`} style={{padding:'50px 1px'}}>
        
        </header>
        
            </>
        );
    }
} export default headerMain
