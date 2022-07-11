import React, { useState } from "react";

const PasswordShowHide = ({ field, form }) => {
  const [showHidePassword, changeShowHidePassword] = useState(false);
  const hasError = form.touched[field.name] && form.errors[field.name];

  return (
    <div className="input-container">
      <input
        type={showHidePassword ? "text" : "password"}
        {...field}
        className={hasError ? "input-error input-field" : "input-field"}
      />
      <span
        onClick={() => changeShowHidePassword(!showHidePassword)}
      >
        {`${showHidePassword ? "Hide" : "Show"} password`}
      </span>
    </div>
  );
};

export default PasswordShowHide;