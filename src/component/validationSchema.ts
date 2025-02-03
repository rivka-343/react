import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    instructions: Yup.string().required('Instructions are required'),
    ingredients: Yup.array().of(Yup.string().required('Ingredient is required')).required('Ingredients are required').default([]),
});