import React from "react";
import "./LoginPage.css";

export const LoginPage = () => {
  return (
    <>
      <div className ="login-page">
        <div className ="form">
          <form className ="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p className ="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
