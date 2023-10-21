import React, { useEffect, useState } from "react";
import "./css/square.css";
import { ChessSquare } from "../class/chessClass";
export default function Square(props: any) {
  const [squareAtr, setSquareAtr] = useState<ChessSquare>();
  const [activeMode, setActiveMode] = useState<boolean>(false);
  useEffect(() => {
    const chessSquare = new ChessSquare(
      props.atr.chessPossition.x,
      props.atr.chessPossition.y,
      props.atr.currentChess
    );
    setSquareAtr(chessSquare);
  }, [JSON.stringify(props.atr.currentChess)]);
  useEffect(() => {
    if (props.currentSide === squareAtr?.currentChessPiece?.side) {
      return setActiveMode(false);
    }
    for (let i = 0; i < props.activeSquare.length; i++) {
      if (
        squareAtr?.x === props.activeSquare[i].x &&
        squareAtr?.y === props.activeSquare[i].y
      ) {
        return setActiveMode(true);
      }
    }
    return setActiveMode(false);
  }, [JSON.stringify(props.activeSquare)]);
  return (
    <div
      className={"square_container " + props.color}
      onClick={() => {
        props.handleSetCurrentChessActive(squareAtr?.currentChessPiece);
      }}
    >
      {squareAtr?.currentChessPiece &&
        activeMode === false &&
        (!props.isChessActive ? (
          <img src={squareAtr?.currentChessPiece?.chessImg} alt="" />
        ) : (
          <div
            className={"chess_has_active_" + props.color}
            onClick={(event) => {
              event.stopPropagation()
              props.handleSetCurrentChessActive(null);
            }}
          >
            <img src={squareAtr?.currentChessPiece?.chessImg} alt="" />
          </div>
        ))}
      {activeMode && (
        <div
          className="active_square"
          onClick={(event) => {
            event.stopPropagation();
            props.handleMoveChess({ x: squareAtr?.x, y: squareAtr?.y });
          }}
        >
          <img src={squareAtr?.currentChessPiece?.chessImg} alt="" />
        </div>
      )}
      {}
    </div>
  );
}
