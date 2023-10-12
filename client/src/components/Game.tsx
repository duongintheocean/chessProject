import React, { useState } from "react";
import "./css/game.css";
import avartaImg from "../img/User-avatar.svg.png";
import Square from "./Square";
export default function Game() {
  const [chessSquare, setChessSquare] = useState([
    { chessPossition: { x: 1, y: 1 }, currentChess: null },
    { chessPossition: { x: 2, y: 1 }, currentChess: null },
    { chessPossition: { x: 3, y: 1 }, currentChess: null },
    { chessPossition: { x: 4, y: 1 }, currentChess: null },
    { chessPossition: { x: 5, y: 1 }, currentChess: null },
    { chessPossition: { x: 6, y: 1 }, currentChess: null },
    { chessPossition: { x: 7, y: 1 }, currentChess: null },
    { chessPossition: { x: 8, y: 1 }, currentChess: null },
    { chessPossition: { x: 1, y: 2 }, currentChess: null },
    { chessPossition: { x: 2, y: 2 }, currentChess: null },
    { chessPossition: { x: 3, y: 2 }, currentChess: null },
    { chessPossition: { x: 4, y: 2 }, currentChess: null },
    { chessPossition: { x: 5, y: 2 }, currentChess: null },
    { chessPossition: { x: 6, y: 2 }, currentChess: null },
    { chessPossition: { x: 7, y: 2 }, currentChess: null },
    { chessPossition: { x: 8, y: 2 }, currentChess: null },
    { chessPossition: { x: 1, y: 3 }, currentChess: null },
    { chessPossition: { x: 2, y: 3 }, currentChess: null },
    { chessPossition: { x: 3, y: 3 }, currentChess: null },
    { chessPossition: { x: 4, y: 3 }, currentChess: null },
    { chessPossition: { x: 5, y: 3 }, currentChess: null },
    { chessPossition: { x: 6, y: 3 }, currentChess: null },
    { chessPossition: { x: 7, y: 3 }, currentChess: null },
    { chessPossition: { x: 8, y: 3 }, currentChess: null },
    { chessPossition: { x: 1, y: 4 }, currentChess: null },
    { chessPossition: { x: 2, y: 4 }, currentChess: null },
    { chessPossition: { x: 3, y: 4 }, currentChess: null },
    { chessPossition: { x: 4, y: 4 }, currentChess: null },
    { chessPossition: { x: 5, y: 4 }, currentChess: null },
    { chessPossition: { x: 6, y: 4 }, currentChess: null },
    { chessPossition: { x: 7, y: 4 }, currentChess: null },
    { chessPossition: { x: 8, y: 4 }, currentChess: null },
    { chessPossition: { x: 1, y: 5 }, currentChess: null },
    { chessPossition: { x: 2, y: 5 }, currentChess: null },
    { chessPossition: { x: 3, y: 5 }, currentChess: null },
    { chessPossition: { x: 4, y: 5 }, currentChess: null },
    { chessPossition: { x: 5, y: 5 }, currentChess: null },
    { chessPossition: { x: 6, y: 5 }, currentChess: null },
    { chessPossition: { x: 7, y: 5 }, currentChess: null },
    { chessPossition: { x: 8, y: 5 }, currentChess: null },
    { chessPossition: { x: 1, y: 6 }, currentChess: null },
    { chessPossition: { x: 2, y: 6 }, currentChess: null },
    { chessPossition: { x: 3, y: 6 }, currentChess: null },
    { chessPossition: { x: 4, y: 6 }, currentChess: null },
    { chessPossition: { x: 5, y: 6 }, currentChess: null },
    { chessPossition: { x: 6, y: 6 }, currentChess: null },
    { chessPossition: { x: 7, y: 6 }, currentChess: null },
    { chessPossition: { x: 8, y: 6 }, currentChess: null },
    { chessPossition: { x: 1, y: 7 }, currentChess: null },
    { chessPossition: { x: 2, y: 7 }, currentChess: null },
    { chessPossition: { x: 3, y: 7 }, currentChess: null },
    { chessPossition: { x: 4, y: 7 }, currentChess: null },
    { chessPossition: { x: 5, y: 7 }, currentChess: null },
    { chessPossition: { x: 6, y: 7 }, currentChess: null },
    { chessPossition: { x: 7, y: 7 }, currentChess: null },
    { chessPossition: { x: 8, y: 7 }, currentChess: null },
    { chessPossition: { x: 1, y: 8 }, currentChess: null },
    { chessPossition: { x: 2, y: 8 }, currentChess: null },
    { chessPossition: { x: 3, y: 8 }, currentChess: null },
    { chessPossition: { x: 4, y: 8 }, currentChess: null },
    { chessPossition: { x: 5, y: 8 }, currentChess: null },
    { chessPossition: { x: 6, y: 8 }, currentChess: null },
    { chessPossition: { x: 7, y: 8 }, currentChess: null },
    { chessPossition: { x: 8, y: 8 }, currentChess: null },
  ]);
  return (
    <div
      className="game_container"
      onClick={() => {
        console.log(chessSquare.length);
      }}
    >
      <div className="player">
        <div className="player_infomation">
          <div className="avarta_img">
            <img src={avartaImg} alt="" />
          </div>
          <div className="player_name">doi thu</div>
        </div>
      </div>
      <div className="chess_board">
        {chessSquare.map((element) => {
          return <Square atr={element}></Square>;
        })}
      </div>
      <div className="player">
        <div className="player_infomation">
          <div className="avarta_img">
            <img src={avartaImg} alt="" />
          </div>
          <div className="player_name">ban</div>
        </div>
      </div>
    </div>
  );
}
