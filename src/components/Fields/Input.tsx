import React from "react";

interface InputProps {
  label?: string;
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  value?: string;
  placeholder?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<InputProps> = ({
  label,
  prefix,
  suffix,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="input-wrap">
      {/* Label */}
      {label && (
        <label htmlFor={label} className="wrap-label">
          {label}
        </label>
      )}
      {/* Control group */}
      <div className="wrap-group">
        {/* Prefix */}
        {prefix && <div className="group-prefix">{prefix}</div>}
        {/* Input */}
        <input
          type="text"
          className="group-control"
          placeholder={placeholder}
          id={label}
          value={value}
          onChange={onChange}
        />
        {/* Suffix */}
        {suffix && <div className="group-suffix">{suffix}</div>}
      </div>
    </div>
  );
};

export default Input;
