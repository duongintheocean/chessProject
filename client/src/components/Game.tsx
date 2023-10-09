import React from "react";
import "./css/game.css";
import avartaImg from "../img/User-avatar.svg.png";
export default function Game() {
  return (
    <div className="game_container">
      <div className="player">
        <div className="player_infomation">
          <div className="avarta_img">
            <img src={avartaImg} alt="" />
          </div>
          <div className="player_name">
            doi thu
          </div>
        </div>
      </div>
      <div className="chess_board">
        <div></div>
      </div>
      <div className="player">
        <div className="player_infomation">
          <div className="avarta_img">
            <img src={avartaImg} alt="" />
          </div>
          <div className="player_name">
            ban
          </div>
        </div>
      </div>
    </div>
  );
}
