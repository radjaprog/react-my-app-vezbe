import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "John";
  const video = "video";
  const surname = "";
  const age = 17;

  return (
    <div>
      {name && <p>{name}</p>}
      {video && <p>{video}</p>}
      {surname && <p>{surname}</p>}
      {age >= 18 ? <p>Adult</p> : <p>A minor</p>}
    </div>
  );
}
export default App;
