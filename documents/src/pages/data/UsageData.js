import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const style = {
    root: {
        fontSize: '16px',
    },
};

const data = [
    "import React, { useState, useEffect } from 'react';" ,
    "import D3Xyz from '../js/D3Xyz.js';" ,
    "" ,
    "function AssholeGraph (props) {" ,
    "    const [d3xyz] = useState(new D3Xyz().init({}));" ,
    "" ,
    "    useEffect(() => {" ,
    "        d3xyz.data(props.graph_data);" ,
    "    });" ,
    "}" ,
    "" ,
    "export default AssholeGraph;" ,
];

function UsageData () {
    return (
        <div style={style.root}>
          <SyntaxHighlighter language="javascript" style={dark}>
            {data.join('\n')}
          </SyntaxHighlighter>
        </div>
    );
}

export default UsageData;
