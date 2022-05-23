import React from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import data from '../data/tasks.json'
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
        <TaskHeader></TaskHeader>
      {/* Add Task */}
      <AddTask data={data}></AddTask>
      {/* Tasks */}
      <Task></Task>
    </div>
  );
};

export default TaskApp;
