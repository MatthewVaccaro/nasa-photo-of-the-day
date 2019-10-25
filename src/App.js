import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
//Component Imports
import List from "./components/List";

function App() {
  const [call, setCall] = useState([]);

  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
