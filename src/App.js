import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const hesaplama = useMemo( ()=>{ return uzunsurenHesaplama(count) } , [count] )

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Sayaç: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {hesaplama}
      </div>
    </div>
  );
}

const uzunsurenHesaplama = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default App;
