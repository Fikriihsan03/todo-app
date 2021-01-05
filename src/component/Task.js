import React from "react";
import "./Task.css";
const Task = ({ massage, id, setTask, currentTask, isDone }) => {
  const handleDelete = () => {
    const deletedTask = currentTask.filter((task) => task.id !== id);
    setTask(deletedTask);
  };
  const [toggledTrue, setToggled] = React.useState(isDone);
  return (
    <>
      <div className="container row d-flex justify-content-between">
        <i
          onClick={() => setToggled((prevtoggle) => !prevtoggle)}
          className={toggledTrue ? "fas fa-check-square" : "far fa-square"}
        ></i>
        <li>{massage}</li>
        <button
          onClick={() => handleDelete()}
          className=" fa fa-trash btn btn-primary"
        ></button>
      </div>
    </>
  );
};
export default Task;
