import React, { Component } from 'react';
//import Styles from './social-css-modules.module.css';
//import NavBar from './Navbar';
//import Profile from './Profile';
import Accordion from './Accordion';
import Intrests from './Interests';
//import AlertBox from './AlertBox';
//import CardStatusPost from './CardStatusPost';
import CardLayout from './CardLayout';
import CardLayoutRight from './CardLayoutRight'
//import CardImg1Top from './items/CardImg1Top';
import CardBasic from './items/CardBasic';
//import CardImg2Btm from './items/CardImg2Btm';
import CardEvent from './items/CardEvent';
import CardRequest from './items/CardRequest';
import LayoutLeftCol from './LayoutLeftCol';
import LayoutMiddleCol from './LayoutMiddleCol';
import LayoutRightCol from './LayoutRightCol';
import LayoutGridRow from './LayoutGridRow';
import PageContainer from './PageContainer';
//import Fonts from './font-awesome-modules.module.css';
//import Fonts from 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

class PanAfricaView extends Component{
    constructor(props){
        super(props)
        this.state ={

        }
        
    }


    render(){
        return(
            <>
                <PageContainer name="Page_Container"> 
                    <LayoutGridRow name="Grid">
                        <LayoutLeftCol id="Left_Column" >
                            <br/>
                            <Accordion />
                            <br/>
                            <Intrests />
                            <br/>
                            
                        </LayoutLeftCol>

                        <LayoutMiddleCol id="Middle_Column">                     
                                
                            {this.props.data.map(({node }) =>(
                                <div key={node.id}>
                                    <CardLayout id="CardDisplay0img">
                                        <CardBasic  
                                            slug={node.fields.slug}
                                            title={node.frontmatter.title}
                                            date={node.frontmatter.date}
                                            excerpt={node.excerpt}
                                            imgs={this.props.imgs}
                                        /> 
                                    </CardLayout> 
                                    <p/>
                                </div>
                                ))}
                               
                        </LayoutMiddleCol>

                        <LayoutRightCol id="Right_Column">
                            <br/>
                            <CardLayoutRight id="Events">
                                <CardEvent />
                            </CardLayoutRight>
                            <br/>

                            <CardLayoutRight id="Request">
                                <CardRequest />
                            </CardLayoutRight>
                            <br/>
                        </LayoutRightCol>
                    </LayoutGridRow>
                </PageContainer>
            </>   
        );
    }
} export default PanAfricaView;