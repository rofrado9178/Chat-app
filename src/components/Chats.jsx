import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();
  console.log("this is user", user);
  const [loading, setLoading] = useState();

  const logOut = async () => {
    await auth.signOut();
    history.push("/");
    return () => clearInterval(user);
  };

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    console.log("this is data from getfile", data);
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        header: {
          "project-id": "6d673c3c-c0f3-43f8-b557-3d59f31d71c8",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users", formdata, {
              headers: {
                "PRIVATE-KEY": "37d52b41-bd01-4023-8bce-39cfc19ce1c6",
              },
            })
            .then(() => setLoading(false))
            .catch((err) => console.log(err));
        });
      });
  }, [user, history]);

  if (!user || loading) return <p>Loading</p>;

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
        projectID="6d673c3c-c0f3-43f8-b557-3d59f31d71c8"
        userName={user.email}
        userSecret={user.uid}
      />
    </article>
  );
};

export default Chats;
