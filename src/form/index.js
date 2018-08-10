import React, { Component } from 'react';
import FormContainer from './formContainer';
import FormComponent from './formComponent';

const Form = FormContainer(FormComponent);

class MyForm extends Component {
    render() {
        return (
            <Form />
        );
    }
}


export default MyForm;