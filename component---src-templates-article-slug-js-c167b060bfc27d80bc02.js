(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(170),i=a(177),c=a(165),o=a.n(c),s=(a(187),a(188),a(65),a(41)),d=a.n(s),m=a(8),u=a.n(m),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).showLDivs=function(e){var t,n=document.getElementsByClassName("LightboxSlides"),r=document.getElementsByClassName("LightboxDemo"),l=document.getElementById("LightboxCaption");for(e>n.length&&(e=n.length,a.setState({slideIndex:1})),e<1&&(e=n.length,a.setState({slideIndex:n.length})),t=0;t<n.length;t++)n[t].style.display="none";for(t=0;t<r.length;t++)r[t].className=r[t].className.replace(" w3OpacityOff","");n[e-1].style.display="block",r[a.state.slideIndex-1].className+=" w3OpacityOff",l.innerHTML=r[e-1].alt},a.openLModal=function(){document.getElementById("LightboxModal").style.display="block"},a.openLDiv=function(e){a.openLModal(),a.currentLDiv(e)},a.closeLModal=function(){document.getElementById("LightboxModal").style.display="none"},a.plusDivs=function(e){a.showLDivs(a.setState({slideIndex:a.state.slideIndex+e}))},a.currentLDiv=function(e){a.setState({slideIndex:e}),a.showLDivs(e)},a.state={slideIndex:1},a.showLDivs=a.showLDivs.bind(d()(a)),a.openLModal=a.openLModal.bind(d()(a)),a.openLDiv=a.openLDiv.bind(d()(a)),a.closeLModal=a.closeLModal.bind(d()(a)),a.plusDivs=a.plusDivs.bind(d()(a)),a.currentLDiv=a.currentLDiv.bind(d()(a)),a}return u()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.imgSharp,n=t.imgs;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:""+o.a.w3Container},r.a.createElement("div",{className:""+o.a.w3RowPadding,style:{margin:"0 -16px"}},a.map(function(t,a){var n=t.node;return null===n.childImageSharp||null===n.childImageSharp.fluid?"":r.a.createElement("div",{className:o.a.w3Col+" "+o.a.s3},r.a.createElement("img",{src:n.childImageSharp.original.src,style:{width:"100%",height:"100px",cursor:"pointer"},alt:"",onClick:function(){return e.openLDiv(a+1)},className:""+o.a.w3HoverShadow}))})),r.a.createElement("div",{id:"LightboxModal",className:o.a.w3Modal+" "+o.a.w3Black},r.a.createElement("span",{className:o.a.w3TextWhite+" "+o.a.w3Xxlarge+" "+o.a.w3HoverTextGrey+" "+o.a.w3Container+" "+o.a.w3DisplayTopright,onClick:function(){return e.closeLModal()},style:{cursor:"pointer"}},"×"),r.a.createElement("div",{className:"",style:{margin:"15px"}},r.a.createElement("div",{className:""+o.a.w3Content,style:{maxWidth:"1200px"},id:"top"},a.map(function(e){var t=e.node;return null===t.childImageSharp||null===t.childImageSharp.fluid?"":r.a.createElement("img",{className:"LightboxSlides",src:t.childImageSharp.original.src,style:{width:"100%"},alt:""})}),r.a.createElement("div",{className:o.a.w3Row+" "+o.a.w3Black+" "+o.a.w3Center},r.a.createElement("div",{className:""+o.a.w3DisplayContainer},r.a.createElement("p",{id:"LightboxCaption"})),r.a.createElement("div",{className:""+o.a.w3Container},a.map(function(t,a){var l=t.node;return null===l.childImageSharp||null===l.childImageSharp.fluid?"":r.a.createElement("a",{href:"#top"},r.a.createElement("div",{className:o.a.w3Col+" "+o.a.s6,style:{padding:"2px"}},r.a.createElement("img",{className:"LightboxDemo "+o.a.w3Opacity+" "+o.a.w3HoverOpacityOff,src:l.childImageSharp.original.src,style:{width:"100%"},onClick:function(){return e.currentLDiv(a+1)},alt:void 0===n?"NA":void 0===n.find(function(e){return e.name===l.relativePath})?"":n.find(function(e){return e.name===l.relativePath}).desc})))})),r.a.createElement("br",null)))))))},t}(n.Component),g=a(192),f=a.n(g),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).appendImg=function(){var e,t=document.getElementsByClassName("didi");for(e=0;e<t.length;e++){var a=t[e].getAttribute("data"),n=document.createElement("img"),r=a.substring(a.lastIndexOf("/")+1);n.setAttribute("src","http://img.youtube.com/vi/"+r+"/hqdefault.jpg"),t[e].innerHTML.replace(" ",""),t[e].appendChild(n)}},a.videoClick=function(e){var t=document.getElementById("loader"),a=document.getElementsByClassName("didi");document.getElementById("overlay").style.opacity="1",document.getElementById("overlay").style.display="block";var n=a[e].getAttribute("data"),r=document.createElement("iframe");r.setAttribute("src",n+"?autoplay=1"),r.setAttribute("allowFullScreen",""),r.setAttribute("frameborder","0"),t.appendChild(r)},a.closeLModal=function(){document.getElementById("loader").innerHTML="",document.getElementById("overlay").style.display="none"},a.state={slideIndex:1},a.closeLModal=a.closeLModal.bind(d()(a)),a.appendImg=a.appendImg.bind(d()(a)),a.videoClick=a.videoClick.bind(d()(a)),a}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.appendImg()},a.render=function(){var e=this,t=this.props.vids;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"videos",className:""+f.a.videos},t.map(function(t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"#dac",data:t.url,className:"didi",onClick:function(){return e.videoClick(a)},alt:t.title,title:t.title}," "))})),r.a.createElement("div",{id:"overlay",className:""+f.a.overlay},r.a.createElement("div",{className:""+f.a.modal},r.a.createElement("div",{id:"close",className:""+f.a.close,onClick:function(){return e.closeLModal()}},r.a.createElement("b",null,"X")),r.a.createElement("div",{id:"loader"}))))},t}(n.Component);a.d(t,"query",function(){return v});t.default=function(e){var t=e.data,a=t.markdownRemark;return r.a.createElement(l.a,null,r.a.createElement(i.a,null,r.a.createElement("div",{className:o.a.w3RowPadding+" "+o.a.w3Padding48+" "+o.a.w3Container+" "+o.a.w3Content+" ",style:{maxWidth:3050,paddingTop:"0px",padding:" 1rem",margin:".0rem",backgroundColor:"white",border:"1px solid grey"}},r.a.createElement("h1",{style:{textAlign:"center",paddingTop:"0px",paddingBottom:"10px",margin:".3rem",fontWeight:"700",color:"black"}},a.frontmatter.title),r.a.createElement("div",{style:{borderTop:"6px solid #00843e",paddingTop:"30px",borderBottom:"1px dotted #9b9b9b",flexGrow:"0",flexShrink:"0",minWidth:"100%",maxWidth:"100%"}},-1===a.frontmatter.types.indexOf("KEYS")?"":r.a.createElement("div",{style:{fontWeight:"800",color:"#00843e",fontSize:"18px",lineHeight:"1.05",letterSpacing:".6px",textTransform:"uppercase",marginBottom:"1px",marginTop:"2px",paddingBottom:"0px"}},"Key Points"),null===a.html?"":r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html},style:{padding:"0px"}})),r.a.createElement("br",null),r.a.createElement("br",null),null===t.allFile||0===t.allFile.edges.length?"":r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{imgSharp:t.allFile.edges,imgs:void 0===a.frontmatter.img?"":a.frontmatter.img})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),null===a.frontmatter.vid||0===a.frontmatter.vid.length?"":r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{vids:a.frontmatter.vid}),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("div",{style:{float:" left"}},r.a.createElement("b",null,"External Links"),null===a.frontmatter.url?"":a.frontmatter.url.map(function(e,t){return r.a.createElement(r.a.Fragment,null)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),null===a.frontmatter.refs||0===a.frontmatter.refs.length?"":r.a.createElement("span",null,r.a.createElement("p",null,"This page uses materials from Wikipedia available in the references. It is released under the  ",r.a.createElement("a",{href:"https://creativecommons.org/licenses/by-sa/3.0/"},"Creative Commons Attribution-Share-Alike License 3.0.")),r.a.createElement("b",null,"References"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{style:{float:" left",margin:"0rem"},id:"103"},null===a.frontmatter.refs?"":a.frontmatter.refs.map(function(e,t){return r.a.createElement("div",{style:{padding:" .5rem",margin:"0px"},key:t},r.a.createElement("span",{style:{align:"justify",color:"grey",margin:".5rem",padding:"0rem"}}," ",e.ref," "," ",0===e.url.length?"":r.a.createElement("a",{href:e.url},"Link")))})))))};var v="4040008099"},164:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(5),i=a.n(l),c=a(40),o=a.n(c);a.d(t,"a",function(){return o.a});a(166);var s=r.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&l(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(d,{data:t,query:a,render:n||l,staticQueryData:e})})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},166:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},167:function(e,t,a){"use strict";a.r(t);a(42);var n=a(0),r=a.n(n),l=a(5),i=a.n(l),c=a(64),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},170:function(e,t,a){"use strict";var n=a(171),r=a(0),l=a.n(r),i=a(5),c=a.n(i),o=a(164),s=a(41),d=a.n(s),m=a(8),u=a.n(m),p=a(165),g=a.n(p),f=a(175),E=a(176),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).w3Open=function(){var e=document.getElementById("mySidebar");console.log("mySidebar",e),"block"===e.style.display?e.style.display="none":e.style.display="block"},a.w3Close=function(){document.getElementById("mySidebar").style.display="none"},a.state={},a.w3Open=a.w3Open.bind(d()(a)),a.w3Close=a.w3Close.bind(d()(a)),a}return u()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:""+g.a.w3Top,desc:"Navbar (sit on top)"},l.a.createElement("div",{className:g.a.w3Bar+" "+g.a.w3PanRed+" "+g.a.w3Card,style:{paddingTop:"10px",paddingLeft:"1px"},id:"myNavbar"},l.a.createElement("div",{className:g.a.w3Left+" ",style:{paddingLeft:"20px",paddingBottom:"0px"}},this.props.logo.map(function(e){e.node;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{to:"/"},l.a.createElement(f.a,{icon:E.e,size:"2x",color:"#00843E"})))}),l.a.createElement("strong",null)," ",l.a.createElement("center",{className:g.a.w3Right+" ",style:{fontSize:"25px",textAlign:"center",color:"#00843E"}}," Pan-Africa")),l.a.createElement("div",{style:{fontSize:"18px",textAlign:"center"}}),l.a.createElement("div",{className:g.a.w3Right+" "+g.a.w3HideSmall,desc:"Right-sided navbar links"},l.a.createElement("div",{className:g.a.w3DropdownHover+" "+g.a.w3HideMedium+" "+g.a.w3HideSmall},l.a.createElement("button",{className:""+g.a.w3Button,title:"Notifications",style:{backgroundColor:"#e31c23",paddingRight:"150px"}},l.a.createElement(f.a,{icon:E.c,size:"2x",color:"#00843E"})," ",l.a.createElement("i",{className:"fa fa-caret-down"})),l.a.createElement("div",{className:g.a.w3DropdownContent+" "+g.a.w3Card4+" "+g.a.w3BarBlock},l.a.createElement(o.a,{to:"/Architecture/",className:g.a.w3BarItem+" "+g.a.w3Button},"Architecture    "),l.a.createElement(o.a,{to:"/Ruins/",className:g.a.w3BarItem+" "+g.a.w3Button},"Ruins        "),l.a.createElement(o.a,{to:"/Kingdoms/",className:g.a.w3BarItem+" "+g.a.w3Button},"Kingdoms      "),l.a.createElement(o.a,{to:"/Rock Art/",className:g.a.w3BarItem+" "+g.a.w3Button},"Rock Art    "),l.a.createElement(o.a,{to:"/Metal/",className:g.a.w3BarItem+" "+g.a.w3Button},"Metal-Working Cultures"))),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("a",{href:"#4",className:" "+g.a.w3Right+" "+g.a.w3HideLarge+" ",onClick:function(){return e.w3Open()},style:{paddingRight:"50px"}},l.a.createElement(f.a,{icon:E.b,size:"2x",color:"#00843E"})))),l.a.createElement("nav",{className:g.a.w3Sidebar+" "+g.a.w3BarBlock+" "+g.a.w3Black+" "+g.a.w3Card+" "+g.a.w3AnimateLeft+" "+g.a.w3HideLarge,style:{display:"none"},id:"mySidebar"},l.a.createElement("a",{href:"#f",onClick:function(){return e.w3Close()},className:g.a.w3BarItem+" "+g.a.w3Button+" "+g.a.w3Large+" "+g.a.w3Padding16},"Close ×"),l.a.createElement("div",{className:g.a.w3DropdownHover+" "},l.a.createElement("button",{className:""+g.a.w3Button,title:"Notifications"},"COLLECTIONS ",l.a.createElement("i",{className:"fa fa-caret-down"})),l.a.createElement("div",{className:g.a.w3DropdownContent+" "+g.a.w3Card4+" "+g.a.w3BarBlock},l.a.createElement(o.a,{to:"/Architecture/",className:g.a.w3BarItem+" "+g.a.w3Button},"Architecture"),l.a.createElement(o.a,{to:"/Ruins/",className:g.a.w3BarItem+" "+g.a.w3Button},"Ruins        "),l.a.createElement(o.a,{to:"/Kingdoms/",className:g.a.w3BarItem+" "+g.a.w3Button},"Kingdoms      "),l.a.createElement(o.a,{to:"/Rock Art/",className:g.a.w3BarItem+" "+g.a.w3Button},"Rock Art    "),l.a.createElement(o.a,{to:"/Metal/",className:g.a.w3BarItem+" "+g.a.w3Button},"Metallurgy  ")))),l.a.createElement("header",{className:g.a.w3Container+" "+g.a.w3PanRed+" "+g.a.w3Center,style:{padding:"50px 1px"}}))},t}(r.Component),h=function(e){var t=e.children;return l.a.createElement(o.b,{query:"2654620512",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{siteTitle:e.site.siteMetadata.title,logo:e.allFile.edges}),l.a.createElement("main",null,t))},data:n})};h.propTypes={children:c.a.node.isRequired};t.a=h},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}},allFile:{edges:[{node:{id:"494c882a-eb95-5852-b16d-9debc045fad1",relativePath:"logo/logo.png",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsSAAALEgHS3X78AAADIUlEQVQ4y22T62scVRjGn/dyLjM7uzvuzmxiaJJd0nST1NYm3Vo/tBGTqsUEYVsv0RD1g/hJvCBUqChYLAURFaziBynFC7aCIEgVbS20tLT1RtFK/XM8u7ONEXqYOXAuz/u857y/g/FOMtYp1VouHXVZ0yU1xf9bnOrITNyYihrT0ehsqdlJoqr0FgiYvD/d+nDe6WZzj2btA9m2tXzznspgDVBLWxbT1iP1Hcv1uaXa5sV0crnWvCfprYcNEfF7ZL9S/VTkmJqtkRm7r1IdsoVtdcSWh+wTMF+yfg4cB+0D+03W2n7se635legyEL7rwBlQnRnai8t9/wdE/2S+BFwE/ia8T4yymkK8YuQqcBb4GThP+IA46mdsDXvXky+CLxOd72+4ArwbQjNRkdh+1V+IzgE/GT3E6sra3lcNx57u1mefytt7K5Vt8QHWb5z9EQg2LxsTVFKII5GPiH5nXnNuScyK06FO+e691bncTtRM68Ha/snSIvCQNTeIrjDPSk/I68VIidrGmDAb8/OqR8FrwCngCOgZyNvhhoIV0TJzJ+y5lfKgIsXQRVxquknQKyqH4mjB+6dLpSe9XSByFTH984Nw+1YcY03kLZF3vD/p/bfOvRDHr7KmqZqYad1tY7Mx1zfZfMzB0ovE14gOi3zN/DHzh6onwvVSLznrOcmUZYM6vdPuOFifOVjfvZoP70zuAv/GdI55JYpet/YfplXmfHd5er66vVvftZq3dt3CqyduuiyzU6AkTHhaUP1C9TTRKWtOOv8Z8WuQ+kw8sjMZrlmvPD5fzSf8QG+Vj0GuMz3n3YSaVWOccEa0h9Amro77ZxPzGHgL+DTxJ6DpVBvbSwPxfOKuEl0IYKq8RFppmMqoKy4mgJgFE0+PW/OdNYHQv4A3AiSxDOq85PUSeoQFdH8Alu/wmmkIGv7icXaZz/TZDAhfA45aRaIDcVfkRt856G8Ch0XXAer1TEeMuVmQD/wBvBnSrakWhZsSOS7yPdFF5hMiLeb1Whb9eH/+gurZ8LZCFVRDRPkPMqKcaJTZMd+WH080IjJM1CCKNuD5L3tldZkIV5ahAAAAAElFTkSuQmCC",aspectRatio:1.0721649484536082,src:"/linkinghearts/static/9bb0ced716b7cd39166ced95bfd6217b/d95c4/logo.png",srcSet:"/linkinghearts/static/9bb0ced716b7cd39166ced95bfd6217b/e22c9/logo.png 75w,\n/linkinghearts/static/9bb0ced716b7cd39166ced95bfd6217b/d3809/logo.png 150w,\n/linkinghearts/static/9bb0ced716b7cd39166ced95bfd6217b/d95c4/logo.png 208w",sizes:"(max-width: 208px) 100vw, 208px"},original:{src:"/linkinghearts/static/logo-9bb0ced716b7cd39166ced95bfd6217b.png"}}}}]}}}},177:function(e,t,a){"use strict";var n=a(179),r=a(0),l=a.n(r),i=a(5),c=a.n(i),o=a(164),s=a(165),d=a.n(s),m=function(e){var t=e.children;return l.a.createElement(o.b,{query:"3759450279",render:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:""+d.a.w3Content,style:{maxWidth:"1600px",backgroundColor:"#e0eee0"}},l.a.createElement("div",{className:d.a.w3Row+" "+d.a.w3Padding+" "+d.a.w3Border},l.a.createElement("div",{className:d.a.w4Col+" "+d.a.l8+" "+d.a.s12,style:{padding:"0px",margin:"0px"}},l.a.createElement("main",null,t)),l.a.createElement("div",{className:d.a.w3Col+" "+d.a.l3}))),l.a.createElement("footer",{className:d.a.w3Container+" "+d.a.w3Black,style:{padding:"32px"}}))},data:n})};m.propTypes={children:c.a.node.isRequired},t.a=m},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},187:function(e,t,a){var n=a(12).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(11)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},188:function(e,t,a){"use strict";var n=a(9),r=a(189)(5),l=!0;"find"in[]&&Array(1).find(function(){l=!1}),n(n.P+n.F*l,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(67)("find")},189:function(e,t,a){var n=a(19),r=a(66),l=a(31),i=a(17),c=a(190);e.exports=function(e,t){var a=1==e,o=2==e,s=3==e,d=4==e,m=6==e,u=5==e||m,p=t||c;return function(t,c,g){for(var f,E,v=l(t),h=r(v),w=n(c,g,3),y=i(h.length),b=0,x=a?p(t,y):o?p(t,0):void 0;y>b;b++)if((u||b in h)&&(E=w(f=h[b],b,v),e))if(a)x[b]=E;else if(E)switch(e){case 3:return!0;case 5:return f;case 6:return b;case 2:x.push(f)}else if(d)return!1;return m?-1:s||d?d:x}}},190:function(e,t,a){var n=a(191);e.exports=function(e,t){return new(n(e))(t)}},191:function(e,t,a){var n=a(7),r=a(98),l=a(3)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),n(t)&&null===(t=t[l])&&(t=void 0)),void 0===t?Array:t}}}]);
//# sourceMappingURL=component---src-templates-article-slug-js-c167b060bfc27d80bc02.js.map