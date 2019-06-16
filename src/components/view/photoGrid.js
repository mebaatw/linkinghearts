import React, {Component} from 'react';
import Styles from './social-css-modules.module.css';
//import { Link, graphql } from 'gatsby'

class photoGrid extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){

        return(
            <>ppp
                <div className={`${Styles.w3rowpadding}`}>
                ll
                {this.props.data.map(({node}) =>(
                    <div className={`${Styles.w3Third} ${Styles.w3Container}`} key={node.id} slugi={node.fields.slug}>
                        --
                        {this.props.imgs==null||this.props.imgs.lenght===0?'': 
                            this.props.imgs.map(({node},slugi)=>(
                                node.relativePath.indexOf(slugi)===-1?'':
                                    <img src={node.childImageSharp.original.src} 
                                        alt={node.frontmatter.title}
                                        style={{width:'100%'}} className={`${Styles.w3HoverOpacity}`}        />
                            ))
                        }
                        <img src="https://www.w3schools.com/w3images/mountains.jpg" alt="Norway" style={{width:'100%'}} className={`${Styles.w3HoverOpacity}`}/>
                        <div className={`${Styles.w3Container} ${Styles.w3White}`}>
                            <p><b>Lorem Ipsum</b></p>
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                    </div>
                    ))}
                </div>
            </>
        );
    }
} export default photoGrid