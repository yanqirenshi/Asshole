import React, { useState } from 'react';

import Box from '@mui/material/Box';

import Tabs from './Tabs.js';
import Tab1 from './Tab1.js';
import Tab2 from './Tab2.js';

const style = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
};

export default function App() {
    const [tabs, setTabs] = useState({
        selected: 'test1',
        list: [
            { code:'test1', label: 'Test1' },
            { code:'test2', label: 'Test2' },
        ],
    });

    return (
        <Box sx={style}>

          <Box sx={{mb:2}}>
            <Tabs tabs={tabs}
                  onChange={(new_tabs)=>setTabs(new_tabs)}/>
          </Box>

          {'test1'===tabs.selected && <Tab1/>}
          {'test2'===tabs.selected && <Tab2/>}
        </Box>
    );
}
