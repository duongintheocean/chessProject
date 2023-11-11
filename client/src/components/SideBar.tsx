import React from "react";
import "./css/sideBar.css";
import chessLogo from "../img/chessLogo-removebg-preview.png";
import { useNavigate } from "react-router-dom";
export default function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="side_bar_container">
      <div className="containe_home_logo_notification">
        <div className="containe_home_logo">
          <img className="home_logo" src={chessLogo} alt="" />
        </div>
        <div className="containe_home_notification">
          <span></span>
        </div>
      </div>
      <div className="selection_container">
        <div>Chơi</div>
        <div>Câu đố</div>
      </div>
      <div className="account_bar">
        <button
          className="sign_up_button"
          onClick={() => {
            navigate("/loginAndSignup/signup");
          }}
        >
          Đăng kí
        </button>
        <button
          className="log_in_button"
          onClick={() => {
            navigate("/loginAndSignup");
          }}
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
}
