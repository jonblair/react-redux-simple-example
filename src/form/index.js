import React from 'react';
import FormComponent from './formComponent';
import rl from './rl';

const FormContainer = rl.Container(FormComponent);
const MyForm = () => <FormContainer />;

export default MyForm;