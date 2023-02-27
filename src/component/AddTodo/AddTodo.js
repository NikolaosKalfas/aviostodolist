import React, { useState } from "react";
import { addNewTodo, submitAndUpdate } from "../../tools/tools";
import InputText from "../InputText/InputText";
import SubmitButton from "../SubmitButton/SubmitButton";

const AddTodo = ({ submitted }) => {
  const [value, setValue] = useState("");
  const [showErr, setShowErr] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.length < 3) {
      setShowErr(true);
    } else {
      setShowErr(false);
      submitAndUpdate(addNewTodo, submitted, value);
      setValue("");
    }
  };
  return (
    <form onSubmit={onSubmit} className="add-todo">
      <InputText inputValue={value} setInputValue={setValue} error={showErr} />
      <SubmitButton />
    </form>
  );
};

export default AddTodo;
