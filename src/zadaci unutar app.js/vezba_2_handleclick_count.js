import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>You clicked button {count} times</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;

// -----------------------------------------------
// primer 2 bez useState-a, :

// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {

//    // const [count, setCount] = useState(0);
//     let count = 0
//     const handleClick = () => {
//       // setCount(count + 1);
//       count = count + 1
//       console.log(count)
//     };

//     return (
//       <div>
//         <h1>You clicked button {count} times</h1>
//         <button onClick={handleClick}>Click</button>
//       </div>
//     );
//   }

// export default App;
