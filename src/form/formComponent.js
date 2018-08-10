import React from 'react';
import './formComponent.css';

const FormComponent = props => (
    <form onSubmit={(event) => {
        event.preventDefault();
        props.submitAction();
        alert(props.text);
    }}>
        <h2>With Redux-Lazy</h2>
        <div>
            <textarea className="textarea" placeholder="Open the developer console and enter some text" cols="100" rows="10"
                onChange={event => props.textAction({ text: event.target.value })}
                value={props.text}
            />
        </div>
        <div>
            <input type="submit" value="Submit" />
        </div>
    </form>
);

export default FormComponent;