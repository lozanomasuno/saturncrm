import React from "react";
import "./RegisterPage.css";

export const RegisterPage = () => {
  return (
    <>
      <div className ="login-page">
        <div className ="form">
          <form className ="register-form">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className ="message">
              Already registered? <a href="/auth/login">Sign In</a>
            </p>
          </form>          
        </div>
      </div>
    </>
  )
}
