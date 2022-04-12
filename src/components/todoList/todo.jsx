import React, {useState} from 'react'


export default function TodoList() {

    const todoList = [
        {
            "id": 1,
            "name": "Think a to-do",
            "completed": false
        },
        {
            "id": 2,
            "name": "Write the to-do",
            "completed": false
        },
        {
            "id": 3,
            "name": "Click add button",
            "completed": false
        },
        {
            "id": 4,
            "name": "Complete the to-do",
            "completed": false
        }, {
            "id": 5,
            "name": "Click cancel button",
            "completed": false
        }
    ]

    const [todos, setTodos] = useState(todoList)
    const [newTodo, setNewTodo] = useState("")

    const onComplete = () => {
        setTodos(todos.map(t => (t.id === todos.id ? {
            ...t,
            completed: !t.completed
        } : t)))
    }

    const updateNewtask = e => {
        setNewTodo(e.target.value)
    }
    const createNewtask = () => { // if name is empty dont create the tasks
        if (newTodo === "") 
            return
        
        // create a new task
        setTodos([
            ...todos, {
                id: todos.length + 1,
                name: newTodo,
                completed: false
            }
        ])
        setNewTodo("")

    }
    // delete task
    const deleteTask = (id) => {
        setTodos(todos.filter(t => t.id !== id))
    }


    return (
        <div className="container">
            {/*slider with the tasks */}
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Todo List: you have {todos.filter(t => !t.completed).length} tasks.</h5>
                            <div className="card-text">
                                <ul className="list-group">
                                    {
                                    todos.map(t => (
                                        <li className="list-group-item"
                                            key={
                                                t.id
                                        }>
                                            <div className="row">
                                                <div className="col-md-8">
                                                    {
                                                    t.name
                                                } </div>
                                                <div className="col-md-4">
                                                    <button className="btn btn-sm btn-outline-success"
                                                        onClick={
                                                            () => deleteTask(t.id)
                                                    }>Delete</button>

                                                </div>
                                            </div>
                                        </li>
                                    ))
                                } </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*add new task */}
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Add new task</h5>
                            <div className="card-text">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Add new task" aria-label="Add new task" aria-describedby="basic-addon2"
                                        value={newTodo}
                                        onChange={updateNewtask}/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button"
                                            onClick={createNewtask}>Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
