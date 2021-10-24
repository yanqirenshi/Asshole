import React from 'react';

import Asshole from './libs/index.js';
import Rectum from './Rectum.js';

const rectum = new Rectum();

const style = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    graph_area: {
        width: 1000 + (22*2),
        height: 800 + (22*2),
        background: '#eee',
        padding: 22,
        borderRadius: 5,
    },
};

export default function App() {
    return (
        <div style={style}>
          <div style={style.graph_area}>
            <Asshole id="asshole-graph"
                     rectum={rectum}
                     data={graph_data}/>
          </div>
        </div>
    );
}

const graph_data = [];
