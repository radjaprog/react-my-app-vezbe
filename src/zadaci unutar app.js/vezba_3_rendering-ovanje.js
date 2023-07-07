import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const items = [
    { id: 1, title: "Buy groceries" },
    { id: 2, title: "Wash the dishes" },
    { id: 3, title: "Finish the ReactJS project" },
  ];

  return (
    <div>
      <h1>To do:</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
