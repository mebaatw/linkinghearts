import React, {Component} from 'react'
import Styles from '../social-css-modules.module.css';


class CardBasic extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <>
            <br/>
            <span className={`${Styles.w3Right} ${Styles.w3Opacity}`} style={{
               marginTop : '0px'}}>
                {this.props.date ==null||this.props.date.length===0?'': '('+this.props.date+')'}
            </span>
            <h4>{this.props.title}</h4> 
            

            {this.props.imgs==null||this.props.imgs.lenght===0?'':
                this.props.imgs.map(({node})=>(
               node.relativePath.indexOf(this.props.slug)===-1?'':
           <img src={node.childImageSharp.original.src} 
            alt={this.props.title}
            className={`${Styles.w3Left}  ${Styles.w3MarginRight}`} style={{width:'100%'}}/>
           ))}
            
            <br/>
            <hr />
            <p>{this.props.excerpt==null||this.props.excerpt.lenght===0?'':this.props.excerpt}</p>
            </>
        );
    }
} export default CardBasic