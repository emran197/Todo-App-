import './App.css';
import TodoList from './todolist';
import TodoFrom from './todoFrom'
import { useState } from 'react';

function App(){
  const [todoTitle, setTodoTitle] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addTodo = (title) => {
    if (!title) {
      alert("Please provide a valid todo title")
    } else {
      const newTodo = {
        id: Date.now(),
        title: title
      }
      setTodoList([newTodo, ...todoList])
    }

  }
  return(
    <div className='todo'>
      <div className='todotitle'>
        <TodoFrom
          todoTitle ={todoTitle}
          setTodoTitle = {setTodoTitle}
          addTodo ={addTodo}
        />
      </div>
      <div className='todolist'>
        <TodoList
        todoList ={todoList}
        setTodoList ={setTodoList}
        />
      </div>

    </div>
  )
}
export default App;