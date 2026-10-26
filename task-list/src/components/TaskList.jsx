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

  function handleCompleteTask(id) {
  setTasks((previousTasks) =>
    previousTasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    )
  );
}

function handleDeleteTask(id) {
  setTasks((previousTasks) =>
    previousTasks.filter((task) => task.id !== id)
  );
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
            <TaskItem
  key={task.id}
  task={task}
  onComplete={handleCompleteTask}
  onDelete={handleDeleteTask}
/>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TaskList;