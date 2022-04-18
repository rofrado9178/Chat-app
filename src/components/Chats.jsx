import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();
  console.log("this is user", user);

  const logOut = () => {
    auth.signOut();
    history.push("/");
  };

  return (
    <article className="chats-page">
      <section className="nav-bar">
        <aside className="logo-tab">Chit-Chat</aside>
        <aside className="logout-tab" onClick={() => logOut()}>
          Logout
        </aside>
      </section>
      <ChatEngine
        height="calc(100vh)"
        projectId="
6d673c3c-c0f3-43f8-b557-3d59f31d71c8"
        userName="."
        userSecret="."
      />
    </article>
  );
};

export default Chats;
