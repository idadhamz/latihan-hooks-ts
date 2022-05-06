import { useState } from "react";

const LatihanUseState = () => {
  // one state
  const [count, setCount] = useState(0);

  // multiple state
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "Learn Hooks",
    },
    {
      id: 2,
      todo: "Learn TS",
    },
  ]);

  return (
    <>
      <div>
        <h1>Jumlah nilai : {count} </h1>
        <button onClick={() => setCount(count + 1)}>Tambah nilai</button>
      </div>
      <div>
        <ul>
          {todos.map((item) => (
            <li>{item.todo}</li>
          ))}
        </ul>
        <button onClick={() => setTodos([...todos, { id: 3, todo: "Test" }])}>
          Tambah Todo
        </button>
      </div>
    </>
  );
};

export default LatihanUseState;
