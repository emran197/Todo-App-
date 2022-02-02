import './App.css';

function Todolist(props) {
     
    return (

        <ul>
            {props.todoList.map((todo) => (
                <li>
                    <span>{todo.title}</span>
                    <button className='edit'><i class="fa fa-pencil"></i></button>
                    <button className='delete' onClick={() => {
                        const newTodoList = props.todoList.filter((item) => item.id !== todo.id);
                        props.setTodoList(newTodoList);                        
                    }}><i class="fa fa-trash"></i></button>
                </li>
            ))}
        </ul>
    )
}
export default Todolist;