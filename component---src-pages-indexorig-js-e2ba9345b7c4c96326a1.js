(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{164:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(165),c=a(176),s=a(177),o=a(174),l=a(200),d=a(170),u=a.n(d),p=function(){return r.a.createElement(i.b,{query:"2011440971",render:function(t){return r.a.createElement(u.a,{fluid:t.placeholderImage.childImageSharp.fluid})},data:l})},g=a(180);e.default=function(){return r.a.createElement(o.a,null,r.a.createElement(g.a,{title:"Home"}),r.a.createElement(c.a,{icon:s.a}),r.a.createElement(c.a,{icon:s.d}),r.a.createElement("h1",null,"Hi people"),r.a.createElement("p",null,"Welcome to your new Gatsby site."),r.a.createElement("p",null,"Now go build something great."),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},r.a.createElement(p,null)),r.a.createElement(i.a,{to:"/page-2/"},"Go to page 2"))}},165:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(0),r=a.n(n),i=a(5),c=a.n(i),s=a(40),o=a.n(s);a.d(e,"a",function(){return o.a});a(167);var l=r.a.createContext({});function d(t){var e=t.staticQueryData,a=t.data,n=t.query,i=t.render,c=a?a.data:e[n]&&e[n].data;return r.a.createElement(r.a.Fragment,null,c&&i(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(t){var e=t.data,a=t.query,n=t.render,i=t.children;return r.a.createElement(l.Consumer,null,function(t){return r.a.createElement(d,{data:e,query:a,render:n||i,staticQueryData:t})})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},167:function(t,e,a){var n;t.exports=(n=a(168))&&n.default||n},168:function(t,e,a){"use strict";a.r(e);a(41);var n=a(0),r=a.n(n),i=a(5),c=a.n(i),s=a(64),o=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=o},171:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},174:function(t,e,a){"use strict";var n=a(171),r=a(0),i=a.n(r),c=a(5),s=a.n(c),o=a(165),l=function(t){var e=t.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};l.propTypes={siteTitle:s.a.string},l.defaultProps={siteTitle:""};var d=l,u=(a(182),function(t){var e=t.children;return i.a.createElement(o.b,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});u.propTypes={children:s.a.node.isRequired};e.a=u},180:function(t,e,a){"use strict";var n=a(181),r=a(0),i=a.n(r),c=a(5),s=a.n(c),o=a(183),l=a.n(o);function d(t){var e=t.description,a=t.lang,r=t.meta,c=t.title,s=n.data.site,o=e||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(r)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},e.a=d},181:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},200:function(t){t.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/linkinghearts/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/linkinghearts/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/linkinghearts/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/linkinghearts/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/linkinghearts/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/linkinghearts/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/linkinghearts/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-indexorig-js-e2ba9345b7c4c96326a1.js.map