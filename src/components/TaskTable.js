import { TaskRow } from "./TaskRow";

export const TaskTable = ({ task, toggleTask, completed = false }) => {
  const taskTableRows = (doneValue) => {
    
    return task
    .filter(task => task.done === doneValue)            
    .map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    ));
  };
  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tareas:</th>
        </tr>
      </thead>
      <tbody>
      {
            taskTableRows(completed)  
      }
      </tbody>
    </table>
  );
};
