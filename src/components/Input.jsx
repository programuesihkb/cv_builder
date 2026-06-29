import React from 'react';

const Input = ({ label, type, name, placeholder, value, onChange, checked, className }) => {
    return (
        <div className={`input-group${className ? ` ${className}` : ''}`}>
            <label htmlFor={name}>{label}</label>
            {type === 'textarea' ? (
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    rows={4}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                />
            )}
        </div>
    );
};

export default Input;