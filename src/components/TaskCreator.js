import { useState } from "react";
import Swal from "sweetalert2";

const listConfirm = () => {(Swal.fire({
  title: "Su Tarea ha sido agregada",
  icon: "success",
  showCancelButton: false,
  confirmButtonColor: "#1BEB5E",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes!"
})
  )}

const TaskCreator = ( {createNewTask} ) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName)
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
      <input
        type="text"
        placeholder="Ingrese una nueva Tarea"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        className="form-control"
      />
      </div>
      <div className="col-3">
      <button 
      className="btn btn-sm btn-success"
      onClick={listConfirm} //esta agregado
      >Guardar Tarea</button>
      </div>
      
    </form>
  );
};

export default TaskCreator;
