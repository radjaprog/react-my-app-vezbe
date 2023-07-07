import React, { useState } from "react";
import { Link } from "react-router-dom";

//import Videos from "./Videos";
//import "./App.css";
export default function App() {
  return (
    // <div>
    // //   <Videos/>

    // </div>

    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/videos">video</Link>
        </li>
        <li>
          <Link to="/LOGIN">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
}
