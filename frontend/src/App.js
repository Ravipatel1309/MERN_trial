import React from 'react'
import NavBar from './components/Navbar/Navbar';
import UserInfo from './components/UserInfo/UserInfo';
import AllUsers from './components/AllUsers/AllUsers';
import AddUser from './components/AddUser/AddUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser/EditUser';
// import Home from './components/trial/Home';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<UserInfo />} exact />
        <Route path='/add' element={<AddUser />} exact />
        <Route path='/all' element={<AllUsers />} exact />
        <Route path='/edit/:id' element={<EditUser />} exact />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
