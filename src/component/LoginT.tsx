// import React, { useContext, useState, FormEvent } from 'react';
// import axios from 'axios';
// import { TextField, Button, InputAdornment, IconButton, Box, Modal, Typography } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { UserContext } from '../type';

// const LoginT = ({ setLogin }) => {
//     const { user, dispatch } = useContext(UserContext);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [open, setOpen] = useState(false);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const handleTogglePasswordVisibility = () => {
//         setShowPassword(prev => !prev);
//     };

//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:3000/api/user/login', {
//                 email: email,
//                 password: password
//             });
//             dispatch({ type: 'ADD_USER', data: { ...res.data.user } });
//             setLogin(prev => !prev);
//         } catch (e) {
//             console.log(e);
//         }
//         setOpen(false);
//     };

//     const handleNewUser = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:3000/api/user/register', {
//                 email: email,
//                 password: password
//             });
//             dispatch({ type: 'ADD_USER', data: { ...res.data.user } });
//             setLogin(prev => !prev);
//         } catch (e) {
//             console.log(e);
//         }
//         setOpen(false);
//     };

//     const actionType = location.state?.actionType;

//     return (
//         <form onSubmit={actionType === 'register' ? handleNewUser : handleSubmit}>
//             <TextField
//                 label="Email"
//                 type="email"
//                 variant="outlined"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 margin="normal"
//                 required
//             />
//             <TextField
//                 label="Password"
//                 type={showPassword ? "text" : "password"}
//                 variant="outlined"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 margin="normal"
//                 required
//                 InputProps={{
//                     endAdornment: (
//                         <InputAdornment position="end">
//                             <IconButton
//                                 onClick={handleTogglePasswordVisibility}
//                                 edge="end"
//                             >
//                                 {showPassword ? <VisibilityOff /> : <Visibility />}
//                             </IconButton>
//                         </InputAdornment>
//                     ),
//                 }}
//             />
//             <Button type="submit" variant="contained" color="primary">
//                 {actionType === 'register' ? 'Register' : 'Login'}
//             </Button>
//         </form>
//     );
// };

// export default LoginT;

// // import { FormEvent, useContext, useState } from "react";
// // import Login from "@mui/icons-material/Login";
// // import Box from "@mui/material/Box";
// // import { Button, IconButton, InputAdornment, Modal, TextField, Typography } from "@mui/material";
// // import { UserContext } from "../type";
// // import axios from "axios"
// // import { Edit, Visibility, VisibilityOff } from "@mui/icons-material";
// // const LoginT = ({ setLogin }) => {
// //     const [showPassword, setShowPassword] = useState(false);
// //     const [open, setOpen] = useState(true);
// //     const [email, setemail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const { user, dispatch } = useContext(UserContext);
// //     const [user1, setuser1] = useState({
// //         "id": undefined,
// //         "firstName": '',
// //         "lastName": "",
// //         "email": "",
// //         "password": "",
// //         "address": "",
// //         "phone": ""
// //     })
// //     //const showModal = () => setOpen(true);
// //     //const handleClose = () => setOpen(false);
// //     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
// //         e.preventDefault();
// //         try {
// //             const res = await axios.post('http://localhost:3000/api/user/login', {
// //                 email: email,
// //                 password: password
// //             })
// //             dispatch({ type: 'ADD_USER', data: { ...res.data.user } });
// //             setLogin(prev => !prev);
// //         } catch (e) { console.log(e); }
// //         setOpen(false)
// //     };
// //     const handleTogglePasswordVisibility = () => {
// //         setShowPassword(prev => !prev);
// //     };
// //     const handleNewUser =async (e: FormEvent<HTMLFormElement>) => {
// //         e.preventDefault();
// //         try {
// //             const res = await axios.post('http://localhost:3000/api/user/register', {
// //                 email: email,
// //                 password: password
// //             })
// //             dispatch({ type: 'ADD_USER', data: { ...res.data.user } });
// //             setLogin(prev => !prev);
// //         } catch (e) { console.log(e); }
// //         setOpen(false)
// //     };
// //     return (
// //         <>
// //             {/* <Button onClick={showModal} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
// //                 <Login /> Login
// //             </Button> */}
// //             <Modal open={open} onClose={handleSubmit}>
// //                 <Box
// //                     component="form"
// //                     onSubmit={handleSubmit}
// //                     sx={{
// //                         display: 'flex',
// //                         flexDirection: 'column',
// //                         maxWidth: 400,
// //                         margin: 'auto',
// //                         padding: 2,
// //                         border: '1px solid #ccc',
// //                         borderRadius: '5px',
// //                         backgroundColor: 'white',
// //                         position: 'absolute',
// //                         top: '50%', // ממקם את המודל באמצע
// //                         left: '50%',
// //                         transform: 'translate(-50%, -50%)', // מתקן את המיקום כדי שיהיה במרכז
// //                     }}
// //                 >
// //                     <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
// //                         Login
// //                     </Typography>
// //                     <TextField
// //                         label="email"
// //                         variant="outlined"
// //                         value={email}
// //                         onChange={(e) => setemail(e.target.value)}
// //                         margin="normal"
// //                         required
// //                     />
// //                     <TextField
// //                         label="Password"
// //                         type={showPassword ? "text" : "password"}
// //                         variant="outlined"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                         margin="normal"
// //                         required
// //                         InputProps={{
// //                             endAdornment: (
// //                                 <InputAdornment position="end">
// //                                     <IconButton
// //                                         onClick={handleTogglePasswordVisibility}
// //                                         edge="end"
// //                                     >
// //                                         {showPassword ? <VisibilityOff /> : <Visibility />}
// //                                     </IconButton>
// //                                 </InputAdornment>
// //                             ),
// //                         }}
// //                     />
// //                     <Button type="submit" variant="contained" color="primary">
// //                         Login
// //                     </Button>
// //                 </Box>
// //             </Modal>
// //         </>
// //     );
// // };

// // export default LoginT;

import React, { useContext, useState, FormEvent } from 'react';
import axios from 'axios';
import { TextField, Button, InputAdornment, IconButton, Box } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { UserContext } from '../type';

const LoginT = ({ setLogin, actionType }) => {
    const { user, dispatch } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleTogglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/api/user/login', {
                email: email,
                password: password
            });
            dispatch({ type: 'ADD_USER', data: { ...res.data.user } });
            setLogin(prev => !prev);
        } catch (e) {
            console.log(e);
        }
    };

    const handleNewUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/api/user/register', {
                email: email,
                password: password
            });
            dispatch({ type: 'ADD_USER', data: { ...res.data.user } });
            setLogin(prev => !prev);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                if (err.response && err.response.status === 400) {
                    setError(err.response.data.message);
                } else {
                    setError('An unexpected error occurred');
                }
            }
        }
    };

    return (
        <form onSubmit={actionType === 'register' ? handleNewUser : handleSubmit}>
            <Box
                // component="form"
                // onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 400,
                    margin: 'auto',
                    padding: 2,
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: '50%', // ממקם את המודל באמצע
                    left: '50%',
                    transform: 'translate(-50%, -50%)', // מתקן את המיקום כדי שיהיה במרכז
                }}
            >
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                />
                <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    required
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleTogglePasswordVisibility}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Button type="submit" variant="contained" color="primary">
                    {actionType === 'register' ? 'Register' : 'Login'}
                </Button>
            </Box>
        </form>
    );
};

export default LoginT;