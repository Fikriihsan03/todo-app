import React from "react";
import Task from "../component/Task";

const TasksList = ({ tasks, setTask }) => {
  return tasks.map((task) => {
    return (
      <Task
        massage={task.massage}
        key={task.id}
        id={task.id}
        isDone={task.isDone}
        setTask={setTask}
        currentTask={tasks}
      />
    );
  });
};
export default TasksList;
