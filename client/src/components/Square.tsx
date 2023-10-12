import React from "react";
import "./css/square.css"
import { ChessSquare } from "../class/chessClass";
export default function Square(prop: any) {
    console.log(prop,"<--- line 5");
    
  return (
    <div className="square_container">
      <div></div>
    </div>
  );
}
