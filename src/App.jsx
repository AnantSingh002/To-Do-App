import { useState } from 'react'
import './App.css'

function App() {
  const[note,setNote] = useState('');
      const[task,setTask] = useState([]);
  
      function handelClick(){
          setTask([...task,note]);
  
      }

      function handleDelete(index) {
        const newTask = [...task];
        newTask.splice(index, 1);
        setTask(newTask);
      }
    return (
      <>
      <div>
        <h1>To-Do Application </h1>
        <input type="text" value={note} onChange={(e) => setNote(e.target.value)} className="border p-2 rounded" />
        <button onClick={handelClick} >Add note</button>
      </div>
  
      <ul>
          {task.map((elem , index) => {
              return <li key={index}>
               <span>{elem}</span>
               <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
          })}
      </ul>
  
      </>
    )
}

export default App
