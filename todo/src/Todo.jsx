import React, { useState } from "react";
import "./Todo.css"
const Todo = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [editMode, setEditMode] = useState(false);//edit mode off hai
    const [editId, setEditId] = useState(null)
    const [editValue, setEditValue] = useState("")

    const addTodo = () => {
        if (inputValue.trim() !== "") {
            const newTodo = {
                id: new Date().getTime(),
                text: inputValue,
            }
            setTodos([...todos, newTodo]);//show previous and new added todo
            setInputValue('');//remove input value after showing in list

        }
    }
    //delete Todo
    const deleteTodo = (id) => {
        const updateTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updateTodos);
    }
    //update Todo
    const edit = (id, text) => {
        setEditMode(true);
        setEditId(id);
        setEditValue(text);
    }
    const updateAfterEditTodo = () => {
        const updateAfterEditTodos = todos.map((todo) => {
            if (todo.id === editId) {
                return { ...todo, text: editValue };
            } return todo;
        })
        setTodos(updateAfterEditTodos)
        setEditMode(false)
        setEditId(null)
        setEditValue('')
    }
    return (
        <div className="todo-container">
            <h2>Todo List</h2>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            {
            editMode ?(
                <div>
                    <input type="text" 
                    value={editValue}
                    onChange={(e)=> setEditValue(e.target.value)}/>
                    <button onClick={updateAfterEditTodo}>Update</button>
                    </div>
            ):(
                <button onClick={addTodo}>Add</button>
            )         
             }
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <div>
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        <button onClick={()=>edit(todo.id,todo.text)}>Edit</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Todo