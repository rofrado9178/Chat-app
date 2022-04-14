import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <article id="login-page">
      <aside id="login-card">
        <h2>Welcome to Chit-Chat</h2>
        <aside className="login-button google">
          <GoogleOutlined className="sign-in" />
          Sign in with Google
        </aside>
        <br />
        <br />
        <aside className="login-button facebook">
          <FacebookOutlined className="sign-in" />
          Sign in with Facebook
        </aside>
      </aside>
    </article>
  );
};

export default Login;
