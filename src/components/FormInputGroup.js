import React from 'react';

export const FormInputGroup = ({
    text,
    icon,
    placeholder,
    value,
    onKeyUp,
    onInput,
    readOnly = false,
  }) => {
    return (
      <div className="flex flex-col md:flex-row mb-3 items-center">
        <span className="inline-block px-2 py-1 border flex items-center w-48">
          {text}  
          {icon} :
        </span>
        <input
          type="number"
          className="md:w-64 px-2 py-1 border"
          placeholder={placeholder}
          value={value}
          onInput={onInput}
          onKeyUp={onKeyUp}
          readOnly={readOnly}
        />
      </div>
    );
  };