import { add_todo, change_focus, submit_todo } from "../contants";

const initialState = {
  todoList: [
    {
      id: "task-1",
      taskName: "TODO 1",
      done: false,
    },
    {
      id: "task-2",
      taskName: "TODO 2",
      done: false,
    },
    {
      id: "task-3",
      taskName: "TODO 3",
      done: false,
    },
  ],
  color: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case add_todo: {
      // console.log('todo',action.newTask)
      //Kiểm tra rổng
      if (action.newTask.taskName.trim() === "") {
        alert("Task name is required!");
        return { ...state };
      }
      //Kiểm tra tồn tại
      let taskListUpdate = [...state.todoList];
      let index = taskListUpdate.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );
      if (index !== -1) {
        alert("task name already exists !");
        return { ...state };
      }

      taskListUpdate.push(action.newTask);

      //Xử lý xong thì gán taskList mới vào taskList
      state.todoList = taskListUpdate;

      return { ...state };
    }

    case change_focus: {
      let taskListUpdate = [...state.todoList];
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);
      if (index !== -1) {
        if (taskListUpdate[index].done == false) {
          taskListUpdate[index].done = true;
        } else {
          taskListUpdate[index].done = false;
        }
      }
      return { ...state, todoList: taskListUpdate };
    }
    case submit_todo: {
      // let taskListUpdate = [...state.todoList];
      // taskListUpdate.map((todo) => {
      //   if (todo.focus == true) {
      //     todo.done = true;
      //     todo.color = action.color;
      //     state.todoDone.push(todo);
      //   }
      // });

      return { ...state, color: action.color };
    }

    default:
      return { ...state };
  }
};
