import React from 'react';

import LibItems from './home/LibItems';

const style = {
    root: {
        width: '100%',
        // height: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        jp: {
            fontFamily: "Sawarabi Mincho",
            color: "rgb(153,0,0)",
            fontWeight: 'bold',
            fontSize: '33px',
            textShadow: '0px 0px 11px rgb(250, 191, 20)',
        },
        en: {
            fontFamily: "Sawarabi Mincho",
            color: "rgb(255,0,0)",
            fontWeight: 'bold',
            fontSize: '88px',
            textShadow: '0px 0px 11px rgb(250, 191, 20)',
        },
    }
};

function PageHome () {
    let items = {
        // 一軍
        first: [
            { label: 'D3.Svg',        url: 'https://github.com/yanqirenshi/D3.Svg' },
            { label: 'D3.Network',    url: 'https://github.com/yanqirenshi/D3.Network' },
            { label: 'D3.Deployment', url: 'https://github.com/yanqirenshi/D3.Deployment' },
            { label: 'D3.ER',         url: 'https://github.com/yanqirenshi/D3.ER' },
            { label: 'D3.TER',        url: 'https://github.com/yanqirenshi/D3.TER' },
            { label: 'D3.Sitemap',    url: 'https://github.com/yanqirenshi/D3.Sitemap' },
            { label: 'D3.Wireframe',  url: 'https://github.com/yanqirenshi/D3.Wireframe' },
        ],
        // 二軍
        second: [
            { label: 'D3.Sketch',     url: 'https://github.com/yanqirenshi/D3.Sketch' },
            { label: 'D3.Yabane',     url: 'https://github.com/yanqirenshi/D3.Yabane' },
        ],
        // 三軍
        third: [
            { label: 'D3.Pad',        url: 'https://github.com/yanqirenshi/D3.Pad' },
            { label: 'D3.Components', url: 'https://github.com/yanqirenshi/D3.Components' },
            { label: 'D3.Classes',    url: 'https://github.com/yanqirenshi/D3.Classes' },
        ],
        // アマ
        ama: [
            { label: 'D3.Pile',       url: 'https://github.com/yanqirenshi/D3.Pile' },
            { label: 'D3.Bubble',     url: 'https://github.com/yanqirenshi/D3.Bubble' },
        ],
    };

    return (
        <div style={style.root}>
          <div style={style.title}>
            <p>
              <span style={style.title.jp}>きっと何者にもなれない</span>
              <span style={style.title.en}>Asshole</span>
              <span style={style.title.jp}>たちに告げる。</span>
            </p>
          </div>

          <div>
            <LibItems source={items.first}/>
            <LibItems source={items.second}/>
            <LibItems source={items.third}/>
            <LibItems source={items.ama}/>
          </div>
        </div>
    );
}

export default PageHome;