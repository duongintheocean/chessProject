import React, { useEffect, useState } from "react";
import "./css/game.css";
import avartaImg from "../img/User-avatar.svg.png";
import Square from "./Square";
import { Pawn, ChessPiece, Knight, Queen } from "../class/chessClass";
export default function Game() {
  const [chessSquare, setChessSquare] = useState<
    {
      chessPossition: { x: number; y: number };
      currentChess: null | ChessPiece;
    }[]
  >([
    { chessPossition: { x: 1, y: 8 }, currentChess: null },
    { chessPossition: { x: 2, y: 8 }, currentChess: null },
    { chessPossition: { x: 3, y: 8 }, currentChess: null },
    { chessPossition: { x: 4, y: 8 }, currentChess: null },
    { chessPossition: { x: 5, y: 8 }, currentChess: null },
    { chessPossition: { x: 6, y: 8 }, currentChess: null },
    { chessPossition: { x: 7, y: 8 }, currentChess: null },
    { chessPossition: { x: 8, y: 8 }, currentChess: null },
    {
      chessPossition: { x: 1, y: 7 },
      currentChess: new Pawn("black", 1, { x: 1, y: 7 }),
    },
    {
      chessPossition: { x: 2, y: 7 },
      currentChess: new Pawn("black", 1, { x: 2, y: 2 }),
    },
    {
      chessPossition: { x: 3, y: 7 },
      currentChess: new Pawn("black", 1, { x: 3, y: 2 }),
    },
    {
      chessPossition: { x: 4, y: 7 },
      currentChess: new Pawn("black", 1, { x: 4, y: 2 }),
    },
    {
      chessPossition: { x: 5, y: 7 },
      currentChess: new Pawn("black", 1, { x: 5, y: 2 }),
    },
    {
      chessPossition: { x: 6, y: 7 },
      currentChess: new Pawn("black", 1, { x: 6, y: 2 }),
    },
    {
      chessPossition: { x: 7, y: 7 },
      currentChess: new Pawn("black", 1, { x: 7, y: 2 }),
    },
    {
      chessPossition: { x: 8, y: 7 },
      currentChess: new Pawn("black", 1, { x: 8, y: 2 }),
    },
    { chessPossition: { x: 1, y: 6 }, currentChess: null },
    { chessPossition: { x: 2, y: 6 }, currentChess: null },
    { chessPossition: { x: 3, y: 6 }, currentChess: null },
    { chessPossition: { x: 4, y: 6 }, currentChess: null },
    { chessPossition: { x: 5, y: 6 }, currentChess: null },
    { chessPossition: { x: 6, y: 6 }, currentChess: null },
    { chessPossition: { x: 7, y: 6 }, currentChess: null },
    { chessPossition: { x: 8, y: 6 }, currentChess: null },
    { chessPossition: { x: 1, y: 5 }, currentChess: null },
    { chessPossition: { x: 2, y: 5 }, currentChess: null },
    { chessPossition: { x: 3, y: 5 }, currentChess: null },
    { chessPossition: { x: 4, y: 5 }, currentChess: null },
    { chessPossition: { x: 5, y: 5 }, currentChess: null },
    { chessPossition: { x: 6, y: 5 }, currentChess: null },
    { chessPossition: { x: 7, y: 5 }, currentChess: null },
    { chessPossition: { x: 8, y: 5 }, currentChess: null },
    { chessPossition: { x: 1, y: 4 }, currentChess: null },
    { chessPossition: { x: 2, y: 4 }, currentChess: null },
    { chessPossition: { x: 3, y: 4 }, currentChess: null },
    { chessPossition: { x: 4, y: 4 }, currentChess: null },
    { chessPossition: { x: 5, y: 4 }, currentChess: null },
    { chessPossition: { x: 6, y: 4 }, currentChess: null },
    { chessPossition: { x: 7, y: 4 }, currentChess: null },
    { chessPossition: { x: 8, y: 4 }, currentChess: null },
    { chessPossition: { x: 1, y: 3 }, currentChess: null },
    { chessPossition: { x: 2, y: 3 }, currentChess: null },
    { chessPossition: { x: 3, y: 3 }, currentChess: null },
    { chessPossition: { x: 4, y: 3 }, currentChess: null },
    { chessPossition: { x: 5, y: 3 }, currentChess: null },
    { chessPossition: { x: 6, y: 3 }, currentChess: null },
    { chessPossition: { x: 7, y: 3 }, currentChess: null },
    { chessPossition: { x: 8, y: 3 }, currentChess: null },
    {
      chessPossition: { x: 1, y: 2 },
      currentChess: new Pawn("white", 1, { x: 1, y: 2 }),
    },
    {
      chessPossition: { x: 2, y: 2 },
      currentChess: new Pawn("white", 1, { x: 2, y: 2 }),
    },
    {
      chessPossition: { x: 3, y: 2 },
      currentChess: new Pawn("white", 1, { x: 3, y: 2 }),
    },
    {
      chessPossition: { x: 4, y: 2 },
      currentChess: new Pawn("white", 1, { x: 4, y: 2 }),
    },
    {
      chessPossition: { x: 5, y: 2 },
      currentChess: new Pawn("white", 1, { x: 5, y: 2 }),
    },
    {
      chessPossition: { x: 6, y: 2 },
      currentChess: new Pawn("white", 1, { x: 6, y: 2 }),
    },
    {
      chessPossition: { x: 7, y: 2 },
      currentChess: new Pawn("white", 1, { x: 7, y: 2 }),
    },
    {
      chessPossition: { x: 8, y: 2 },
      currentChess: new Pawn("white", 1, { x: 8, y: 2 }),
    },
    { chessPossition: { x: 1, y: 1 }, currentChess: null },
    {
      chessPossition: { x: 2, y: 1 },
      currentChess: new Knight("white", 3, { x: 2, y: 1 }),
    },
    { chessPossition: { x: 3, y: 1 }, currentChess: null },
    { chessPossition: { x: 4, y: 1 }, currentChess: null },
    { chessPossition: { x: 5, y: 1 }, currentChess: null },
    { chessPossition: { x: 6, y: 1 }, currentChess: null },
    { chessPossition: { x: 7, y: 1 }, currentChess: null },
    { chessPossition: { x: 8, y: 1 }, currentChess: null },
  ]);
  const [availableMove, setAvailableMove] = useState<
    { x: number; y: number }[]
  >([]);
  const [currentChessActive, setCurrentChessActive] =
    useState<ChessPiece | null>(null);
  const handleFindMoveAvailable = () => {
    if (currentChessActive instanceof Knight) {
      const newAvailableMove = currentChessActive.moveExpression();
      setAvailableMove(newAvailableMove);
    }
    return;
  };
  useEffect(() => {
    handleFindMoveAvailable();
  }, [currentChessActive]);

  const handleMoveChess = (moveToChessSquare: { x: number; y: number }) => {
    const currentIndex = chessSquare.findIndex((e) => {
      return (
        e.chessPossition.x === currentChessActive?.chessPosition.x &&
        e.chessPossition.y === currentChessActive?.chessPosition.y
      );
    });

    const moveIndex = chessSquare.findIndex((e) => {
      return (
        e.chessPossition.x === moveToChessSquare.x &&
        e.chessPossition.y === moveToChessSquare.y
      );
    });

    const newChessSquare: {
      chessPossition: { x: number; y: number };
      currentChess: null | ChessPiece;
    }[] = [...chessSquare];
    if (currentChessActive instanceof Pawn) {
      const newChessMoveTo = new Pawn(
        currentChessActive.side,
        currentChessActive.chessPoint,
        { x: moveToChessSquare.x, y: moveToChessSquare.y }
      );
      newChessSquare[moveIndex].currentChess = newChessMoveTo;
      newChessSquare[currentIndex].currentChess = null;
      setChessSquare(newChessSquare);
    } else if (currentChessActive instanceof Knight) {
    } else if (currentChessActive instanceof Queen) {
    } else {
    }
    setCurrentChessActive(null);
  };
  return (
    <div className="game_container">
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
          let activeMode: boolean = false;
          for (let i = 0; i < availableMove.length; i++) {
            if (
              element.chessPossition.x === availableMove[i].x &&
              element.chessPossition.y === availableMove[i].y
            ) {
              return (activeMode = true);
            } else {
              continue;
            }
          }
          if (element.chessPossition.x % 2 === 0) {
            if (element.chessPossition.y % 2 !== 0) {
              return (
                <Square
                  atr={element}
                  color={"white_square"}
                  handleSetCurrentChessActive={setCurrentChessActive}
                  handleMoveChess={handleMoveChess}
                  activeMode={activeMode}
                ></Square>
              );
            } else {
              return (
                <Square
                  atr={element}
                  color={"black_square"}
                  handleSetCurrentChessActive={setCurrentChessActive}
                  handleMoveChess={handleMoveChess}
                  activeMode={activeMode}
                ></Square>
              );
            }
          } else {
            if (element.chessPossition.y % 2 !== 0) {
              return (
                <Square
                  atr={element}
                  color={"black_square"}
                  handleSetCurrentChessActive={setCurrentChessActive}
                  handleMoveChess={handleMoveChess}
                  activeMode={activeMode}
                ></Square>
              );
            } else {
              return (
                <Square
                  atr={element}
                  color={"white_square"}
                  handleSetCurrentChessActive={setCurrentChessActive}
                  handleMoveChess={handleMoveChess}
                  activeMode={activeMode}
                ></Square>
              );
            }
          }
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
