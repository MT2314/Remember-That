import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'


function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer);
    }
    getTasks()
  }, [])

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }


  //Add task
  const addTask = async (task) => {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task)
    };
    try {
      const fetchResponse = await fetch(`http://localhost:5000/tasks`, settings);
      const data = await fetchResponse.json();
      setTasks([...tasks, data]);

    } catch (error) {
      return error;
    }
  }



  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}` , {
    method:'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body:JSON.stringify(updTask)
    })

    const data = await res.json();

    setTasks(tasks.map((task) =>
     task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      
        <>
        <div style = {{display:'inline'}}>
         {showAddTask && <AddTask  onAdd={addTask} />}
         </div> 
        <div style = {{display:'inline'}}>
      {tasks.length > 0 ? <Tasks style = {{display:'inline'}} tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
      </div>
        </>
    <Footer />
    </div>
  );
}



export default App;

