import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase from "firebase/app";
import { auth } from "../firebase";

const Login = () => {
  return (
    <article id="login-page">
      <aside id="login-card">
        <h2>Welcome to Chit-Chat</h2>
        <aside
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined className="sign-in" />
          Sign in with Google
        </aside>
        <br />
        <br />
        <aside
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined className="sign-in" />
          Sign in with Facebook
        </aside>
      </aside>
    </article>
  );
};

export default Login;
