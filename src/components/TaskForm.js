// import { useDispatch } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";

function TaskForm() {
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTask({
        id: uuid(),
        ...task,
      })
    );
  };

  return (
    <>
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={task.title}
          onChange={handleChange}
        />

        <br />

        <textarea
          name="description"
          placeholder="description"
          value={task.description}
          onChange={handleChange}
        ></textarea>

        <br />

        <button>Save</button>
      </form>
    </>
  );
}

export default TaskForm;
