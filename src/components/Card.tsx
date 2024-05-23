import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Divider } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Image = styled('img')({
  width: '100%',
});

function SkeletonChildrenDemo(props: { loading?: boolean }) {
  const { loading = false } = props;

  return (
    <div style={{}}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          my: 2,
          boxShadow:
            'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        }}>
        <Box sx={{ margin: 1 }}>
          {loading ? (
            <Skeleton variant='circular'>
              <Avatar />
            </Skeleton>
          ) : (
            <Avatar src='https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg' />
          )}
        </Box>

        <Box sx={{ width: '100%' }}>
          {loading ? (
            <Skeleton width='100%'>
              <Typography>.</Typography>
            </Skeleton>
          ) : (
            <Typography>Ted</Typography>
          )}
        </Box>
        <MoreVertIcon />
      </Box>
      <Box
        sx={{
          //   border: '2px solid black',
          //   height: '200px',
          width: '100%',
          px: 1,
        }}>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Box>

      <Box
        sx={{
          my: 2,
        }}>
        {loading ? (
          <Skeleton variant='rectangular' width='100%'>
            <div style={{ paddingTop: '57%' }} />
          </Skeleton>
        ) : (
          <Image
            src='https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512'
            alt=''
          />
        )}
        <Typography
          variant='body2'
          sx={{
            color: '#1876d2',
            fontSize: '20px',
            fontWeight: '800',
            pt: 1,
            pl: 1,
          }}>
          {' '}
          KX 400{' '}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          my: 2,
          gap: '20px',
        }}>
        <Button variant='contained'>Buy Now</Button>
        <Button>
          {' '}
          Add to Cart{' '}
          <ShoppingCartOutlinedIcon
            sx={{
              fontsize: '15px',
              pl: 1,
            }}
          />
        </Button>
      </Box>
      <Divider />
    </div>
  );
}

export default function cardd() {
  return (
    <Grid container spacing={8}>
      {/* <Grid item xs>
        <SkeletonChildrenDemo loading />
      </Grid> */}
      <Grid item xs>
        <SkeletonChildrenDemo />
      </Grid>
    </Grid>
  );
}
