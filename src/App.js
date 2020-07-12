import React from 'react';

import PageHome from './pages/PageHome';

const style = {
    root: {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        background: '#fce2c4',
    }
};

function App() {
  return (
      <div style={style.root}>
        <PageHome />
      </div>
  );
}

export default App;
