import React from 'react';

const FormComponent = props => (
    <form onSubmit={props.onFormSubmit}>
        <h1>My Form Example</h1>
        <div>
            <textarea onChange={props.onTextChange}>
                {props.text}
            </textarea>
        </div>
        <div>
            <input type="submit" value="Submit" />
        </div>
    </form>
);

export default FormComponent;