import { useState } from 'react';
import './Forms.css';

export const InputElement = ({
  type,
  labelName,
  id,
  value,
  name,
  onChange,
  htmlFor,
  placeholder,
  span,
}) => {
  return (
    <label className='label-element'>
      {labelName}
      <input
        className='input-element'
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export const InputPassword = ({
  type,
  labelName,
  id,
  value,
  name,
  onChange,
  htmlFor,
  placeholder,
  span,
}) => {
  const [togglePassword, setTogglePassword] = useState(true);
  return (
    <label className='label-element'>
      {labelName}
      <div className='flex input-element'>
        <input
          className='input-password'
          type={togglePassword ? 'password' : ''}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <span onClick={() => setTogglePassword(!togglePassword)}>👀</span>
      </div>
    </label>
  );
};

export const TextareaElement = ({
  type,
  labelName,
  id,
  value,
  name,
  onChange,
  placeholder,
}) => {
  return (
    <label className='label-element'>
      {labelName}
      <textarea
        className='textarea-element'
        cols='100'
        rows='10'
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};
