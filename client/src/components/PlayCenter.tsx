import React from "react";
import "./css/playCenter.css";
import Game from "./Game";
export default function PlayCenter() {
  return (
    <div className="play_center_container">
      <div className="game_layout">
        <Game></Game>
      </div>
      <div></div>
    </div>
  );
}
