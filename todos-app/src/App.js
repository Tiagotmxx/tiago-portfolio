import { useState } from "react";

import classes from "./App.module.css";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: true },
    { id: 2, text: "Seek a job", done: false },
    { id: 3, text: "Forget everything" },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const maxId = todos.lenght ? todos[todos.length - 1].id : 0;

    setTodos([...todos, { id: maxId + 1, text: "Go to sleep", done: false }]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="What next?" />
        <button>Submit</button>
      </form>
      <ul>
        {todos.map(({ id, text, done }) => (
          <li key={id} className={done ? classes.done : null}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}
