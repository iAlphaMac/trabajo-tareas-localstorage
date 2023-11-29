import "./App.css";
import { useState, useEffect } from "react";
import TaskCreator from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { ListedTask } from "./components/ListedTask";

function App() {
  const [taskItem, settaskItem] = useState([]);
  const [completed, setcompleted] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      settaskItem(JSON.parse(data));
    }
  }, []);

  const cleanTask = () => {
    settaskItem(taskItem.filter(task => !task.done))
    setcompleted(false)
  } 

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItem));
  }, [taskItem]);

  function createNewTask(taskName) {
    if (!taskItem.find((task) => task.name === taskName)) {
      settaskItem([...taskItem, { name: taskName, done: false }]);
    }
    //Guarda los Datos
    //settaskItem([...taskItem, {name: taskName, done:false}])
  }

  const toggleTask = (task) => {
    settaskItem(
      taskItem.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <main className="bg-dark vh-100 text-white main-image">
      <div className="container col-md-4 offset-md-2 py-4">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable task={taskItem} toggleTask={toggleTask} />
      <ListedTask 
      isChecked={completed}
      setcompleted={(checked) => setcompleted(checked)}
      cleanTask={cleanTask}
    
      />
      {completed === true && (
        <TaskTable
          task={taskItem}
          toggleTask={toggleTask}
          completed={completed}
        />
      )}

      </div>
      
    </main>
  );
}

export default App;
