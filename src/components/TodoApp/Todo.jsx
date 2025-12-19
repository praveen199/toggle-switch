import React, { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./Todo.css";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTak] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
    setTak((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };
  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
        </header>

        <section className="form">
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                type="text"
                className="todo-input"
                value={inputValue}
                onChange={(event) => handleInputChange(event.target.value)}
              />
            </div>

            <div>
              <button type="submit" className="todo-btn">
                Add Task
              </button>
            </div>
          </form>
        </section>
        <section className="myUnorderedList">
          <ul>
            {task.map((item, index) => {
              <li ley="index">
                <span>{item}</span>
                <button className="check-btn"><MdCheck /></button>
                <button className="delete-btn"><MdDeleteForever /></button>
              </li>;
            })}
          </ul>
        </section>
      </section>
    </>
  );
};
