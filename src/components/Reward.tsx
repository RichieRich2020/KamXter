import { Box } from '@mui/material';
import imgg from './assets/Reward1.png';
import ThoughtBox from './ThoughtBox';
const Reward = () => {
  const RewardBow = () => {
    return (
      <Box
        sx={{
          borderRadius: '10%',
          display: 'flex',
          p: 0.5,
          background:
            'linear-gradient(45deg, #b78628 0%, #f7d007 50%, #ffdd4b 100%)',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          mx: 1,
        }}>
        <Box
          sx={{
            // width: '80',
            height: '150px',

            // py: 2,
            borderRadius: '20%',
            backgroundImage: `url(${imgg})`, // Correct syntax for backgroundImage
            backgroundSize: 'cover', // Cover the entire box
            backgroundPosition: 'center', // Center the image
            // my: 1,
          }}>
          <Box
            sx={{
              height: '95%',
              alignContent: 'flex-end',
              m: 2,
            }}>
            <Box
              sx={{
                // width: 'fit-content',
                backgroundColor: '#3fc93f',
                borderRadius: '20%',
                py: 1,
                px: 1,
              }}>
              400 KX
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        position: 'absolute',

        display: 'flex',
        width: '100%',
        // overflow: 'hidden', // Ensure overflow is hidden
        whiteSpace: 'nowrap', // Prevent wrapping,
        py: 2,
        mb: 2,
        overflowY: 'scroll',
      }}>
      <Box
        sx={{
          display: 'flex',
        }}>
        {[...Array(78)].map((_, index) => (
          <RewardBow key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default Reward;
