(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{157:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return u});t(169);var n=t(0),r=t.n(n),l=t(175),i=t(178),d=t(165),o=t(166),c=t.n(o),s=t(170),m=t.n(s);a.default=function(e){var a=e.data;return r.a.createElement(l.a,null,r.a.createElement(i.a,null,r.a.createElement("div",{className:c.a.gridContainer+" "+c.a.w3rowpadding,style:{padding:"0px",margin:"0px"}},a.allMarkdownRemark.edges.map(function(e){var t=e.node,n=e.slug,l=void 0===n?t.fields.slug:n,i=e.title,o=void 0===i?t.frontmatter.title:i;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:c.a.w3Third+" "+c.a.w3Container+"  ",key:t.id,style:{padding:"2px",marginBottom:"1px",border:"5px solid #e0eee0",backgroundColor:"#e0eee0"}},r.a.createElement("div",{className:" "+c.a.gridItem,style:{backgroundColor:"#e0eee0"}},r.a.createElement("div",{className:" "+c.a.w3White,style:{width:"197px",height:"199px",padding:"0px",margin:"0px",backgroundColor:"#e0eee0",border:"0px solid black"}},r.a.createElement(d.a,{to:t.fields.slug},null==a.allFile.edges||0===a.allFile.edges.length?"":a.allFile.edges.map(function(e){var a=e.node;return-1===a.relativePath.indexOf(l)?"":r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{fixed:a.childImageSharp.fixed}))}))),r.a.createElement("div",{className:c.a.w3Container+"  ",style:{width:"200px",padding:0,margin:0,backgroundColor:"#00843e",border:"1px solid black"}},r.a.createElement(d.a,{to:t.fields.slug},r.a.createElement("p",{style:{padding:5,margin:0}},r.a.createElement("b",null,o)))))))}))))};var u="1584588589"},165:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),l=t(5),i=t.n(l),d=t(40),o=t.n(d);t.d(a,"a",function(){return o.a});t(167);var c=r.a.createContext({});function s(e){var a=e.staticQueryData,t=e.data,n=e.query,l=e.render,i=t?t.data:a[n]&&a[n].data;return r.a.createElement(r.a.Fragment,null,i&&l(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var a=e.data,t=e.query,n=e.render,l=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(s,{data:a,query:t,render:n||l,staticQueryData:e})})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},167:function(e,a,t){var n;e.exports=(n=t(168))&&n.default||n},168:function(e,a,t){"use strict";t.r(a);t(41);var n=t(0),r=t.n(n),l=t(5),i=t.n(l),d=t(64),o=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(d.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=o},169:function(e,a,t){"use strict";t(173)("fixed",function(e){return function(){return e(this,"tt","","")}})},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}},allFile:{edges:[{node:{id:"494c882a-eb95-5852-b16d-9debc045fad1",relativePath:"logo/logo.png",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAABJ0AAASdAHeZh94AAAE8klEQVQ4y0VUW2wUZRgdoEgphe6l7U47bXdmdmavZS8FAxTFtlilLSCUAoUWiqQpFmO5GSEBNCZcHogJCgohFm8IxUoh2gJv4JMYQ2I0ERLpZbcXukUKatAXk+P5d1Z9+DL//pez5/u+cz4p7tAwOkfFrzNVjGermMhSMcn1iFODOEu4dCQURqEVw4w4Y0Tx4H6+hgd2N5JO3pd5t9iANDpbRV+JinVtQdTuCmBlRxAHVvlxp8iDMQLGZYJwLUCHiwhabAH9ZHeh25RxdEkRTswvxE1Zxr3sAgJmurG12Q/pahmkL6KQvmT0xLDwQCnuFpBJQZqhYjG7n6vjmq6g9C0vpnwagXQhBunzKGafieCV5W5IA7PdeH5PKAU2/eMIMj6JpL5SdwwfVvowSZaDdjK1qRjg+tHUYqxuZWrX5mGqAPwsYn1JYv7+IKR7OSqe2WsBTiWYdM5imXMqghshE/cJMuSw6jnAuj5gRkerCXg+ajH8F5DvK3f6IMUzS7BmWwDSZUE9gkX7wzhaF0Bf1MAjp46kLOrGdEs8GOd6IlekreFqqYm1r5JIVxSZZyMpEvXtZDhChpdMDa53uXk1hpbWEDBFxR1Vx425HnwTIkCeB0mbju+8Om6Gddw2dSBDxcmlfouIqDuZXlzgJUOmkch2o0/V8OZyP25pOt6u8GD9Wj9Wrvdj8cs+tFZ70VJp4NkNBuo2eVHXaGB/hY47bNjupiDKD4bxPsHH83RICVtab9QiJDd2LtNRU+9FR5mJF/YZOL9GQXWTH0+3+dG9vAg1hwxsfNGHmk0+bN5g4q9MatCu4wGzSBQIQKYcZ/Szk7/N0dDAf19f48OWKhO1jSZ2LtEQ3h2AujeA9iodKxsMrCBYB1lHtnsxzrdDfDsoSDFSDEUM8WCMrrjt1rDqJQ86Fpo4HjLwXtCD634DfR4d7wQ0HGNdO5aaqNho4gprnySrIaFVUTqnAMwRGuM/iBBdLPRgiAI+V27itWVeHK4w8XiGhicZOo5zr63GQGe5gV8UDQ9l3k2LPkE3CUdJ8RRDepm1mCD4IK01xoOvbAraZRfmr1LRtMKHljofYg0aWrl3JUdBkncGacUUIN/EhS0Z0ihTTbCo5xZ60RP14onLg1MuBeV2O3Y589Eyw4FQpQK5WsG6TAcabbkI2m04lleIPxQD40xzjLpMipRFU/o5NWr2WAIVLvmglqJ2FKE+34kDThmL7A7kTc+CY1oW5tlsaOfvsuxZOJ1fiAkC7tjgx4K9QZxYxOFBctLpCl9KmCn/9kTp61L8afPgxwIVX8slOJOvoMGZhxZGJ9e9riLcyivG31karod9FhGKW9iwK8ymtG2m2i/FLMALUQSPhFG1by56Fvvxu2zgMWdcP+s0wJjkepJN+8FroLkthOdo06fOpocJMRppAmlLaxrwI8vkU2ghqS+GqtdLU6NqgIUeVqwO9tPTD+nv5m30bC8td9EqkzXGoggcKYX0xmqi9pZZhyLETOyK4cgSFpzFjhd7/pPFEAeEGBj1O/jwchQzOyOYxgmVIRhy+piH2YtvZRXbG7yIHgwhcGguIvweopfvOdwYToMNp0NII0nx984zkHsyzMzSA7k7msqqkhNfGqE4R2ZxuuS48TNbf9fmxigtlBr7Ior/D7EXZx0n+OZ7v4k9zUE0bQ+gbStt2RTATTrrH9BNMXmvEgTyAAAAAElFTkSuQmCC",aspectRatio:.9593220338983051,src:"/linkinghearts/static/9024a0269fd87c2ddde7855fdae8059a/50c54/logo.png",srcSet:"/linkinghearts/static/9024a0269fd87c2ddde7855fdae8059a/e22c9/logo.png 75w,\n/linkinghearts/static/9024a0269fd87c2ddde7855fdae8059a/d3809/logo.png 150w,\n/linkinghearts/static/9024a0269fd87c2ddde7855fdae8059a/50c54/logo.png 283w",sizes:"(max-width: 283px) 100vw, 283px"},fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAABJ0AAASdAHeZh94AAAE90lEQVQ4y1VVa2wUZRQdXqXaQrvd7T66r9mZ2Z19tPsAoSCQ0vIoS8EWtqaAAi1UCRBBoZISQjUaEhIIAY0kGgQEAQtSIEJQQjREE2JM1MSQEBDa3T6gpSWQ6A/9czzfTNH442ZvZr7vzLn3nnNXypYE0D9ZxqPnZDwslDFUIGOEeZ81APEu51SQc49GmRlZRp9bxYNS3rP4MWjjeRff+TRI/ZNkXPbLyGyIIr0tgqVbouioD+O2R0U/AbME7GVuAHoYXhPoZ6sDpyIuvF/tweFUGX6wO3GvsIyA+X40rwlDujoF0tkkpC8ZXSnM2RnDXQeZlP3HMEsWD/mRzqgb8l7eOcmzZ1KQTiVh/SiObfM8kO5N9qOmrdwAm3A8gfGfmSF1pnB6lo4RAnRbyLRYRjfz4XFezNoegnRlKsaeSGDMSQZ/pfMpzN/Kj/xeJGNWuwk4VgB9brJ0fJDATV1DP3vZU2L28z7zR6yovT5IZqPnnwF+kcSyVj7P5vvQ+HoE0gVSP53AnPY4Di2I4LuohiclCoYcom/so0818mGrgoFSBV/HgqgVlRFo4lECnkti40ri9JHhBVWG+0CcZaSwcU0MGCvjF03BNwkN1+McglVFn0XBjaiCaykVPwUVYJyMdxoIcIlEupKwHI7jRlgwZBm9hX5c88rYN1/Hj34FbQs1NGXCWLwyjNktITQvDCFTq6FqlYb0Wh11TRo6qhTc4tS3vhrD4u0V6JoWwiCZS7niUb1RixjjR+tLKjJLQ9gwPYS6XSq66tyY2RrBvNU6zmc8qHkviLULdFSv0/HGsiD+zpPxoCiAIbtqSEzKseQs4x4n+XRyAI38+oraEFrmBdGwTMOGuQrK26LQ3wqjlXn6ZQI2hrCiQUftag2PqeP7JNTD+zmGwVBED0H72fTfvAE0LVGxeWYQhziY47qKmwEV3/oUfBwMYH9cw/p0EPUZDTd59kGZySxnCxhBhkJj1JoIIVxaSoj54vQgNi0OYff8IEbyhFwU7GQvN9WquPSChgEHyyRYzzNb0k3CUVIPgXrJ7vFEGcMsOUtrZfniWFEZ1tntmFHnx/LlOpY06qhc5MN6Syk6i90Y4LluDiXrNq2Z9ZjWlAYIdseu4CAbffRFHX86Ney1u1BlsWAH/dqcXwJttgtqpRMNeRa0WEshFxXhE4cbf7jod5bZbQ9gUAyWFUq3/SoqOyjQc9RTZxL76yO4bvFgld2Gt0scmEbg4vHPwzahAJWWYmwsLsGMSYW4avfiTkAzlkn43Rg+nEnf057SQWpPOk+1H0sYv+k3y/HEpuGuK4AbLj/OObxosdnRXurEJebfO324W+rHXwUKjsyNGKIWPs7/NI7LIQK2rg0bD8ZzMUink1D3xVG+J44T1WE8daoY8WpGf/rZp0fMH7PMK1ODmL2rArG9CYwTy0TcZYWvNdEpza0mYB4ZCrMbRqcF01tiGBILwav8uwu7mQ/RDVU72aKv2KIzo8vkpEkmydKljjRX0cWU2cOzJv0JNPuRJCXEYYmpG4uVDHuYD9sULNxRwWVitkmsMMFSAMZ3RyH9yn7sqdGwaHME1dtjSG8K41iC8rHKxnYW7HpHQ5Q+SBFfnaLBd6DC2DAGCRHcVutfIbk+MXraJ1vgR5Y6zDEX6ynn0Qj4/+gV/eT/xhDv3FKD2NMQRtuqMDoyOvYtCOG2rOEfbl0yNCBmmP4AAAAASUVORK5CYII=",width:55,height:55,src:"/linkinghearts/static/9024a0269fd87c2ddde7855fdae8059a/9b54c/logo.png",srcSet:"/linkinghearts/static/9024a0269fd87c2ddde7855fdae8059a/9b54c/logo.png 1x,\n/linkinghearts/static/9024a0269fd87c2ddde7855fdae8059a/81c10/logo.png 1.5x,\n/linkinghearts/static/9024a0269fd87c2ddde7855fdae8059a/46a49/logo.png 2x"},original:{src:"/linkinghearts/static/logo-9024a0269fd87c2ddde7855fdae8059a.png"}}}}]}}}},173:function(e,a,t){var n=t(9),r=t(12),l=t(25),i=/"/g,d=function(e,a,t,n){var r=String(l(e)),d="<"+a;return""!==t&&(d+=" "+t+'="'+String(n).replace(i,"&quot;")+'"'),d+">"+r+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(d),n(n.P+n.F*r(function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",t)}},175:function(e,a,t){"use strict";var n=t(172),r=t(0),l=t.n(r),i=t(5),d=t.n(i),o=t(165),c=(t(169),t(42)),s=t.n(c),m=t(8),u=t.n(m),g=t(166),p=t.n(g),w=t(170),E=t.n(w),f=t(176),A=t(177),h=function(e){function a(a){var t;return(t=e.call(this,a)||this).w3Open=function(){var e=document.getElementById("mySidebar");console.log("mySidebar",e),"block"===e.style.display?e.style.display="none":e.style.display="block"},t.w3Close=function(){document.getElementById("mySidebar").style.display="none"},t.state={},t.w3Open=t.w3Open.bind(s()(t)),t.w3Close=t.w3Close.bind(s()(t)),t}return u()(a,e),a.prototype.render=function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:""+p.a.w3Top,style:{padding:"0px"}},l.a.createElement("div",{className:p.a.w3Bar+" "+p.a.w3PanRed+" "+p.a.w3Card,style:{paddingTop:"0px",paddingLeft:"1px"},id:"myNavbar"},this.props.logo.map(function(e){var a=e.node;return l.a.createElement("div",{className:p.a.w3Left+" ",style:{paddingLeft:"20px",paddingBottom:"1px",paddingTop:"0px",margin:"0px"}},l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{to:"/",key:a.id},l.a.createElement(E.a,{fixed:a.childImageSharp.fixed}),l.a.createElement("center",{className:p.a.w3Right+" ",style:{fontSize:"20px",textAlign:"center",color:"#00843E",paddingTop:"10px",paddingBottom:"0px"}}," Pan-Africa"))))}),l.a.createElement("div",{style:{fontSize:"18px",textAlign:"center"}}),l.a.createElement("div",{className:p.a.w3Right+" "+p.a.w3HideSmall,desc:"Right-sided navbar links"},l.a.createElement("div",{className:p.a.w3DropdownHover+" "+p.a.w3HideMedium+" "+p.a.w3HideSmall},l.a.createElement("button",{className:""+p.a.w3Button,title:"Notifications",style:{backgroundColor:"#e31c23",paddingRight:"150px"}},l.a.createElement(f.a,{icon:A.c,size:"2x",color:"#00843E"})," ",l.a.createElement("i",{className:"fa fa-caret-down"})),l.a.createElement("div",{className:p.a.w3DropdownContent+" "+p.a.w3Card4+" "+p.a.w3BarBlock},l.a.createElement(o.a,{to:"/Architecture/",className:p.a.w3BarItem+" "+p.a.w3Button},"Architecture    "),l.a.createElement(o.a,{to:"/Ruins/",className:p.a.w3BarItem+" "+p.a.w3Button},"Ruins        "),l.a.createElement(o.a,{to:"/Kingdoms/",className:p.a.w3BarItem+" "+p.a.w3Button},"Kingdoms      "),l.a.createElement(o.a,{to:"/Rock Art/",className:p.a.w3BarItem+" "+p.a.w3Button},"Rock Art    "),l.a.createElement(o.a,{to:"/Metal/",className:p.a.w3BarItem+" "+p.a.w3Button},"Metal-Working Cultures"))),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("a",{href:"#4",className:" "+p.a.w3Right+" "+p.a.w3HideLarge+" ",onClick:function(){return e.w3Open()},style:{paddingRight:"50px"}},l.a.createElement(f.a,{icon:A.b,size:"2x",color:"#00843E"})))),l.a.createElement("nav",{className:p.a.w3Sidebar+" "+p.a.w3BarBlock+" "+p.a.w3Black+" "+p.a.w3Card+" "+p.a.w3AnimateLeft+" "+p.a.w3HideLarge,style:{display:"none"},id:"mySidebar"},l.a.createElement("a",{href:"#f",onClick:function(){return e.w3Close()},className:p.a.w3BarItem+" "+p.a.w3Button+" "+p.a.w3Large+" "+p.a.w3Padding16},"Close ×"),l.a.createElement("div",{className:p.a.w3DropdownHover+" "},l.a.createElement("button",{className:""+p.a.w3Button,title:"Notifications"},"COLLECTIONS ",l.a.createElement("i",{className:"fa fa-caret-down"})),l.a.createElement("div",{className:p.a.w3DropdownContent+" "+p.a.w3Card4+" "+p.a.w3BarBlock},l.a.createElement(o.a,{to:"/Architecture/",className:p.a.w3BarItem+" "+p.a.w3Button},"Architecture"),l.a.createElement(o.a,{to:"/Ruins/",className:p.a.w3BarItem+" "+p.a.w3Button},"Ruins        "),l.a.createElement(o.a,{to:"/Kingdoms/",className:p.a.w3BarItem+" "+p.a.w3Button},"Kingdoms      "),l.a.createElement(o.a,{to:"/Rock Art/",className:p.a.w3BarItem+" "+p.a.w3Button},"Rock Art    "),l.a.createElement(o.a,{to:"/Metal/",className:p.a.w3BarItem+" "+p.a.w3Button},"Metallurgy  ")))),l.a.createElement("header",{className:p.a.w3Container+" "+p.a.w3PanRed+" "+p.a.w3Center,style:{padding:"50px 1px"}}))},a}(r.Component),v=function(e){var a=e.children;return l.a.createElement(o.b,{query:"1915594063",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,{siteTitle:e.site.siteMetadata.title,logo:e.allFile.edges}),l.a.createElement("main",null,a))},data:n})};v.propTypes={children:d.a.node.isRequired};a.a=v},178:function(e,a,t){"use strict";var n=t(179),r=t(0),l=t.n(r),i=t(5),d=t.n(i),o=t(165),c=t(166),s=t.n(c),m=function(e){var a=e.children;return l.a.createElement(o.b,{query:"3759450279",render:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:""+s.a.w3Content,style:{maxWidth:"1600px",backgroundColor:"#e0eee0"}},l.a.createElement("div",{className:s.a.w3Row+" "+s.a.w3Padding+" "+s.a.w3Border},l.a.createElement("div",{className:s.a.w4Col+" "+s.a.l8+" "+s.a.s12,style:{padding:"0px",margin:"0px"}},l.a.createElement("main",null,a)),l.a.createElement("div",{className:s.a.w3Col+" "+s.a.l3}))),l.a.createElement("footer",{className:s.a.w3Container+" "+s.a.w3Black,style:{padding:"32px"}}))},data:n})};m.propTypes={children:d.a.node.isRequired},a.a=m},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}}}]);
//# sourceMappingURL=component---src-templates-article-types-js-46558d9555774de35a62.js.map