import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import immg from './assets/p1.png';
import Chip from '@mui/material/Chip';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import Divider from '@mui/material/Divider';

const ThoughtBox = () => {
  const handleClick = () => {};
  return (
    <Box
      sx={{
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius: '20px',
        px: 2,
        py: 1,
        backgroundColor: '#fffff',
        // width: '80%',
        width: '95%',
        // border: '2px solid black',
      }}>
      <Box
        sx={{
          // border: '2px solid black',
          width: '100%',
          // height: '300px',
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-around',
          my: 1,
        }}>
        <Avatar alt='Remy Sharp' src={immg} />
        <Chip
          label='What s on your mind, name? '
          onClick={handleClick}
          sx={{ pr: 3, width: '70%' }}
        />
      </Box>
      <Divider />
      <Box display='flex' gap='20px' sx={{ ml: 3, my: 1, gap: '20%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <MonochromePhotosIcon />
          <Typography>photos/Videos</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <MonochromePhotosIcon />
          <Typography>photos/Videos</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ThoughtBox;
