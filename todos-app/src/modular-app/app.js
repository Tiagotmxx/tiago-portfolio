import { useState } from "react";

import List from "./list";
import Form from "./form";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: true },
    { id: 2, text: "Seek a job", done: false },
    { id: 3, text: "Forget everything" },
  ]);

  const handleSubmit = (text) => {
    const maxId = todos.length === 0 ? 0 : todos[todos.length - 1].id;
    //const maxId = todos.length ? todos[todos.length - 1].id : 0;

    setTodos([...todos, { id: maxId + 1, text, done: false }]);
  };

  const handleSpanClick = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleButtonClick = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <List
        todos={todos}
        onSpanClick={handleSpanClick}
        onButtonClick={handleButtonClick}
      />
    </>
  );
}
