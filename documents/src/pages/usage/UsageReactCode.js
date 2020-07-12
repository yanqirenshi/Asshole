import React from 'react';

const style = {
    root: {
    },
};

const data = [
    "import React, { useState, useEffect } from 'react';" ,
    "import D3Xyz from '../js/D3Xyz.js';" ,
    "" ,
    "const options = {" ,
    "    svg: {" ,
    "        selector: '#asshole-graph'," ,
    "        w: 1111," ,
    "        h: 333," ,
    "    }" ,
    "};" ,
    "" ,
    "const resizeSvg = (d3er) => {" ,
    "    const container = document.getElementById('asshole-graph-container');" ,
    "" ,
    "    d3er.svgSize(container.clientWidth,container.clientHeight);" ,
    "};" ,
    "" ,
    "function AssholeGraph (props) {" ,
    "    const [d3xyz] = useState(new D3Xyz().init(options));" ,
    "" ,
    "    useEffect(() => {" ,
    "        resizeSvg(d3xyz);" ,
    "" ,
    "        d3xyz.data(props.graph_data);" ,
    "    });" ,
    "" ,
    "    useEffect(() => {" ,
    "        window.addEventListener('resize', () => {" ,
    "            resizeSvg(d3xyz);" ,
    "        });" ,
    "    }, []);" ,
    "" ,
    "    return (" ,
    "        <div id='asshole-graph-container'>" ,
    "          <svg id='asshole-graph'/>" ,
    "        </div>" ,
    "    );" ,
    "}" ,
    "" ,
    "export default AssholeGraph;" ,
];

function UsageReactCode () {
    return (
        <div style={style.root}>
          <p><pre>{data.join('\n')}</pre></p>
        </div>
    );
}

export default UsageReactCode;
