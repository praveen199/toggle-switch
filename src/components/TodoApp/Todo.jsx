import React, { useEffect, useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./Todo.css";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDataTime] = useState("");

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
    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDataTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToDelete = (value) => {
    console.log(task);
    //console.log(event)
    const updateTask = task.filter((currentTask) => currentTask !== value);
    setTask(updateTask);
  };

  return (
    <>
      {/* <section className="todo-container"> */}
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
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
          {task.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <button className="check-btn">
                <MdCheck />
              </button>
              <button
                className="delete-btn"
                onClick={() => handleToDelete(item)}
              >
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>
      {/* </section> */}
    </>
  );
};
