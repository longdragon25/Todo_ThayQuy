import { add_todo, change_focus, submit_todo } from "../contants";

export const addTaskAction = (newTask) => {
  return {
    type: add_todo,
    newTask,
  };
};

export const submitTaskAction = (color) => {
  return {
    type: submit_todo,
    color,
  };
};

export const changeFocus = (taskId) => {
  return {
    type: change_focus,
    taskId,
  };
};
