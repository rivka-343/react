import React, { useState } from 'react';
import { UserProvider } from './type';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import LoginT from './component/LoginT';
import Avatar1 from './component/Avatar';
import { BrowserRouter as Router, Route, Routes, RouterProvider, Link } from 'react-router-dom';
import { router } from './router';


const App = () => {
  return (
      <RouterProvider router={router} />
  );
};
export default App;
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