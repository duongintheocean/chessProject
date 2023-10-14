import React, { useEffect, useState } from "react";
import "./css/square.css";
import { ChessSquare } from "../class/chessClass";
export default function Square(props: any) {
  const [squareAtr, setSquareAtr] = useState<ChessSquare>();
  useEffect(() => {
    const chessSquare = new ChessSquare(
      props.atr.chessPossition.x,
      props.atr.chessPossition.y,
      props.atr.currentChess
    );
    setSquareAtr(chessSquare);
  }, [props.atr.currentChess]);
  return (
    <div
      className={"square_container " + props.color}
      onClick={() => {
        props.handleSetCurrentChessActive(squareAtr?.currentChessPiece);
      }}
    >
      {squareAtr?.currentChessPiece && (
        <img src={squareAtr?.currentChessPiece?.chessImg} alt="" />
      )}
      {props.activeMode && (
        <div
          className="active_square"
          onClick={(event) => {
            event.stopPropagation();
            props.handleMoveChess({ x: squareAtr?.x, y: squareAtr?.y });
          }}
        ></div>
      )}
    </div>
  );
}
