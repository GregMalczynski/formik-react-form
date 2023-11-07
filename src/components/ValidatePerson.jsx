import * as Yup from 'yup';

export const validatePersonData = Yup.object({
    name: Yup.string().min(3).required('Please enter name'),
    surname: Yup.string().min(3).required('Please enter surname'),
    email: Yup.string().email('Please enter valid email').required('Please enter email adress'),
    personPassword: Yup.string().min(6).max(16).required('Please enter password'),
    confirmPersonPassword: Yup.string().oneOf([Yup.ref('personPassword'), null], 'Password must match')
})