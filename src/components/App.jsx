import React from "react";
import Login from "./Login";
import Chats from "./Chats";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/AuthContext";

// import Login from "./Login"

function App() {
  return (
    <main>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </main>
  );
}

export default App;
