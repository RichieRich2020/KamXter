import React from 'react';
import {
  Box,
  Text,
  Input,
  Image,
  useColorMode,
  Button,
} from '@chakra-ui/react';
import Reward from './Reward';
import { styled } from '@mui/system';

const MyComponent = styled('div')({
  position: 'relative',
  margin: 'auto',
  overflowY: 'scroll',
  width: '55%', // Default width//
  height: '100vh',
  top: 65,
  border: '2px solid black',
  '@media (max-width: 852px)': {
    margin: 'auto',
    width: '94%', // Width on screens wider than 600px
    // mt: '800px',
  },
});
const Feed = () => {
  // const { name } = useSelector(data => data.auth);
  return (
    <MyComponent>
      <Reward />
      <Box
        sx={
          {
            // height: '900px',
            // border: '2px solid black',
          }
        }></Box>
    </MyComponent>
  );
};

export default Feed;
