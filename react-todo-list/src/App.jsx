import { useEffect, useState } from 'react'
export default function App() {
  const [tasks, setTasks] = useState([])
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'))
    if (savedTasks) {
      setTasks(savedTasks)
    }
  }, [])

  const message = 'Please enter a task.'
  const addTask = (task) => {
    if (!task) return alert(message)
    localStorage.setItem('tasks', JSON.stringify([...tasks, task]))
    setTasks([...tasks, task])
  }

  return (
    
    <div>
      <h1>Todo List</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const task = formData.get('task')
        addTask(task)
        e.target.reset()
      }}>
        <input type="text" name="task" placeholder="Add a new task" className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white p-2">Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="border-b p-2">{task} <button onClick={() => removeTask(index)} className="text-red-500">Remove</button></li>
        ))}
      </ul>
    </div>
  )
}