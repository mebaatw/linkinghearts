import React, {Component} from 'react'
import Styles from './social-css-modules.module.css';

class contentMain extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){

        return(
            <>
            {/* w3-content defines a container for fixed size centered content, 
                and is wrapped around the whole page content, except for the footer in this example -->*/}
            <div className={`${Styles.w3Content}`} style={{maxWidth:'1600px'}}>
                
                { /*-- Grid --*/}
                <div className={`${Styles.w3Row} ${Styles.w3Padding} ${Styles.w3Border}`}>

                    {/**** Main Entries ****/}
                    <div className={`${Styles.w3Col} ${Styles.l8} ${Styles.s12}`}>
                        
                        {/**** First Photo Grid ******/}
                        <div className={`${Styles.w3rowpadding}`}>
                            <div className={`${Styles.w3Third} ${Styles.w3Container} `}>
                                <img src="https://www.w3schools.com/w3images/mountains.jpg" alt="Norway" style={{width:'100%'}} className={`${Styles.w3HoverOpacity}`}/>
                                <div className={`${Styles.w3Container} ${Styles.w3White}`}>
                                    <p><b>Lorem Ipsum</b></p>
                                    <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                                </div>
                            </div>
                            <div className={`${Styles.w3Third} ${Styles.w3Container} `}>
                                <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Norway" style={{width:'100%'}} className={`${Styles.w3HoverOpacity}`}/>
                                <div className={`${Styles.w3Container} ${Styles.w3White}`}>
                                    <p><b>Lorem Ipsum</b></p>
                                    <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                                </div>
                            </div>
                            <div className={`${Styles.w3Third} ${Styles.w3Container}`}>
                                <img src="https://www.w3schools.com/w3images//nature.jpg" alt="Norway" style={{width:'100%'}} className={`${Styles.w3HoverOpacity}`}/>
                                <div className={`${Styles.w3Container} ${Styles.w3White}`}>
                                    <p><b>Lorem Ipsum</b></p>
                                    <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                                </div>
                            </div>
                            <div className={`${Styles.w3Third} ${Styles.w3Container}`}>
                                <img src="https://www.w3schools.com/w3images//nature.jpg" alt="Norway" style={{width:'100%'}} className={`${Styles.w3HoverOpacity}`}/>
                                <div className={`${Styles.w3Container} ${Styles.w3White}`}>
                                    <p><b>Lorem Ipsum</b></p>
                                    <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                                </div>
                            </div>
                            <div className={`${Styles.w3Third} ${Styles.w3Container}`}>
                                <img src="https://www.w3schools.com/w3images//nature.jpg" alt="Norway" style={{width:'100%'}} className={`${Styles.w3HoverOpacity}`}/>
                                <div className={`${Styles.w3Container} ${Styles.w3White}`}>
                                    <p><b>Lorem Ipsum</b></p>
                                    <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                                </div>
                            </div>
                            
                        </div>
                        {/** End First Phot Grid */}
                        
                        {/*** TEXT GRID ****/}
                        
                        <div className={`${Styles.w3RowPadding} ${Styles.w3Padding64} ${Styles.w3Container}`}>
                            <div className={`${Styles.w3Content}`}>
                                <div className={``}>
                                    <h1>Lorem Ipsum</h1>
                                    <h5 className={`${Styles.w3Padding32}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                        nisi ut aliquip ex ea commodo consequat.
                                    </h5>

                                    <p className={`${Styles.w3TextGrey}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>

                                
                            </div>
                        </div>
                        {/** END TEXT GRID ***/}
                    </div>
                     {/****End Main Entries ****/}
                </div>
            </div>
            </>
        );
    }
} export default contentMain