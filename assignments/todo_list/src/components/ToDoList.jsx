import react, { useState } from 'react';

const ToDoList = () => {

    const [newTask, setNewTask] = useState("");
    const [task, setTask] = useState([]);
    const [taskComplete, setTaskComplete] = useState(
        new Array(task.length).fill(false)
    );
    const [showDeleteTask, setShowDeleteTask] = useState(
        new Array(task.length).fill(false)
    );


    const createTask = (e) => {
        e.preventDefault();
        setTask([...task, newTask])
    }

    const completeTask = (position) => {
        const updateTaskState = task.map((item, index) =>
        index === position ? !item : item
        );
    }

    const deleteTask = (position) => {
        const filteredTasks = task.filter((item, i) => {
            return i != position;
        })
        setTask(filteredTasks)
        console.log(task);


    }

    return (
        <div>ToDo List!
            <form onSubmit = { createTask }>
                <label>Add Task:</label>
                <input type="text" onChange={(e) => setNewTask(e.target.value)} / >
                <input type="Submit" value="Add!" />
            </form>
            <ul>
                {task.map((item, i) => 
                <li key={i}> {item}
                <input type="checkbox" checked={ taskComplete[i] } onChange={ () => completeTask(i) } />
                {showDeleteTask
                ? <button onClick={() => deleteTask(i)}>Delete?</button>
                : null
                }
                </li> )}
            </ul>
        </div>
    )
}

export default ToDoList