import styled from 'styled-components';
import { validateCompanyData } from './ValidateCompany';
import { Formik, Form, Field } from 'formik';

const companyInitialValues = {
    companyName: '',
    companyAdress: '',
    postCode: '',
    companyPassword: '',
    confirmCompanyPassword: '',
    termsConditions: false
}

const Company = () => {

    const handleSubmit = (value, {resetForm}) => {
        console.log(value)
        resetForm({values: ''})
    }

    return(
        <Wrapper>
            <h2>Company Form</h2>
            <Formik 
                initialValues={companyInitialValues}
                validationSchema={validateCompanyData}
                onSubmit={handleSubmit}
            >
                {({errors, values, setFieldValue}) => (
                    <Form>
                    <Section>
                        <label htmlFor='companyName'>Company Name</label>
                            <Field
                                name='companyName'
                                type='text'
                            ></Field>
                        {errors.companyName && <small>{errors.companyName}</small>}
                    </Section>
                    <Section>
                        <label htmlFor='companyAdress'>Company Adress</label>
                        <Field
                            name='companyAdress'
                            type='text'
                        />
                        {errors.companyAdress && <small>{errors.companyAdress}</small>}
                    </Section>
                    <Section>
                        <label htmlFor='postCode'>US Postal Code</label>
                        <Field 
                            name='postCode'
                            type='number'
                        />
                        {errors.postCode && <small>{errors.postCode}</small>}
                    </Section>
                    <Section>
                        <label htmlFor='companyPassword'>Password</label>
                        <Field 
                            name='companyPassword'
                            type='password'
                        />
                        {errors.companyPassword && <small>{errors.companyPassword}</small>}
                    </Section>
                    <Section>
                        <label htmlFor='confirmCompanyPassword'>Confirm Password</label>
                        <Field 
                            name='confirmCompanyPassword'
                            type='password'
                        />
                        {errors.confirmCompanyPassword && <small>{errors.confirmCompanyPassword}</small>}
                    </Section>
                    <Section>
                        <label style={{fontSize: '11px', marginTop: '15px', textAlign: 'center'}} htmlFor='termsConditions'>Agree Terms & Conditions</label>
                        <Field 
                            name='termsConditions'
                            type='checkbox'
                        />
                        {errors.termsConditions && <small style={{textAlign: 'center'}}>{errors.termsConditions}</small>}
                    </Section>
                    <Section>
                        <button type='submit'>Submit</button>
                    </Section>
                </Form>
                )}           
            </Formik>
        </Wrapper>
    )
}

export default Company;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
`