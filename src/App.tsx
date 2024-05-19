import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidbar from './components/Sidbar';
import Rightbar from './components/Rightbar';
import Stack from '@mui/material/Stack';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import SideDrawer from './components/Drawer';

function App() {
  return (
    <div>
      <Navbar />
      <Stack direction='row' flexWrap='wrap'>
        <SideDrawer />

        <Rightbar />
      </Stack>
    </div>
  );
}

export default App;
