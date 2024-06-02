import { Box, Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../components/Feed';
import LeftSidbar from '../components/LeftSidbar';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import { Register } from '../components/Register';
import RewardCard from '../components/RewardCard';
import RewardSection from '../components/RewardSection';
import RightBar from '../components/Rightbar';

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <LeftSidbar />
        <Feed />
        <RewardSection />
      </Container>
    </div>
  );
};

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeLayout />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
