import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { OtherItems, ProfileItems, ShortcutItems } from './MenuItems';
import { Typography } from '@mui/material';
import { border } from '@mui/system';
const LeftSidbar = () => {
  const SideMenu = ({ item, index }: any) => {
    return (
      <ListItem key={index} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ListItemIcon>{item.iconName}</ListItemIcon>
          </ListItemIcon>
          <ListItemText primary={item.menuName} />
        </ListItemButton>
      </ListItem>
    );
  };
  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
          // boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',

          width: '20%',
          height: '100vh',
          position: 'fixed', // Fixed position
          top: 66, // Start from the top
          left: 0, // Align to the left side of the screen
          overflowY: 'auto', // Enable scrolling if content overflows
        }}
        role='presentation'>
        <List>
          {ProfileItems.map((item: any, index: any) => (
            <SideMenu item={item} index={index} />
          ))}
        </List>
        <Divider />
        <List>
          <Typography
            sx={{
              ml: 3,
              color: '#595959',
            }}>
            Your Shortcuts
          </Typography>
          {ShortcutItems.map((item: any, index: any) => (
            <SideMenu item={item} index={index} />
          ))}
        </List>
        <Divider />
        <List>
          <Typography
            sx={{
              ml: 3,
              color: '#595959',
            }}>
            Others
          </Typography>
          {OtherItems.map((item: any, index: any) => (
            <SideMenu item={item} index={index} />
          ))}
        </List>
      </Box>
    </>
  );
};

export default LeftSidbar;
