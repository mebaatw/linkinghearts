import React, { Component } from 'react';
import Styles from './social-css-modules.module.css';


class Accordion extends Component{
    constructor(props){
        super(props)

        this.state={

        }
        this.accordion = this.accordion.bind(this);
    }

    accordion=(id)=>{
        var x = document.getElementById(id);
        if (x.className.indexOf("w3Show") === -1) {
            //alert('clicked');
            x.className += " w3Show";
            x.previousElementSibling.className += " w3ThemeD1";
            x.className = x.className.replace("w3Hide", "w3HideNA");
        } else { 
            x.className = x.className.replace("w3Show", "");
            x.previousElementSibling.className = 
            x.previousElementSibling.className.replace(" w3ThemeD1", "");
            x.className = x.className.replace("w3HideNA", "w3Hide");
        }
    }

    render(){
        return(
            <>
            <div className={`${Styles.w3Card} ${Styles.w3Round}`} >
              <div className={`${Styles.w3White}`} >
                <button onClick={()=>this.accordion('Demo1')} className={`${Styles.w3Button} ${Styles.w3Block} ${Styles.w3ThemeL1} ${Styles.w3LeftAlign}`}>
                    <i className={`${Styles.w3MarginRight}`}></i> 
                    My Groups
                </button>
                <div id="Demo1" className={`${Styles.w3Hide} ${Styles.w3Container}`}>
                    <p>Some text..</p>
                </div>

                <button onClick={()=>this.accordion('Demo2')} className={`${Styles.w3Button} ${Styles.w3Block} ${Styles.w3ThemeL1} ${Styles.w3LeftAlign}`}>
                    <i className={`${Styles.w3MarginRight}`}></i> 
                    My Events
                </button>
                <div id="Demo2" className={`${Styles.w3Hide} ${Styles.w3Container}`}>
                    <p>Some other text..</p>
                </div>

                <button onClick={()=>this.accordion('Demo3')} className={`${Styles.w3Button} ${Styles.w3Block} ${Styles.w3ThemeL1} ${Styles.w3LeftAlign}`}>
                    <i className={`${Styles.w3MarginRight}`}></i> 
                    My Photos
                </button>
                <div id="Demo3" className={`${Styles.w3Hide} ${Styles.w3Container}`}>
                    <div className={`${Styles.w3RowPadding}`}>
                        <br/>
                        <div className={`${Styles.w3Half}`}>
                            <img src="https://www.w3schools.com/w3images/lights.jpg" style={{width:'100%'}} className={`${Styles.w3MarginBottom}`} alt="light"/>
                        </div>
                        <div className={`${Styles.w3Half}`}>
                            <img src="https://www.w3schools.com/w3images/nature.jpg" style={{width:'100%'}} className={`${Styles.w3MarginBottom}`} alt="light"/>
                        </div>
                        <div className={`${Styles.w3Half}`}>
                            <img src="https://www.w3schools.com/w3images/mountains.jpg" style={{width:'100%'}} className={`${Styles.w3MarginBottom}`} alt="light"/>
                        </div>
                        <div className={`${Styles.w3Half}`}>
                            <img src="https://www.w3schools.com/w3images/forest.jpg" style={{width:'100%'}} className={`${Styles.w3MarginBottom}`} alt="light"/>
                        </div>
                        <div className={`${Styles.w3Half}`}>
                            <img src="https://www.w3schools.com/w3images/nature.jpg" style={{width:'100%'}} className={`${Styles.w3MarginBottom}`} alt="light"/>
                        </div>
                        <div className={`${Styles.w3Half}`}>
                            <img src="https://www.w3schools.com/w3images/snow.jpg" style={{width:'100%'}} className={`${Styles.w3MarginBottom}`} alt="light"/>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            </>
        );
    }
} export default Accordion