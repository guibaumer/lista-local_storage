import { useEffect, useState } from 'react'
import { useCreateTask } from './hooks/useCreateTask';
import { useDeleteTask } from './hooks/useDeleteTask';
import { useEditTask } from './hooks/useEditTask';

import { MdDelete } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";

import './App.css'

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [reload, setReload] = useState(false);
  const [deletedTask, setDeletedTask] = useState('');
  const [taskToEdit, setTaskToEdit] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!newTask) return;

    if(taskToEdit) {
      await useEditTask(newTask, taskToEdit);
    } else {
      const task = await useCreateTask(newTask);
      if(task === 'ERROR') {
        setError('Tarefa já existe.');
        return;
      }
    }

    setReload(!reload);

    setTaskToEdit('');
    setNewTask('');
    setDeletedTask('');
    setError('');
  }

  const handleDelete = async(e) => {
    const taskText = e.target.parentNode.parentNode.innerText.trim();

    const justDeletedTask = await useDeleteTask(taskText);

    setDeletedTask(justDeletedTask);
  }

  const handleEdit = async(e) => {
    const text = e.target.parentNode.parentNode.innerText;

    setNewTask(text);
    setTaskToEdit(text);
  }

  const handleUndo = async() => {
    const task = await useCreateTask(deletedTask);

    setDeletedTask('');
  }
  
  useEffect(() => {
    const storageTasks = JSON.parse(localStorage.getItem('tasks'));

    if(storageTasks) {
      setTasks(storageTasks);
    }

  }, [reload, deletedTask]);

  return (
    <>

      <section className='main-container'>
      
        <form onSubmit={handleSubmit}>
          <p>
            <input type="text" placeholder='Sua tarefa'
            onChange={(e) => setNewTask(e.target.value)} value={newTask} />
            <input type="submit" value='CRIAR' />
          </p>
        </form>

        <ul>
          {tasks && tasks.map((task) => (
            <li key={task}>
              {task}
              
              <p className='icons-p'>
                <AiTwotoneEdit className='edit' onClick={handleEdit} />
                <MdDelete className='delete' onClick={handleDelete} />
              </p>

            </li>
          ))}
        </ul>

        {deletedTask && (
          <p className='undo-p'>
            <button className='undo' onClick={handleUndo}>REFAZER</button>
          </p>
        )}

        {error && (
          <p>{error}</p>
        )}
        
      </section>
    </>
  )
}

export default App
