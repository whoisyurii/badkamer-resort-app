"use client";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={(c) => setCount(c + 1)}>Count: {count}</button>
    </div>
  );
}
