import React, { useState, useEffect } from 'react';

import Asshole from './libs/index.js';
import Rectum from './Rectum.js';

const rectum = new Rectum({
    transform:  {
        k: 1.0,
        x: 0.0,
        y: 0.0,
    },
});

const style = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    graph_area: {
        width:  800 + (22*2),
        height: 600 + (22*2),
        background: '#eee',
        padding: 22,
        borderRadius: 5,
    },
};

export default function App() {
    const [data, setData] = useState([]);

    useEffect(()=> rectum.data(data), [data]);

    return (
        <div style={style}>
          <div style={style.graph_area}>
            <Asshole id="asshole-graph" rectum={rectum}/>
          </div>
        </div>
    );
}
