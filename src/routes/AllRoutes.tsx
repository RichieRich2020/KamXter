import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../components/Feed';
import LeftSidbar from '../components/LeftSidbar';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import RightBar from '../components/Rightbar';
import Sidbar from '../components/Sidbar';

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <LeftSidbar />
        <Feed />
        <RightBar />
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
      </Routes>
    </div>
  );
};

export default AllRoutes;
