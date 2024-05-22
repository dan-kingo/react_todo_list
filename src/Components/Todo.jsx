import { useState } from "react";

function Todo() {
  const [items, setItems] = useState([]);

  const [inputText, setInputText] = useState("");

  let handleChange = (e) => {
    const newInput = e.target.value;
    setInputText(newInput);
  };
  let addTodo = () => {
    if (inputText.trim() !== "") {
      setItems((i) => [...i, inputText]);
      setInputText("");
    }
  };

  let deleteTodo = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2>ToDo - List</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="type a todo"
          onChange={handleChange}
          value={inputText}
        />{" "}
        <button type="button" onClick={addTodo}>
          Add
        </button>
      </div>
      <ol className="todo-list">
        {items.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button className="delete-utton" onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
