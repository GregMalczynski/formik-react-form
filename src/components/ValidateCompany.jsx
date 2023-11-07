import * as Yup from 'yup';

export const validateCompanyData = Yup.object({
    companyName: Yup.string().min(4).required('Please enter company name'),
    companyAdress: Yup.string().min(3).required('Please enter company adress'),
    postCode: Yup.number().required('Please enter postal code'),
    companyPassword: Yup.string().min(6).max(16).required('Please enter password'),
    confirmCompanyPassword: Yup.string().oneOf([Yup.ref('companyPassword'), null], 'Password must match'),
    termsConditions: Yup.boolean().oneOf([true], 'Please accept Terms & Conditions')
})