import React, { useState } from "react";
import "./css/homeContent.css";
import chessBoardImg from "../img/chessBoard.png";
import { useNavigate } from "react-router-dom";
export default function HomeContent() {
  const [accountHasLogin, setAccountHasLogin] = useState<undefined | {}>(
    undefined
  );
  const navigate=useNavigate()
  return (
    <div className="home_content_container">
      <div
        className={
          accountHasLogin ? "home_content_header" : "display_none_class"
        }
      ></div>
      <div className="home_content_main">
        <div className="home_chess_board_contain">
          <img src={chessBoardImg} alt="" />
        </div>
        <div className="left_home_content_main">
          <div>
            <span className="icon_home_content">
              <i className="fa-solid fa-clock" />
            </span>
            <span className="home_content_selection" onClick={()=>{
              navigate("/play")
            }}>
              Chơi 15|10
            </span>
          </div>
          <div>
          <span className="icon_home_content">
          <i className="fa-solid fa-chess"></i>
            </span>
            <span className="home_content_selection">
              Ván cờ mới
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
