import './App.css';


function todoFrom(props) {
 
  function changeTodoTitle(val) {
    props.setTodoTitle(val);
  }
  
  return (
    <form>
          <input onChange={(e) => changeTodoTitle(e.target.value)} value={props.todoTitle} placeholder='Please Enter a Todo title' type="text" name="todo" />
          <button onClick={(e) => {
            e.preventDefault();
            props.addTodo(props.todoTitle);
            props.setTodoTitle("")
          }} >
            Add Todo
          </button>
        </form>
  );
}
export default todoFrom;