import recipeStore from './RecipeStore';
import { useContext, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from '../type';
import { FormData } from './FormData'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box, Alert } from '@mui/material';
import {validationSchema} from './validationSchema'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const RecipeComponent = () => {
    const { user } = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [ingredients, setIngredients] = useState(['']); // התחלה עם רכיב אחד ריק
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState<'success' | 'error' | undefined>(undefined);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(validationSchema),
    });
    useEffect(() => {
        recipeStore.fetchRecipes();
    }, []);
    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const finalIngredients = ingredients.filter(ingredient => ingredient.trim() !== ''); // מסנן את המקומות הריקים
        const newRecipe = {
            id: 0,
            title: data.title,
            description: data.description,
            authorId: user?.id || 0,
            ingredients: finalIngredients,
            instructions: data.instructions,
        };
        try {
            await recipeStore.addRecipe(newRecipe);
            setAlertMessage('Recipe added successfully!');
            setAlertSeverity('success');
        } catch (error) {
            if (error.message === 'You do not have permission to add this recipe.') {
                setAlertMessage('User is not logged in.'); // הודעה עבור שגיאה 403
            } else {
                setAlertMessage('The recipe was not added!'); // הודעה עבור שגיאות אחרות
            }
            setAlertSeverity('error');
        } finally {
            handleClose();
            resetForm(); 
        }
    };
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false);  resetForm();};
    const resetForm = () => {
        setIngredients(['']); // לאפס את המערך לרכיב אחד ריק
        reset({title: '',description: '',instructions: '',ingredients: [], });
    };
    const handleIngredientChange = (index: number, value: string) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index] = value; // עדכון לפי אינדקס
        setIngredients(updatedIngredients);
        if (value && index === ingredients.length - 1) {
            setIngredients([...updatedIngredients, '']); // הוסף רכיב חדש
        }
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
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', width: '100vw'}}>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>Add Recipe <KeyboardDoubleArrowRightIcon/> </Button></div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add a New Recipe</DialogTitle>
                <DialogContent>
                    <Box sx={{display: 'flex',flexDirection: 'column',maxWidth: 400,}} >
                        <TextField label="Title" type="text" variant="outlined" {...register('title')} error={!!errors.title} helperText={errors.title?.message} margin="normal" required />
                        <TextField label="Description" type="text" variant="outlined" {...register('description')} error={!!errors.description} helperText={errors.description?.message} margin="normal" required/>
{ingredients.map((ingredient, index) => (<TextField key={index} label={`Ingredient ${index + 1}`} type="text" variant="outlined" value={ingredient} onChange={(e) => handleIngredientChange(index, e.target.value)} margin="normal" required={index === 0} />))}
                        <TextField label="Instructions" type="text" variant="outlined" {...register('instructions')} error={!!errors.instructions} helperText={errors.instructions?.message} margin="normal" required />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleSubmit(onSubmit)} color="primary">Add</Button>
                </DialogActions>
            </Dialog>
            {alertMessage && (<Alert severity={alertSeverity} style={{ marginTop: '16px' ,position: 'absolute',top: '55px',left: '50%',transform: 'translateX(-50%)',width: '50%', zIndex: 1000 
            }} action={<Button color="inherit" onClick={handleCloseAlert}>X</Button>}> {alertMessage} </Alert>)}
        </div>
    );
};
export default RecipeComponent;