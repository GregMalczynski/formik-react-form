import styled from 'styled-components';
import { useState } from 'react';
import Person from './Person';
import Company from './Company';

const MainForm = () => {

    const [ formOption, setFormOption ] = useState('person');

    return(
        <Wrapper>
            <Options>
                <button 
                    style={formOption === 'person' ? {background: '#664FCC', color: 'white'} : {background: 'none', color: 'gray'}} 
                    onClick={() => setFormOption('person')}
                >Person Form</button>
                <button 
                    style={formOption === 'company' ? {background: '#664FCC', color: 'white'} : {background: 'none', color: 'gray'}} 
                    onClick={() => setFormOption('company')}
                >Company Form</button>
            </Options>
            <FormWrapper>
                {formOption === 'person' ? <Person /> : <Company />}
            </FormWrapper>
        </Wrapper>
    )
}

export default MainForm;

const Wrapper = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    border-radius: 14px;
    background: white;
    box-shadow: 0px 0px 60px #EAEAEA;

    h2{
        color: gray;
    }

    label{
        color: #664FCC;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
        padding: 6px;
        border-radius: 6px;
        color: white;
        transition: 0.3s;
    }

    button:hover {
        background: #FF9327;
    }

    small{
        color: #F97878;
    }
`

const Options = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
`

const FormWrapper = styled.div`
    width: 420px;
    display: flex;

    h2{
        text-align: center;
    }

    input{
        height: 28px;
        border-radius: 6px;
        background: #FCFCFC;
        border: 2px solid #FCFCFC;
        font-size: 18px;
        color: #3D3D3D;
        transition: 0.5s;
    }

    input:hover {
        border: 2px solid #E8E8E8;
        background: white;
    }

    input:focus {
        border: 2px solid #664FCC;
        background: white;
        outline: none;
    }

    button{
        height: 45px;
        border-radius: 6px;
        background: #FF8C27;
        margin-top: 15px;
        font-size: 18px;
    }
`