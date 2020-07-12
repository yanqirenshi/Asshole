import React from 'react';

const style = {
    root: {
    },
};

const data = [
    " Appl               :    D3.*                    :  DOM",
    "                    :                            :",
    "   +----------+     :       +------------+       :      +-----+",
    "   | Data     |---[make]--->| graph Data |--->[Draw]--->| SVG |",
    "   |==========|     :       |------------|       :      +-----+",
    "   | _element |     :       | _core      |       :",
    "   |----------|     :       |------------|       :",
    "   +----------+     :       +------------+       :",
];

function DataOverview () {
    return (
        <div style={style.root}>
          <p><pre>{data.join('\n')}</pre></p>
        </div>
    );
}

export default DataOverview;
