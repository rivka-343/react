import {  useContext, useState } from "react";
import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";
import { Avatar, Button } from "@mui/material";
import { Edit } from "@mui/icons-material";
import {  UserContext } from "../type";
import EditDetails from "./Edit";
const Avatar1 = () => {
    const [visible, setVisible] = useState(false);
    const { user, dispatch } = useContext(UserContext);
    const showModal = () => setVisible(true);
    return (
        <>
            <Box
                sx={{ position: 'absolute', top: 0, left: 0, p: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, }}>
                <Avatar sx={{ backgroundColor: '#f0f0f0',color: blue[500],}}>{(user?.firstName ? user.firstName.charAt(0) : user?.email ? user?.email .charAt(0):"") + (user?.lastName ? user.lastName.charAt(0) : '')}</Avatar>
                <label>{(user?.firstName ? user?.firstName:" " )+ " " + (user?.lastName ? user?.lastName:"") }</label>
                <Button variant="contained" onClick={showModal}>edit <Edit /></Button>
            </Box>
            {user && (
                <EditDetails open={visible} onClose={() => setVisible(false)} user={user} dispatch={dispatch} />
            )}
        </>
    );
};
export default Avatar1;