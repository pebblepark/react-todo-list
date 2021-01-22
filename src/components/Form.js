import React from 'react';
import './Form.css';

// 4 props
// 1. value : input value
// 2. onCreate : button click event
// 3. onChange : value change event
// 4. onKeyPress : key press event from input
//                *For this event, when the Enter key is pressed, it executes the same action as onCreate.*

const Form = ({value, color, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color: color}}/>
            <div class="create-button" onClick={onCreate}>
                Add
            </div>
        </div>
    );
};

export default Form;