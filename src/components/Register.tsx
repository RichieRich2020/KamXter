import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  useMediaQuery,
  Skeleton,
} from '@mui/material';
import imgg from './assets/pexels3.jpg';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchUsers, registerUser } from '../axiosfile/datafetchfile';

const ResComponent = styled('div')({
  margin: 'auto',

  width: '55%', // Default width//

  // top: 65,
  '@media (max-width: 1220px)': {
    margin: 'auto',
    width: '95%', // Width on screens wider than 600px
    // mt: '800px',
  },
});

const LoginCom = styled('div')({
  margin: 'auto',

  width: '100%', // Default width//

  // top: 65,
  '@media (max-width: 853px)': {
    margin: 'auto',
    width: '100%', // Width on screens wider than 600px
    background: `linear-gradient(to bottom, rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url(${imgg})`, // Correct syntax for backgroundImage
    // mt: '800px',
    backgroundSize: 'cover', // Cover the entire box
    backgroundPosition: 'center', // Center the image
    backgroundColor: '#ffffff0',
    // color: '#ffff',
  },
});
export const Register = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width: 853px)');
  const [formData, setFormData]: any = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  console.log(data, 'data');
  const { mutate, isError, status } = useMutation({ mutationFn: registerUser });

  const handleSubmit = (event: any) => {
    event.preventDefault();

    mutate(formData);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isLoading) return <h2>Loading </h2>;
  if (error) return <div>Error fetching data</div>;

  return (
    <Box
      sx={{
        width: '100vw',
        backgroundColor: 'rgb(193, 190, 255)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ResComponent
        sx={{
          width: '60%',
          height: '600px',
          display: 'flex',
          backgroundColor: '#ffff',
        }}>
        <LoginCom
          sx={{
            width: '50%',
            height: '100%',
            // p: 2,
            // pt: 1.5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Box
            sx={{
              width: '50%',
              // border: '2px solid black',
              // border: isSmallScreen ? '1px solid #ffff' : '2px solid black',
              p: 2,
            }}>
            {isSmallScreen && (
              <Typography
                variant='h1'
                sx={{
                  fontSize: '3.2rem',
                  lineHeight: '70px',
                  fontWeight: '700',
                  pb: 2,
                  margin: 'auto',
                  textAlign: 'center',
                  color: '#FFFF',
                }}>
                KamXter
              </Typography>
            )}
            <Typography
              variant='h1'
              sx={{
                fontSize: '2.5rem ',
                lineHeight: '70px',
                fontWeight: '900',
                color: isSmallScreen ? '#FFFF' : 'black',
              }}>
              Register
            </Typography>
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              onSubmit={handleSubmit}>
              <TextField
                id='username'
                name='username'
                label='Username'
                type='text'
                variant={isSmallScreen ? 'filled' : 'standard'}
                fullWidth
                onChange={handleChange}
                sx={{
                  mt: 1,
                }}
              />
              <TextField
                id='email'
                name='email'
                label='Email'
                type='email'
                variant={isSmallScreen ? 'filled' : 'standard'}
                fullWidth
                onChange={handleChange}
                sx={{
                  mt: 1,
                }}
              />
              <TextField
                id='phone'
                name='phone'
                label='Phone Number'
                type='number'
                variant={isSmallScreen ? 'filled' : 'standard'}
                fullWidth
                onChange={handleChange}
                sx={{
                  mt: 1,
                }}
              />
              <TextField
                id='password'
                name='password'
                label='Password'
                type='password'
                autoComplete='current-password'
                variant={isSmallScreen ? 'filled' : 'standard'}
                fullWidth
                onChange={handleChange}
                sx={{
                  mt: 2,
                }}
              />
              <Box
                sx={{
                  width: '100%',
                }}>
                <Button
                  type='submit'
                  sx={{
                    mt: 3, // margin-top: 2 (spacing unit from MUI, equivalent to 16px)
                    width: '50%', // width 50%
                    backgroundColor: '#938eef', // background color
                    color: 'white', // text color
                    fontWeight: 'bold', // font weight
                    borderRadius: '0', // border radius
                    '&:hover': {
                      // hover state
                      backgroundColor: '#5d55b1', // background color on hover
                      textAlign: 'left',
                    },
                  }}>
                  Register
                </Button>
              </Box>
            </form>
            {isSmallScreen && (
              <Box
                sx={{
                  // border: '2px solid black',
                  // display: 'flex',
                  mt: 3,
                }}>
                <Typography
                  variant='body1'
                  fontWeight='400'
                  textAlign='left'
                  sx={{ color: '#FFF' }}>
                  Do you have an account?
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    mt: 3,
                  }}>
                  <Button
                    sx={{
                      backgroundColor: '#FFFF',
                      mt: '5',
                      color: '#673299',
                      fontWeight: 'bold',
                      border: 'none',
                      borderRadius: '0',
                      width: '50%',
                      p: '10px',
                      textAlign: 'left',
                      '&:hover': {
                        // hover state
                        backgroundColor: '#dcdaee', // background color on hover
                        textAlign: 'left',
                      },
                    }}
                    onClick={() => {
                      navigate('/login');
                    }}>
                    Login
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </LoginCom>
        <Box
          sx={{
            // height: '150px',
            width: '50%',
            // py: 2,

            background: `linear-gradient(to bottom, rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url(${imgg})`, // Correct syntax for backgroundImage
            backgroundSize: 'cover', // Cover the entire box
            backgroundPosition: 'center', // Center the image
            textAlign: 'center',
            color: '#FFFF',
            display: { xs: 'none', sm: 'none', md: 'block' },
            p: 2,
            pt: 10,
          }}>
          <Typography
            variant='h1'
            sx={{
              fontSize: '80px',
              lineHeight: '70px',
              fontWeight: '900',
              pb: 2,
            }}>
            KamXter
          </Typography>
          <Typography
            variant='body1'
            // fontWeight='400'
            // lineHeight='10px'
            textAlign='left'
            p={3}>
            Welcome to Kamxter, Where you can transform your life and help the
            environment by reducing waste. Join our community today and discover
            the power of sharing and connecting with like-minded individuals.
            Let's make a difference together and change the way of living!
          </Typography>
          <Typography variant='body1' fontWeight='400' textAlign='left' pl={3}>
            Do you have an account?
          </Typography>
          <Box
            sx={{
              display: 'flex',
              mt: 3,
              pl: 3,
            }}>
            <Button
              sx={{
                backgroundColor: '#FFFF',
                mt: '5',
                color: '#673299',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '0',
                width: '50%',
                p: '10px',
                textAlign: 'left',
                '&:hover': {
                  // hover state
                  backgroundColor: '#dcdaee', // background color on hover
                  textAlign: 'left',
                },
              }}
              onClick={() => navigate('/login')}>
              Login
            </Button>
          </Box>
        </Box>
      </ResComponent>
    </Box>
  );
};
