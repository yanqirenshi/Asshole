import React from 'react';

import PageHome from './pages/PageHome';
import PageInit from './pages/PageInit';
import PageData from './pages/PageData';
import PageUsage from './pages/PageUsage';

const style = {
    root: {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        background: '#fce2c4',
        overflow: 'auto',
    }
};

function App() {
  return (
      <div style={style.root}>
        <PageHome />
        <PageInit />
        <PageData />
        <PageUsage />
      </div>
  );
}

export default App;
