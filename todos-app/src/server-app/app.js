import { useEffect, useState } from "react";

import List from "./list";
import Form from "./form";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((body) => setTodos(body));
  }, []);

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
