import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import Login from "@mui/icons-material/Login";
import Box from "@mui/material/Box";
import { deepPurple } from "@mui/material/colors";
import { Avatar, Button, IconButton, InputAdornment, Modal, TextField, Typography } from "@mui/material";
import { Edit, Visibility, VisibilityOff } from "@mui/icons-material";
import { User, UserContext } from "../type";
import axios from "axios";

const Avatar1 = () => {
    const [visible, setVisible] = useState(false);
    const { user, dispatch } = useContext(UserContext);
    const [showPassword, setShowPassword] = useState(false);
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    //const paswordRef = useRef<HTMLInputElement>(null)
    const adressRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const showModal = () => setVisible(true);
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const updatedData: User = {id:user?.id||0}; // אובייקט חדש לאחסן את הנתונים המעודכנים
        updatedData.firstName = firstNameRef.current?.value||user?.firstName;
        updatedData.lastName = lastNameRef.current?.value||user?.lastName;
        updatedData.email = emailRef.current?.value||user?.email;
        updatedData.adress = adressRef.current?.value||user?.adress;
        updatedData.phone = phoneRef.current?.value||user?.phone;
        try {
            console.log( user?.firstName +" "+user?.id);
            
        const res = await axios.put('http://localhost:3000/api/user/', {
                firstName: updatedData.firstName,
                lastName: updatedData.lastName,
                email: updatedData.email,
                address: updatedData.adress,
                phone: updatedData.phone
            }, {
                headers: {
                    'user-id': user?.id || 0 // Include the user ID here
                }
            });
            console.log(`-------`);
            console.log(res.data.user);
            dispatch({
                type: 'UPDATE_USER',
                data: {...res.data.user}
            });
        } catch (e) {
            console.log(e);
        }
        console.log(`after dispatch${user?.firstName}`);
        setVisible(false)
    };
    const handleTogglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };
    return (
        <>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                <Avatar sx={{ bgcolor: deepPurple[500] }}>{(user?.firstName ? user.firstName.charAt(0) : user?.email ? user?.email .charAt(0):"") + (user?.lastName ? user.lastName.charAt(0) : '')}</Avatar>
                <label>{(user?.firstName ? user?.firstName:" " )+ " " + (user?.lastName ? user?.lastName:"") }</label>
                <Button onClick={showModal}>
                    edit <Edit />
                </Button>
            </Box>
            <Modal open={visible} onClose={handleSubmit}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
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
                        label="firstName"
                        type="text"
                        variant="outlined"
                        placeholder={user?.firstName}
                        margin="normal"
                        inputRef={firstNameRef}
                    />
                    <TextField
                        label="lastName"
                        type="text"
                        variant="outlined"
                        placeholder={user?.lastName}
                        margin="normal"
                        inputRef={lastNameRef}

                    />   <TextField
                        label="email"
                        type="email"
                        variant="outlined"
                        placeholder={user?.email}
                        margin="normal"
                        inputRef={emailRef}

                    />      
                   {/*  <TextField
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        placeholder={user?.pasword}
                        margin="normal"
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
                        inputRef={paswordRef}

                    /> */}
                    <TextField
                        label="Adress"
                        type="text"
                        variant="outlined"
                        placeholder={user?.adress}
                        margin="normal"
                        inputRef={adressRef}

                    />
                    <TextField
                        label="Phone"
                        type="phone"
                        variant="outlined"
                        placeholder={user?.phone}
                        margin="normal"
                        inputRef={phoneRef}

                    />
                    <Button type='submit'>Save changes</Button>
                </Box>

            </Modal>
        </>
    );

};

export default Avatar1;
// import { useContext, useState } from "react";
// import LoginForm from "./LoginForm";
// import Login from "@mui/icons-material/Login";
// import Box from "@mui/material/Box";
// import { deepPurple } from "@mui/material/colors";
// import { Avatar, Button, ButtonBase, ButtonGroup, ButtonGroupButtonContext, ButtonGroupContext, Modal, TextField, Typography } from "@mui/material";
// import { BubbleChart, Edit, Label } from "@mui/icons-material";
// import { UserContext } from "../type";
// const Avatar1= () => {
//     const [visible, setVisible] = useState(false);
//     const showModal = () => setVisible(true);
//     const handleCancel = () => setVisible(false);
//     const { user, dispatch } = useContext(UserContext);
//     let n = (user?.firstName ? user.firstName.charAt(0) : '') + (user?.lastName ? user.lastName.charAt(0) : '');
//    console.log(n);

//    return (<>
//     <Box
//             sx={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 p: 2, // Padding for some space
//                 display: 'flex',
//                 flexDirection: 'row', // שינוי ל-row כדי למקם את האלמנטים באותה שורה
//                 alignItems: 'center', // מרכז את האלמנטים אנכית
//                 gap: 1, // רווח קטן בין האלמנטים
//             }}
//         >
//              <Avatar sx={{ bgcolor: deepPurple[500] }}>{n}</Avatar>
//              <label>{user?.firstName+" "+user?.lastName}</label>
//              <Button onClick={showModal}>edit<Edit></Edit></Button>
//     </Box>
//     <Modal title="Modal Title" visible={visible} onCancel={handleCancel} footer={null}>
//                 <p>Some content for the modal.</p>
//                 <Button onClick={handleCancel}>Close</Button>
//     </Modal>
// </>);
// };
// export default Avatar1;