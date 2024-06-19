import './CSS/ToDoItems.css'
import tick from'./Assests/tick.png';
import not_tick from'./Assests/not_tick.png';
import cross from'./Assests/cross.png';

const ToDoItems = ({no,display,text,setTodos}) => {
  function deleteTodo(no){
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((td)=>td.no!==no);
    setTodos(data);
    
  }





  function toggle(no){
      let data = JSON.parse(localStorage.getItem("todos"));
      for(let i =0;i<data.length;i++){
        if(data[i].no===no){
          if(data[i].display===""){
            data[i].display= "line-through";

          }
          else{
            data[i].display = "";
          }
          break;
        }
      }
      setTodos(data);

  }
  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display===""?<img src={not_tick} alt=''/>: <img src={tick} alt=''/>}
        <div className='todoitems-text'>
          {text}
        </div>
      </div>
      <img className='todoitems-cross-icon' onClick={()=>{deleteTodo(no)}} src={cross} alt=''/>
    </div>
  )
}
export default ToDoItems