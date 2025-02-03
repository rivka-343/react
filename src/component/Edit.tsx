import { FormEvent, useEffect, useRef, useState } from "react";
import { Modal, Box, TextField, Button, Alert } from "@mui/material";
import { User } from "../type";
import axios from "axios";
const EditDetails = ({ open, onClose, user, dispatch }: { open: boolean; onClose: () => void; user: User | undefined; dispatch: React.Dispatch<any>;}) => {
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState<'success' | 'error' | undefined>(undefined);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const adressRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const updatedData: User = { id: user?.id || 0 };
        updatedData.firstName = firstNameRef.current?.value || user?.firstName;
        updatedData.lastName = lastNameRef.current?.value || user?.lastName;
        updatedData.email = emailRef.current?.value || user?.email;
        updatedData.adress = adressRef.current?.value || user?.adress;
        updatedData.phone = phoneRef.current?.value || user?.phone;
        try {
            const res = await axios.put('http://localhost:3000/api/user/', {
                firstName: updatedData.firstName,
                lastName: updatedData.lastName,
                email: updatedData.email,
                address: updatedData.adress,
                phone: updatedData.phone
            }, {
                headers: {
                    'user-id': user?.id || 0
                }
            });
            dispatch({
                type: 'UPDATE_USER',
                data: { ...res.data }
            });
            setAlertMessage('Your details saved!');
            setAlertSeverity('success');
        } catch (err) {
            setAlertSeverity('error');
            if (axios.isAxiosError(err)) {
                if (err.response && err.response.status === 404) {
                    setAlertMessage(err.message);
                } else {
                    setAlertMessage('Error!');
                }
            }
        }
        onClose(); 
    };
    const handleCloseAlert = () => {
        setAlertMessage('');
        setAlertSeverity(undefined);
    };
     useEffect(() => {
        if (alertMessage) {
            const timer = setTimeout(() => {
                handleCloseAlert();
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [alertMessage]);
    return (
        <>
        <Modal open={open} onClose={onClose}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{display: 'flex', flexDirection: 'column',maxWidth: 400,margin: 'auto',padding: 2,border: '1px solid #ccc',borderRadius: '5px',backgroundColor: 'white',position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',}}>
                <TextField label="First Name" type="text" variant="outlined" placeholder={user?.firstName} margin="normal" inputRef={firstNameRef} />
                <TextField label="Last Name" type="text" variant="outlined" placeholder={user?.lastName} margin="normal" inputRef={lastNameRef} />
                <TextField label="Email" type="email" variant="outlined" placeholder={user?.email} margin="normal" inputRef={emailRef} />
                <TextField label="Address" type="text" variant="outlined" placeholder={user?.adress} margin="normal" inputRef={adressRef} />
                <TextField label="Phone" type="phone" variant="outlined" placeholder={user?.phone} margin="normal" inputRef={phoneRef} />
                <Button type='submit'>Save changes</Button>
            </Box>
        </Modal>
         {alertMessage && (
            <Alert severity={alertSeverity} style={{ marginTop: '16px' ,              
                position: 'absolute',
                top: '55px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '50%', 
                zIndex: 1000  }} action={<Button color="inherit" onClick={handleCloseAlert}>X</Button>}>
                {alertMessage}
            </Alert>
        )}
        </>
    );
};
export default EditDetails;



// import { FormEvent, useContext, useEffect, useRef, useState } from "react";
// import Box from "@mui/material/Box";
// import { deepPurple } from "@mui/material/colors";
// import { Alert, Avatar, Button,  Modal, TextField } from "@mui/material";
// import { User, UserContext } from "../type";
// import axios from "axios";
// const EditDetails = () => {
//     const [visible, setVisible] = useState(false);
//     const { user, dispatch } = useContext(UserContext);
//     const [alertMessage, setAlertMessage] = useState('');
//     const [alertSeverity, setAlertSeverity] = useState<'success' | 'error' | undefined>(undefined);
//     const firstNameRef = useRef<HTMLInputElement>(null)
//     const lastNameRef = useRef<HTMLInputElement>(null)
//     const emailRef = useRef<HTMLInputElement>(null)
//     const adressRef = useRef<HTMLInputElement>(null)
//     const phoneRef = useRef<HTMLInputElement>(null)
//     const showModal = () => setVisible(true);
//     const handleSubmit = async (e: FormEvent) => {
//         e.preventDefault();
//         const updatedData: User = {id:user?.id||0};
//         updatedData.firstName = firstNameRef.current?.value||user?.firstName;
//         updatedData.lastName = lastNameRef.current?.value||user?.lastName;
//         updatedData.email = emailRef.current?.value||user?.email;
//         updatedData.adress = adressRef.current?.value||user?.adress;
//         updatedData.phone = phoneRef.current?.value||user?.phone;
//         try {            
//         const res = await axios.put('http://localhost:3000/api/user/', {
//                 firstName: updatedData.firstName,
//                 lastName: updatedData.lastName,
//                 email: updatedData.email,
//                 address: updatedData.adress,
//                 phone: updatedData.phone
//             }, {
//                 headers: {
//                     'user-id': user?.id || 0
//                 }
//             });
//             dispatch({
//                 type: 'UPDATE_USER',
//                 data: {...res.data}
//             });
//             setAlertMessage('Your details save!');
//             setAlertSeverity('success');
//         } catch (err) {
//             setAlertSeverity('error');
//             if (axios.isAxiosError(err)) {
//                 if (err.response && err.response.status === 404) {
//                     setAlertMessage(err.message); 
//                 } else {
//                     setAlertMessage('Error!'); 
//                 }
//             }
//         }
//         setVisible(false)
//     };
//     const handleCloseAlert = () => {
//         setAlertMessage('');
//         setAlertSeverity(undefined);
//     };
//     useEffect(() => {
//         if (alertMessage) {
//             const timer = setTimeout(() => {
//                 handleCloseAlert();
//             }, 10000);
//             return () => clearTimeout(timer);
//         }
//     }, [alertMessage]);
//     return (
//         <>
//             {/* <Box
//                 sx={{ position: 'absolute', top: 0, left: 0, p: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, }}>
//                 <Avatar sx={{ bgcolor: deepPurple[500] }}>{(user?.firstName ? user.firstName.charAt(0) : user?.email ? user?.email .charAt(0):"") + (user?.lastName ? user.lastName.charAt(0) : '')}</Avatar>
//                 <label>{(user?.firstName ? user?.firstName:" " )+ " " + (user?.lastName ? user?.lastName:"") }</label>
//                 <Button onClick={showModal}>edit <Edit /></Button>
//             </Box> */}
//             <Modal open={visible} onClose={handleSubmit}>
//                 <Box
//                     component="form"
//                     onSubmit={handleSubmit}
//                     sx={{ display: 'flex',flexDirection: 'column',maxWidth: 400,margin: 'auto',padding: 2,border: '1px solid #ccc',borderRadius: '5px',backgroundColor: 'white',position: 'absolute',top: '50%', left: '50%',transform: 'translate(-50%, -50%)',}}
//                 >
//                     <TextField label="firstName" type="text" variant="outlined" placeholder={user?.firstName} margin="normal" inputRef={firstNameRef} />
//                     <TextField label="lastName" type="text" variant="outlined" placeholder={user?.lastName} margin="normal" inputRef={lastNameRef} />
//                     <TextField label="email" type="email" variant="outlined" placeholder={user?.email} margin="normal" inputRef={emailRef}/>      
//                     <TextField label="Adress" type="text" variant="outlined" placeholder={user?.adress} margin="normal" inputRef={adressRef}/>
//                     <TextField label="Phone" type="phone" variant="outlined" placeholder={user?.phone} margin="normal" inputRef={phoneRef} />
//                     <Button type='submit'>Save changes</Button>
//                 </Box>
//             </Modal>
//            {alertMessage && (<Alert severity={alertSeverity} style={{ marginTop: '16px' }} action={<Button color="inherit" onClick={handleCloseAlert}>X</Button>}> {alertMessage} </Alert>)}
//         </>
//     );
// };
// export default EditDetails;
// EditDetails.tsx