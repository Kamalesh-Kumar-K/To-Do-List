import { useRef, useState } from 'react';
import './CSS/Todo.css';
import { useEffect } from 'react';
import ToDoItems from './ToDoItems';

let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputref = useRef(null);

  function add() {
    setTodos([...todos, { no: count++, text: inputref.current.value, display: '' }]);
    inputref.current.value = '';
    localStorage.setItem("todos_count",count)
  }
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(storedTodos || []);
    count = localStorage.getItem("");
  }, []);
  
  

  useEffect(() => {
    
    setTimeout(()=>{
      console.log(todos);
    localStorage.setItem("todos",JSON.stringify(todos))

    },100)
  }, [todos]);

  return (
    <div className='todo'>
      <div className='todo-header'>To-Do List</div>
      <div className='todo-add'>
        <input ref={inputref} type='text' placeholder='Add Your Task' className='todo-input' />
        <button onClick={() => add()} className='todo-addbtn'>
          ADD
        </button>
      </div>
      <div className='todo-list'>
        {todos.map((item) => {
          return <ToDoItems no={item.no} setTodos={setTodos}display={item.display} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
