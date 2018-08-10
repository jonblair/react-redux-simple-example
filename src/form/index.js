import React from 'react';

import FormComponent from './formComponent';
import rl from './rl';

const Form = rl.Container(FormComponent);

const MyForm = () => <Form />;

export default MyForm;