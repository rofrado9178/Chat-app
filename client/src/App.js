import "./App.css";
import io from "socket.io-client";
import Login from "./components/Login";
import { useState } from "react";
const socket = io.connect("http://localhost:3001");

function App() {
  const [id, setId] = useState();
  return (
    <div className="flex flex-col h-screen">
      {id}
      <Login setId={setId} />
    </div>
  );
}

export default App;
