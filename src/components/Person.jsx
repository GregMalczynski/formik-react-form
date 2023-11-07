import styled from 'styled-components';
import { validatePersonData } from './ValidatePerson';
import { Formik, Form, Field } from 'formik';

const personInitialValues = {
    name: '',
    surname: '',
    email: '',
    personPassword: '',
    confirmPersonPassword: ''
}

const Person = () => {

    const handleSubmit = (value, {resetForm}) => {
        console.log(value)
        resetForm({values: ''})
    }

    return(
        <Wrapper>
                <h2>Person Form</h2>
            <Formik 
                initialValues={personInitialValues}
                validationSchema={validatePersonData}
                onSubmit={handleSubmit}
            >
                {({errors}) => (
                    <Form>
                    <Section>
                        <label htmlFor='name'>First Name</label>
                            <Field
                                name='name'
                                type='text'
                            ></Field>
                        {errors.name && <small>{errors.name}</small>}
                    </Section>
                    <Section>
                        <label htmlFor='surname'>Second Name</label>
                        <Field
                            name='surname'
                            type='text'
                        />
                        {errors.surname && <small>{errors.surname}</small>}
                    </Section>
                    <Section>
                        <label htmlFor='email'>Email</label>
                        <Field 
                            name='email'
                            type='email'
                        />
                        {errors.email && <small>{errors.email}</small>}
                    </Section>
                    <Section>
                        <label htmlFor='personPassword'>Password</label>
                        <Field 
                            name='personPassword'
                            type='password'
                        />
                        {errors.personPassword && <small>{errors.personPassword}</small>}
                    </Section>
                    <Section>
                        <label htmlFor='confirmPersonPassword'>Confirm Password</label>
                        <Field 
                            name='confirmPersonPassword'
                            type='password'
                        />
                        {errors.confirmPersonPassword && <small>{errors.confirmPersonPassword}</small>}
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

export default Person;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
`
