import React from 'react';

import DataOverview from './data/DataOverview';

const style = {
    root: {
        width: '100%',
        // height: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        contents: {
            fontSize: '55px',
            marginBottom: '0px',
            fontWeight: 'bold',
        }
    },
    overview: {
        padding: '33px',
        background: '#f3f3f3',
        borderRadius: '11px',
        fontSize: '22px',
        marginTop: '33px',
    }
};

function PageData () {
    return (
        <div style={style.root}>
          <div>
            <p style={style.title.contents}>Data</p>
          </div>

          <div style={style.overview}>
            <DataOverview />
          </div>
        </div>
    );
}

export default PageData;
