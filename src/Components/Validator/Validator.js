import React from 'react';

const Validator = props => {
    let textLength = props.inputLength;
    let validatorValue, valid = true;
    if (textLength > 20) {
        validatorValue = 'Too long. 20 letters maximum.';
        valid = false;
    }
    if (textLength < 21 && textLength > 4) {
        validatorValue = 'Keep it going';
    }
    if (textLength < 5) {
        validatorValue = '5 letters minimum';
        valid = false;
    }
    let colorString = typeof textColor;

    const styling = {
        color: `${valid ? 'green' : 'red'}`
    }

return (
    <div>
        <small style={styling}>{`${textLength !== 0 ? validatorValue : 'Type in the field'}`}</small>
    </div>
)
};

export default Validator;