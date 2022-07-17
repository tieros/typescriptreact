import React, {useRef} from "react";
import './NewTodo.css';

type NewTodoProps = {
    onAddTodo: (text: string) => void;
}

const NewTodo: React.FC <NewTodoProps> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    }

    return (
    <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
            <label htmlFor="todo-input">Todo</label>
            <input type='text' id='todo-input' ref={textInputRef} />
        </div>
        <button>Add Todo</button>
    </form>
)}

export default NewTodo;