import React, { useState, useEffect } from 'react';

import Asshole from './libs/index.js';
import D3Template, { Rectum } from './template/index.js';

const style = {
    width: '100vw',
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

export default function Tab1() {
    const [data, setData] = useState([]);
    const [rectum] = useState(new Rectum({
        transform:  {
            k: 1.0,
            x: 0.0,
            y: 0.0,
        },
        svg: {
            style: {
                background: '#f8ff8f',
                backgroundImage: 'url(https://yanqirenshi.github.io/Mandara/assets/images/background/IMG_1519.JPG)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            },
        },
    }));

    useEffect(()=> {
        rectum.data(data);
    }, [data]);

    return (
        <div style={style}>
          <div style={style.graph_area}>
            <Asshole id="asshole-graph" rectum={rectum}/>
          </div>
        </div>
    );
}
