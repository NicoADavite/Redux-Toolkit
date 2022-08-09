import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  console.log("testing signed commits");

  return (
    <>
      <Link to="/create">Crear Tarea</Link>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create" element={<TaskForm />} />
      </Routes>
    </>
  );
}

export default App;
