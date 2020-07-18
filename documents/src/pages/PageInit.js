import React from 'react';

import UsageInit from './init/UsageInit';

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

function PageInit () {
    return (
        <div style={style.root}>
          <div>
            <p style={style.title.contents}>Init</p>
          </div>

          <div>
            <UsageInit />
          </div>
        </div>
    );
}

export default PageInit;
