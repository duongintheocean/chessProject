import React from "react";
import "./css/sideBar.css";
import chessLogo from "../img/chessLogo-removebg-preview.png";

export default function SideBar() {
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
    </div>
  );
}
