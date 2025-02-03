import {useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Avatar1 from './Avatar';
import LoginT from './LoginT';
const Headers = () => {
  const [login, setLogin] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [actionType, setActionType] = useState<'login' | 'register'>('login');
  const handleShowForm = (type: 'login' | 'register') => {    
    setActionType(type);
    setShowForm(true);
  };
  return (
    <>
        {!showForm && !login && (
          <Box>
            <Button variant="contained" onClick={() => handleShowForm('login')} sx={{ marginRight: 2 }}>
              Login
            </Button>
            <Button variant="contained" onClick={() => handleShowForm('register')}>
              Register
            </Button>
          </Box>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {showForm && !login && <LoginT setLogin={setLogin} prev={login}  actionType={actionType} />}
        {login &&<Avatar1 />}
        </Typography>
    </>
  );
};
export default Headers;