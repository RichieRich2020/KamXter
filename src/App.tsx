import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidbar from './components/Sidbar';
import Rightbar from './components/Rightbar';
import Stack from '@mui/material/Stack';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import SideDrawer from './components/Drawer';
import Reward from './components/Reward';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import { ChakraProvider } from '@chakra-ui/react';
function App() {
  // Optional: Create a custom theme if you need custom breakpoints
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 860,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  return (
    <div>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Stack direction='row' flexWrap='wrap' sx={{ overflow: 'hidden' }}>
            <SideDrawer />

            <Feed />
            <Rightbar />
          </Stack>
        </ThemeProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
