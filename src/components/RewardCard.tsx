import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import imgg from './assets/Reward1.png';

export default function RewardCard() {
  return (
    <Card sx={{ maxWidth: 305, m: 'auto', my: 2 }}>
      <CardActionArea>
        <CardMedia component='img' image={imgg} alt='green iguana' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            PS4
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            The PS4 is a popular gaming console by Sony, known for its powerful
            performance and extensive game library.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
