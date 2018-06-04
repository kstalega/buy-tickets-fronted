import React from 'react';

const Input = (props) => {
  const {
    type = 'text',
    className = 'form-control',
    placeholder,
    name,
    onChange,
    value
  } = props;
  return (
    <div className="form-group clearfix" style={{clear:'both'}}>
      <label htmlFor={name} className="col-sm-2 control-label">{placeholder}:</label>
      <div class="col-sm-5">
        <input
          type={type}
          className={className}
          placeholder={placeholder}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;
