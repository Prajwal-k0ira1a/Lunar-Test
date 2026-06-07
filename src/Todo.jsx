import React from 'react'
import { useState } from 'react';
const InputHandling = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [id,setId]=useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

// Add Todo
  const addTodo = () => {
    if (!title.trim()) return;

    const newTodo = {
      id,
      title,
      description,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setId("")
    setDescription("");
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )
    );
  };

  // Start Edit
  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
  };

  // Save Edit
  const saveEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              title: editTitle,
              description: editDescription,
            }
          : todo
      )
    );

    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
  };

  
  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
  };


  return (
   <> 
<p> <strong> Todo App </strong>  </p>
  <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Todo App</h1>

<input type='number'>

</input>
      <input
        type="text"
        placeholder="Todo Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <textarea
        placeholder="Todo Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="4"
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <button onClick={addTodo}>Add Todo</button>

      <hr />

      {todos.length === 0 ? (
        <p>No todos yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo) => (
            <li
            key={todo.id}
            style={{
              border: "1px solid #ccc",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
              >
              
              {editingId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px",
                      marginBottom: "10px",
                    }}
                  />

                  <textarea
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    rows="3"
                    style={{
                      width: "100%",
                      padding: "8px",
                      marginBottom: "10px",
                    }}
                  />

                  <button onClick={() => saveEdit(todo.id)}>Save</button>
                  <button
                    onClick={cancelEdit}
                    style={{ marginLeft: "10px" }}
                    >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h3
                    style={{
                      textDecoration: todo.isCompleted
                      ? "line-through"
                      : "none",
                    }}
                    >
                    {todo.title}
                  </h3>

                  <p>{todo.description}</p>

                  <p>
                    Status:{" "}
                    {todo.isCompleted ? " Completed" : " Pending"}
                  </p>

                  <button onClick={() => toggleComplete(todo.id)}>
                    {todo.isCompleted
                      ? "Mark Pending"
                      : "Mark Complete"}
                  </button>

                  <button
                    onClick={() => startEdit(todo)}
                    style={{ marginLeft: "10px" }}
                    >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    style={{ marginLeft: "10px" }}
                    >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>

 <div>

 </div>
</> 
  )
}

export default InputHandling