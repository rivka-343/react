import { useContext, useState, FormEvent } from 'react';
import axios from 'axios';
import { TextField, Button, InputAdornment, IconButton, Box } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { UserContext } from '../type';
const LoginT = ({ setLogin, actionType, prev }: { setLogin: Function, actionType: any, prev: boolean }) => {
    const { dispatch } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!(prev));
    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/api/user/login', {
                email: email,
                password: password
            });
            dispatch({ type: 'ADD_USER', data: { ...res.data.user } });
            setLogin(!(prev));
            setError('');
        } catch (err) {
            if (axios.isAxiosError(err)) {
                if (err.response && err.response.status === 401) {
                    setError(err.response.data.message); // שמירה של הודעת השגיאה
                } else {
                    setError('An unexpected error occurred');
                }
            }
        }
        setEmail('');
        setPassword('');
    };
    const handleNewUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/api/user/register', {
                email: email,
                password: password
            });
            dispatch({ type: 'ADD_USER', data: { ...res.data.user } });
            setLogin(!(prev));

        } catch (err) {
            if (axios.isAxiosError(err)) {
                if (err.response && err.response.status === 400) {
                    setError(err.response.data.message);
                } else {
                    setError('An unexpected error occurred');
                }
            }
        }
        setEmail('');
        setPassword('');
    };
    return (
        <form onSubmit={actionType === 'register' ? handleNewUser : handleSubmit}>
            <Box sx={{
                display: 'flex', flexDirection: 'column',
                maxWidth: 400, margin: 'auto', padding: 2,
                border: '1px solid #ccc', borderRadius: '5px',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, 50%)',
                height: 'fit-content',
                width: '100%', zIndex: 1, boxShadow: 3
            }}>
                <TextField label="Email" type="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}margin="normal" required/>
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
                                    onClick={handleTogglePasswordVisibility} edge="end" >
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