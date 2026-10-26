function TaskItem({ task, onComplete, onDelete }) {
  return (
    <li className={task.completed ? "task completed" : "task"}>
      <span>{task.text}</span>

      {task.completed && <strong> Atlikta </strong>}

      <button
        type="button"
        onClick={() => onComplete(task.id)}
        disabled={task.completed}
      >
        Pažymėti kaip atliktą
      </button>

      <button type="button" onClick={() => onDelete(task.id)}>
        Ištrinti
      </button>
    </li>
  );
}

export default TaskItem;