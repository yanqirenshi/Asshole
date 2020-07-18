(this.webpackJsonpasshole=this.webpackJsonpasshole||[]).push([[0],{236:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),o=a.n(r),i=(a(37),a(15)),s=a.n(i),c={root:{borderRadius:"5px",padding:"8px",background:"#fff",marginTop:"11px",marginLeft:"11px"},inner:{padding:"8px 16px",borderRadius:"5px",background:"rgb(250, 191, 20)"},label:{margin:"0px",color:"#fff"}};var m=function(e){return l.a.createElement("a",{href:e.source.url,style:{textDecoration:"none"}},l.a.createElement("div",{style:c.root},l.a.createElement("div",{style:c.inner},l.a.createElement("p",{style:c.label},e.source.label))))},u={root:{display:"flex",justifyContent:"center",flexWrap:"wrap",marginLeft:"88px",marginRight:"88px",marginTop:"11px"}};var p=function(e){return l.a.createElement("div",{style:u.root},e.source.map((function(e,t){return l.a.createElement(m,{key:t,source:e})})))},h={root:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},title:{jp:{fontFamily:"Sawarabi Mincho",color:"rgb(153,0,0)",fontWeight:"bold",fontSize:"33px",textShadow:"0px 0px 11px rgb(250, 191, 20)"},en:{fontFamily:"Sawarabi Mincho",color:"rgb(255,0,0)",fontWeight:"bold",fontSize:"111px",textShadow:"0px 0px 11px rgb(250, 191, 20)"}}};var d=function(){var e={first:[{label:"D3.Svg",url:"https://github.com/yanqirenshi/D3.Svg"},{label:"D3.Network",url:"https://github.com/yanqirenshi/D3.Network"},{label:"D3.Deployment",url:"https://github.com/yanqirenshi/D3.Deployment"},{label:"D3.ER",url:"https://github.com/yanqirenshi/D3.ER"},{label:"D3.TER",url:"https://github.com/yanqirenshi/D3.TER"},{label:"D3.Sitemap",url:"https://github.com/yanqirenshi/D3.Sitemap"},{label:"D3.Wireframe",url:"https://github.com/yanqirenshi/D3.Wireframe"}],second:[{label:"D3.Sketch",url:"https://github.com/yanqirenshi/D3.Sketch"},{label:"D3.Yabane",url:"https://github.com/yanqirenshi/D3.Yabane"}],third:[{label:"D3.Pad",url:"https://github.com/yanqirenshi/D3.Pad"},{label:"D3.Components",url:"https://github.com/yanqirenshi/D3.Components"},{label:"D3.Classes",url:"https://github.com/yanqirenshi/D3.Classes"}],ama:[{label:"D3.Pile",url:"https://github.com/yanqirenshi/D3.Pile"},{label:"D3.Bubble",url:"https://github.com/yanqirenshi/D3.Bubble"}]};return l.a.createElement("div",{style:h.root},l.a.createElement("div",{style:h.title},l.a.createElement("p",null,l.a.createElement("span",{style:h.title.jp},"\u304d\u3063\u3068\u4f55\u8005\u306b\u3082\u306a\u308c\u306a\u3044"),l.a.createElement("span",{style:h.title.en},"Asshole"),l.a.createElement("span",{style:h.title.jp},"\u305f\u3061\u306b\u544a\u3052\u308b"))),l.a.createElement("div",{style:{marginTop:"55px"}},l.a.createElement(p,{source:e.first}),l.a.createElement(p,{source:e.second}),l.a.createElement(p,{source:e.third}),l.a.createElement(p,{source:e.ama})))},f=a(238),y=a(237),E={root:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},g=["import React from 'react';","import D3Xyz from '../js/D3Xyz.js';","","const options = {","    svg: {","        selector: '#asshole-graph',","        w: 1111,","        h: 333,","    }","};","","function AssholeGraph (props) {","    const [d3xyz] = useState(new D3Xyz().init(options));","}","","export default AssholeGraph;"];var x=function(){return l.a.createElement("section",{className:"slide"},l.a.createElement("div",{style:E.root},l.a.createElement("h1",{className:"title is-1"},"Asshole.init()"),l.a.createElement("div",null,l.a.createElement(f.a,{language:"javascript",style:y.a},g.join("\n")))))},v={root:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},D=[" Appl               :    D3.*                    :  DOM","                    :                            :","   +----------+     :       +------------+       :      +-----+","   | Data     |---[make]---\x3e| graph Data |---\x3e[Draw]---\x3e| SVG |","   |==========|     :       |------------|       :      +-----+","   | _element |     :       | _core      |       :","   |----------|     :       |------------|       :","   +----------+     :       +------------+       :"];var b=function(){return l.a.createElement("section",{className:"slide"},l.a.createElement("div",{style:v.root},l.a.createElement("h1",null," Data Overview"),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("pre",null,D.join("\n"))))))},w={root:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"}};var j=function(){return l.a.createElement("div",{style:w.root},l.a.createElement(x,null),l.a.createElement(b,null))},S={root:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},z=["import React, { useState, useEffect } from 'react';","import D3Xyz from '../js/D3Xyz.js';","","function AssholeGraph (props) {","    const [d3xyz] = useState(new D3Xyz().init({}));","","    useEffect(() => {","        d3xyz.data(props.graph_data);","    });","}","","export default AssholeGraph;"];var R=function(){return l.a.createElement("section",{className:"slide"},l.a.createElement("div",{style:S.root},l.a.createElement("h1",{className:"title is-1"},"Asshole.data()"),l.a.createElement("div",null,l.a.createElement(f.a,{language:"javascript",style:y.a},z.join("\n")))))},k={root:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},C=[" Appl               :    D3.*                    :  DOM","                    :                            :","   +----------+     :       +------------+       :      +-----+","   | Data     |---[make]---\x3e| graph Data |---\x3e[Draw]---\x3e| SVG |","   |==========|     :       |------------|       :      +-----+","   | _element |     :       | _core      |       :","   |----------|     :       |------------|       :","   +----------+     :       +------------+       :"];var N=function(){return l.a.createElement("section",{className:"slide"},l.a.createElement("div",{style:k.root},l.a.createElement("h1",null," Data Overview"),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("pre",null,C.join("\n"))))))},q={root:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},title:{contents:{fontSize:"55px",marginBottom:"0px",fontWeight:"bold"}}};var A=function(){return l.a.createElement("div",{style:q.root},l.a.createElement(R,null),l.a.createElement(N,null))},I={root:{}},W=["import React, { useState, useEffect } from 'react';","import D3Xyz from '../js/D3Xyz.js';","","function AssholeGraph (props) {","    const [d3xyz] = useState(new D3Xyz().init({","        svg: {","            selector: '#asshole-graph',","            w: 1111, h: 333,","        }","    }));","","    useEffect(() => { d3xyz.data(props.graph_data); });","","    useEffect(() => {","        window.addEventListener('resize', () => {","            d3er.svgSize(document.getElementById('asshole-graph-container'));","        });","    }, []);","","    return (","        <div id='asshole-graph-container'>","          <svg id='asshole-graph'/>","        </div>","    );","}","","export default AssholeGraph;"];var X=function(){return l.a.createElement("div",{style:I.root},l.a.createElement(f.a,{language:"javascript",style:y.a},W.join("\n")))},_={root:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},title:{contents:{fontSize:"55px",marginBottom:"0px",fontWeight:"bold"}},react_code:{background:"#f3f3f3",padding:"22px 33px",borderRadius:"11px",fontSize:"14px",marginTop:"33px"}};var G=function(){return l.a.createElement("div",{style:_.root},l.a.createElement("div",null,l.a.createElement("p",{style:_.title.contents},"Usage")),l.a.createElement("div",null,l.a.createElement(X,null)))},B={root:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}};var O=function(){return l.a.createElement("section",{className:"slide"},l.a.createElement("div",{style:B.root},l.a.createElement("h1",{className:"title is-1"},"Asshole \u3068\u306f"),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("p",null,"\u4e0d\u53ef\u9006\u306a\u7269\u306e\u8c61\u5fb4\u3067\u3059\u3002"),l.a.createElement("p",null,"\u305d\u308c\u306f Engineering / Rverse engineering \u306b\u304a\u3051\u308b\u300c\u6575\u300d\u3067\u3042\u308b\u3068\u8003\u3048\u307e\u3059\u3002"))))},T={root:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}};var Y=function(){return l.a.createElement("div",{style:T.root},l.a.createElement(O,null))},M={root:{background:"#fce2c4"}};var H=function(){return l.a.createElement(s.a,{licenseKey:"YOUR_KEY_HERE",scrollingSpeed:1e3,scrollHorizontally:!0,scrollHorizontallyKey:"YOUR KEY HERE",render:function(e){e.state,e.fullpageApi;return l.a.createElement(s.a.Wrapper,null,l.a.createElement("div",{className:"section",style:M.root},l.a.createElement(d,null)),l.a.createElement("div",{className:"section",style:M.root},l.a.createElement(Y,null)),l.a.createElement("div",{className:"section",style:M.root},l.a.createElement(j,null)),l.a.createElement("div",{className:"section",style:M.root},l.a.createElement(A,null)),l.a.createElement("div",{className:"section",style:M.root},l.a.createElement(G,null)))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,a){e.exports=a(236)},37:function(e,t,a){}},[[32,1,2]]]);
//# sourceMappingURL=main.015f169a.chunk.js.map