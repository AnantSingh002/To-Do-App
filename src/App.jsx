import { useState } from 'react'
import './App.css'

function App() {
  const [note, setNote] = useState('');
  const [task, setTask] = useState([]);

  function handleClick() {
    if (note.trim() === '') return;
    setTask([...task, { text: note, completed: false }]);
    setNote('');
  }

  function handleDelete(index) {
    const newTask = task.filter((_, i) => i !== index);
    setTask(newTask);
  }

  function handleCheckboxChange(index) {
    const updatedTasks = task.map((elem, i) =>
      i === index ? { ...elem, completed: !elem.completed } : elem
    );
    setTask(updatedTasks);
  }

  return (
    <>
      <div>
        <h1>To-Do Application</h1>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={handleClick}>Add note</button>
      </div>

      <ul>
        {task.map((elem, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={elem.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <span style={{ textDecoration: elem.completed ? 'line-through' : 'none' }}>
              {elem.text}
            </span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
