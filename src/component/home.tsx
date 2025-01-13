import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from '../type';
import Avatar1 from './Avatar';
import LoginT from './LoginT';


const Home = () => {
  const [login, setLogin] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [actionType, setActionType] = useState<'login' | 'register'>('login');

  const handleShowForm = (type: 'login' | 'register') => {    
    setActionType(type);
    setShowForm(true);
  };
  return (
    <>

    <UserProvider>
        {!showForm && !login && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              p: 2,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Button variant="contained" onClick={() => handleShowForm('login')} sx={{ marginRight: 2 }}>
              Login
            </Button>
            <Button variant="contained" onClick={() => handleShowForm('register')}>
              Register
            </Button>
          </Box>
        )}
        {showForm && !login && <LoginT setLogin={setLogin} actionType={actionType} />}
        {login && <Avatar1 />}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
             width: '100vw',
           // position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <p>Home</p>
        </Box>
    </UserProvider>
    </>
  );
};

export default Home;
// import { createContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// //import Login1 from './component/Login'
// import './App.css'
// import { User, Action, UserProvider } from './type'
// //import { Login, Route, Router } from '@mui/icons-material'
// import Avatar1 from './component/Avatar'
// import LoginT from './component/LoginT'
// //import { Switch } from '@mui/material'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Register from './component/register'
// // import Register from './component/register'
// const App: React.FC = () => {
//   const [login, setLogin] = useState(true);
//   return (
//       // <UserProvider>
//       //     {login ?  <Register/> : <Avatar1 />}
//       //     <p>Home</p>
//       // </UserProvider>
//       <UserProvider>
//       <Router>
//         <Routes>
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<LoginT setLogin={setLogin} />} />
//           <Route path="/" element={<LoginT setLogin={setLogin} />} />
//         </Routes>
//         {login ? <Register/> : <Avatar1 />}
//         <p>Home</p>
//       </Router>
//     </UserProvider>
//   );
// };
// export default App

// // function App() {

// //   const [login, setLogin] = useState(true);
// //   return (
// //     <>
// //       {login ? <Login1 setLogin={setLogin} /> : <Avatar />}
// //       <p>Home</p>
// //     </>
// //   )
// // }