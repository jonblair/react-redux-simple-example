import React from 'react';
import './formComponent.css';

const FormComponent = props => (
    <form onSubmit={(event) => {
        event.preventDefault();
        props.submitAction();
        alert(props.text);
    }}>
        <h2>With Redux-Lazy</h2>
        <br/>
        <div className="textBody">
            <div>
                OnChange: <br/>
                <textarea className="textarea" placeholder="Open the developer console and enter some text" cols="120" rows="10"
                    onChange={event => props.textAction({ text: event.target.value })}
                    value={props.text}
                />
            </div>
            <br/>
            <div className="onChangeDelay">
                OnKeyUp with Delay: <br/>
                <textarea placeholder="Open the developer console and enter some text" cols="120" rows="10"/>
            </div>
        </div>
        <br/>
        <div>
            <input type="submit" value="Submit" />
        </div>
    </form>
);

export default FormComponent;