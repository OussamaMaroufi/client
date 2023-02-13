import React from 'react'
import "../styles/common/_input.css"

const Input = ({
                iconName = '',
                className = '',
                error = '',
                hideLabel = false,
                label = '',
                name,
                placeholder = '',
                type = 'text',
                value = '',
                   ...others
               }) => {

    return (
        <div className='input_container'>

            <label>
            {label}
            </label>
            <br/>
            <div className='input-field'>
                <img src={iconName} alt=""/>
                <input
                
                    id={`input#${name}`}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    {...others}
                />
            </div>  
          {/* {error && <small className="form__error">{error}</small>} */}
        </div>
    );
};

export default Input;
