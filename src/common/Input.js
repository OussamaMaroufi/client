import React ,{useState}from 'react'
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
                // value = '',
                   ...others
               }) => {

    const [value,setValue] = useState('qedfqdf');
    return (
        <div className='input_container'>

            <label>
            {label}
            </label>
            <br/>
            <div className='input-field'>
                
                    {iconName && <img src={iconName} alt=""/>}
                
                
                <input
                
                    id={`input#${name}`}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    {...others}
                    onChange={(e)=>setValue(e.target.value)}
                    
                />
            </div>  
          {/* {error && <small className="form__error">{error}</small>} */}
        </div>
    );
};

export default Input;
