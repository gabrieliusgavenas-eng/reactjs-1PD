import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(text) {
    const newTask = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  return (
    <section>
      <h1>Užduočių sąrašas</h1>

      <TaskForm onAdd={handleAddTask} />

      {tasks.length === 0 ? (
        <p>Užduočių dar nėra.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TaskList;