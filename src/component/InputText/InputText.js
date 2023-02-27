import React from "react";

const InputText = ({ inputValue, setInputValue, error }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Add todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="rounded-border"
      ></input>
      {error && (
        <p className="error-message">Please type at least three characters.</p>
      )}
    </>
  );
};

export default InputText;
