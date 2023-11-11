import React from "react";
import { Outlet } from "react-router-dom";
import "./css/loginSignup.css"
import chessLogo from "../img/chessLogo.png";
export default function LoginBackground() {
  return (
    <div className="login_signup_container">
      <div className="chess_logo">
        
        <img src={chessLogo} alt="" />
      </div>
      <div className="login_signup_content">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
