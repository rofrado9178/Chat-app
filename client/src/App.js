import "./App.css";
import io from "socket.io-client";
import Login from "./components/Login";
import ChatFeeds from "./components/ChatFeeds";
import useLocalStorage from "./hooks/useLocalStorage";

const socket = io.connect("http://localhost:3001");

function App() {
  const [id, setId] = useLocalStorage("Id");
  return (
    <div className="flex flex-col h-screen">
      {id ? <ChatFeeds id={id} /> : <Login setId={setId} />}
    </div>
  );
}

export default App;
