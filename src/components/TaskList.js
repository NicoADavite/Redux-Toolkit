import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice"

function TaskList() {
  const taskState = useSelector((state) => state.tasks);

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
      {taskState.length === 0 && "No hay tareas"}
      {taskState.length > 0 &&
        taskState.map( (task, key) => {
          return (
            <div key={key}>
              <p>Nombre: {`${task.title}`}</p>
              <p>Descripción: {`${task.description}`}</p>
              <p>Estado: {`${task.completed ? "Completada" : "En proceso" }`}</p>
              <button onClick={() => handleDelete(task.id)}>DELETE</button>
              <br/>
            </div>
          );
        })}
    </div>
  );
}

export default TaskList;
