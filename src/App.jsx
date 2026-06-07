import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [text,setText]= useState('');
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

 
const handleChange=(e)=>{
    setText(e.target.value);
    console.log(e.target.value)
};
  return (
    <>
  <strong>
    Counter App
    </strong>
    <br></br>
{/*  Button disable and Hide logic */}
      <section id="center">
       <label> Increement Button</label>
        <button
       className={count === 0 ? "hidden" : ""}
        disabled={count==0}
          onClick={() => setCount((count) => count - 1)}>&nbsp; -</button> 
<span> 
  <br></br>
</span>
       <label> Decreement Button</label>

        <button
          className="border-amber-300"
          onClick={() => setCount((count) => count + 1)}>&nbsp;+ </button>
      </section>

      <p>Count is {count}</p>
          {/* <input/> */}
          <br></br>
          <span>  Input Handling </span>
<br>
</br>
<label>Write Text</label> <input placeholder="Write any Text" className="bg-blue border-4"  type='text' value={text} onChange= {handleChange}>

</input>
<br></br>
<textarea className="border-amber-950" placeholder="Text will appear" rows="5" onChange= {handleChange} value={text}></textarea>
 
<br></br>
<br></br>

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

export default App
