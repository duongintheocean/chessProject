import React, { useEffect, useState } from "react";
import "./css/game.css";
import avartaImg from "../img/User-avatar.svg.png";
import Square from "./Square";
import {
  Pawn,
  ChessPiece,
  Knight,
  Queen,
  Rock,
  Bishop,
  King,
} from "../class/chessClass";

export default function Game() {
  const [chessSquare, setChessSquare] = useState<
    {
      chessPossition: { x: number; y: number };
      currentChess: null | ChessPiece;
    }[]
  >([
    {
      chessPossition: { x: 1, y: 8 },
      currentChess: new Rock("black", 5, { x: 1, y: 8 }, false),
    },
    {
      chessPossition: { x: 2, y: 8 },
      currentChess: new Knight("black", 3, { x: 2, y: 8 }),
    },
    {
      chessPossition: { x: 3, y: 8 },
      currentChess: new Bishop("black", 3, { x: 3, y: 8 }),
    },
    {
      chessPossition: { x: 4, y: 8 },
      currentChess: new Queen("black", 9, { x: 4, y: 8 }),
    },
    {
      chessPossition: { x: 5, y: 8 },
      currentChess: new King("black", 9, { x: 5, y: 8 }, false),
    },
    {
      chessPossition: { x: 6, y: 8 },
      currentChess: new Bishop("black", 3, { x: 6, y: 8 }),
    },
    {
      chessPossition: { x: 7, y: 8 },
      currentChess: new Knight("black", 3, { x: 7, y: 8 }),
    },
    {
      chessPossition: { x: 8, y: 8 },
      currentChess: new Rock("black", 5, { x: 8, y: 8 }, false),
    },
    {
      chessPossition: { x: 1, y: 7 },
      currentChess: new Pawn("black", 1, { x: 1, y: 7 }, false),
    },
    {
      chessPossition: { x: 2, y: 7 },
      currentChess: new Pawn("black", 1, { x: 2, y: 7 }, false),
    },
    {
      chessPossition: { x: 3, y: 7 },
      currentChess: new Pawn("black", 1, { x: 3, y: 7 }, false),
    },
    {
      chessPossition: { x: 4, y: 7 },
      currentChess: new Pawn("black", 1, { x: 4, y: 7 }, false),
    },
    {
      chessPossition: { x: 5, y: 7 },
      currentChess: new Pawn("black", 1, { x: 5, y: 7 }, false),
    },
    {
      chessPossition: { x: 6, y: 7 },
      currentChess: new Pawn("black", 1, { x: 6, y: 7 }, false),
    },
    {
      chessPossition: { x: 7, y: 7 },
      currentChess: new Pawn("black", 1, { x: 7, y: 7 }, false),
    },
    {
      chessPossition: { x: 8, y: 7 },
      currentChess: new Pawn("black", 1, { x: 8, y: 7 }, false),
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
      currentChess: new Pawn("white", 1, { x: 1, y: 2 }, false),
    },
    {
      chessPossition: { x: 2, y: 2 },
      currentChess: new Pawn("white", 1, { x: 2, y: 2 }, false),
    },
    {
      chessPossition: { x: 3, y: 2 },
      currentChess: new Pawn("white", 1, { x: 3, y: 2 }, false),
    },
    {
      chessPossition: { x: 4, y: 2 },
      currentChess: new Pawn("white", 1, { x: 4, y: 2 }, false),
    },
    {
      chessPossition: { x: 5, y: 2 },
      currentChess: new Pawn("white", 1, { x: 5, y: 2 }, false),
    },
    {
      chessPossition: { x: 6, y: 2 },
      currentChess: new Pawn("white", 1, { x: 6, y: 2 }, false),
    },
    {
      chessPossition: { x: 7, y: 2 },
      currentChess: new Pawn("white", 1, { x: 7, y: 2 }, false),
    },
    {
      chessPossition: { x: 8, y: 2 },
      currentChess: new Pawn("white", 1, { x: 8, y: 2 }, false),
    },
    {
      chessPossition: { x: 1, y: 1 },
      currentChess: new Rock("white", 5, { x: 1, y: 1 }, false),
    },
    {
      chessPossition: { x: 2, y: 1 },
      currentChess: new Knight("white", 3, { x: 2, y: 1 }),
    },
    {
      chessPossition: { x: 3, y: 1 },
      currentChess: new Bishop("white", 3, { x: 3, y: 1 }),
    },
    {
      chessPossition: { x: 4, y: 1 },
      currentChess: new Queen("white", 9, { x: 4, y: 1 }),
    },
    {
      chessPossition: { x: 5, y: 1 },
      currentChess: new King("white", 10, { x: 5, y: 1 }, false),
    },
    {
      chessPossition: { x: 6, y: 1 },
      currentChess: new Bishop("white", 3, { x: 6, y: 1 }),
    },
    {
      chessPossition: { x: 7, y: 1 },
      currentChess: new Knight("white", 3, { x: 7, y: 1 }),
    },
    {
      chessPossition: { x: 8, y: 1 },
      currentChess: new Rock("white", 5, { x: 8, y: 1 }, false),
    },
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
    } else if (currentChessActive instanceof Rock) {
      let moveExpression = currentChessActive.moveExpression();
      for (let i = 0; i < chessSquare.length; i++) {
        if (chessSquare[i].currentChess !== null) {
          for (let j = 0; j < moveExpression.length; j++) {
            if (
              moveExpression[j].x === chessSquare[i].chessPossition.x &&
              moveExpression[j].y === chessSquare[i].chessPossition.y
            ) {
              if (moveExpression[j].x > currentChessActive.chessPosition.x) {
                if (
                  chessSquare[i].currentChess?.side === currentChessActive.side
                ) {
                  moveExpression = moveExpression.filter((e) => {
                    return e.x < moveExpression[j].x;
                  });
                } else {
                  moveExpression = moveExpression.filter((e) => {
                    return e.x <= moveExpression[j].x;
                  });
                }
              } else if (
                moveExpression[j].x < currentChessActive.chessPosition.x
              ) {
                if (
                  chessSquare[i].currentChess?.side === currentChessActive.side
                ) {
                  moveExpression = moveExpression.filter((e) => {
                    return e.x > moveExpression[j].x;
                  });
                } else {
                  moveExpression = moveExpression.filter((e) => {
                    return e.x >= moveExpression[j].x;
                  });
                }
              } else if (
                moveExpression[j].y < currentChessActive.chessPosition.y
              ) {
                if (
                  chessSquare[i].currentChess?.side === currentChessActive.side
                ) {
                  moveExpression = moveExpression.filter((e) => {
                    return e.y > moveExpression[j].y;
                  });
                } else {
                  moveExpression = moveExpression.filter((e) => {
                    return e.y >= moveExpression[j].y;
                  });
                }
              } else if (
                moveExpression[j].y > currentChessActive.chessPosition.y
              ) {
                if (
                  chessSquare[i].currentChess?.side === currentChessActive.side
                ) {
                  moveExpression = moveExpression.filter((e) => {
                    return e.y < moveExpression[j].y;
                  });
                } else {
                  moveExpression = moveExpression.filter((e) => {
                    return e.y <= moveExpression[j].y;
                  });
                }
              }
            }
          }
        }
      }
      setAvailableMove(moveExpression);
    } else if (currentChessActive instanceof Pawn) {
      let moveExpression = currentChessActive.moveExpression();
      if (currentChessActive.side === "white") {
        for (let i = 0; i < chessSquare.length; i++) {
          if (
            chessSquare[i].chessPossition.x ===
              currentChessActive.chessPosition.x &&
            currentChessActive.chessPosition.y + 1 ===
              chessSquare[i].chessPossition.y &&
            chessSquare[i].currentChess !== null
          ) {
            moveExpression = moveExpression.filter((e) => {
              return e.x !== currentChessActive.chessPosition.x;
            });
          } else if (
            chessSquare[i].chessPossition.x ===
              currentChessActive.chessPosition.x &&
            currentChessActive.chessPosition.y + 2 ===
              chessSquare[i].chessPossition.y &&
            chessSquare[i].currentChess !== null
          ) {
            moveExpression = moveExpression.filter((e) => {
              return e.y !== currentChessActive.chessPosition.y + 2;
            });
          } else if (
            chessSquare[i].chessPossition.x ===
              currentChessActive.chessPosition.x + 1 &&
            chessSquare[i].chessPossition.y ===
              currentChessActive.chessPosition.y + 1 &&
            chessSquare[i].currentChess === null
          ) {
            moveExpression = moveExpression.filter((e) => {
              return e.x !== currentChessActive.chessPosition.x + 1;
            });
          } else if (
            chessSquare[i].chessPossition.x ===
              currentChessActive.chessPosition.x - 1 &&
            chessSquare[i].chessPossition.y ===
              currentChessActive.chessPosition.y + 1 &&
            chessSquare[i].currentChess === null
          ) {
            moveExpression = moveExpression.filter((e) => {
              return e.x !== currentChessActive.chessPosition.x - 1;
            });
          }
        }
      } else {
        for (let i = 0; i < chessSquare.length; i++) {
          if (
            chessSquare[i].chessPossition.x ===
              currentChessActive.chessPosition.x &&
            currentChessActive.chessPosition.y - 1 ===
              chessSquare[i].chessPossition.y &&
            chessSquare[i].currentChess !== null
          ) {
            moveExpression = moveExpression.filter((e) => {
              return e.x !== currentChessActive.chessPosition.x;
            });
          } else if (
            chessSquare[i].chessPossition.x ===
              currentChessActive.chessPosition.x &&
            currentChessActive.chessPosition.y - 2 ===
              chessSquare[i].chessPossition.y &&
            chessSquare[i].currentChess !== null
          ) {
            moveExpression = moveExpression.filter((e) => {
              return e.y !== currentChessActive.chessPosition.y - 2;
            });
          } else if (
            chessSquare[i].chessPossition.x ===
              currentChessActive.chessPosition.x + 1 &&
            chessSquare[i].chessPossition.y ===
              currentChessActive.chessPosition.y - 1 &&
            chessSquare[i].currentChess === null
          ) {
            moveExpression = moveExpression.filter((e) => {
              return e.x !== currentChessActive.chessPosition.x + 1;
            });
          } else if (
            chessSquare[i].chessPossition.x ===
              currentChessActive.chessPosition.x - 1 &&
            chessSquare[i].chessPossition.y ===
              currentChessActive.chessPosition.y - 1 &&
            chessSquare[i].currentChess === null
          ) {
            moveExpression = moveExpression.filter((e) => {
              return e.x !== currentChessActive.chessPosition.x - 1;
            });
          }
        }
      }
      setAvailableMove(moveExpression);
    } else if (currentChessActive instanceof Bishop) {
      let moveAble = currentChessActive.moveExpression();
      let removeMoveAble: { x: number; y: number }[] = [];
      for (let i = 0; i < chessSquare.length; i++) {
        if (chessSquare[i].currentChess !== null) {
          for (let j = 0; j < moveAble.length; j++) {
            if (
              chessSquare[i].chessPossition.x === moveAble[j].x &&
              chessSquare[i].chessPossition.y === moveAble[j].y
            ) {
              if (chessSquare[i].currentChess !== null) {
                if (
                  moveAble[j].x > currentChessActive.chessPosition.x &&
                  moveAble[j].y > currentChessActive.chessPosition.y
                ) {
                  removeMoveAble = removeMoveAble.concat(
                    moveAble.filter((e) => {
                      return e.x > moveAble[j].x && e.y > moveAble[j].y;
                    })
                  );

                  break;
                } else if (
                  moveAble[j].x < currentChessActive.chessPosition.x &&
                  moveAble[j].y < currentChessActive.chessPosition.y
                ) {
                  removeMoveAble = removeMoveAble.concat(
                    moveAble.filter((e) => {
                      return e.x < moveAble[j].x && e.y < moveAble[j].y;
                    })
                  );
                  break;
                } else if (
                  moveAble[j].x < currentChessActive.chessPosition.x &&
                  moveAble[j].y > currentChessActive.chessPosition.y
                ) {
                  removeMoveAble = removeMoveAble.concat(
                    moveAble.filter((e) => {
                      return e.x < moveAble[j].x && e.y > moveAble[j].y;
                    })
                  );
                  break;
                } else if (
                  moveAble[j].x < currentChessActive.chessPosition.x &&
                  moveAble[j].y > currentChessActive.chessPosition.y
                ) {
                  removeMoveAble = removeMoveAble.concat(
                    moveAble.filter((e) => {
                      return e.x < moveAble[j].x && e.y > moveAble[j].y;
                    })
                  );
                  break;
                }
              }
            }
          }
        }
      }
      moveAble = moveAble.filter((e) => {
        return removeMoveAble.includes(e) === false;
      });
      setAvailableMove(moveAble);
    } else if (currentChessActive instanceof Queen) {
      let moveAble = currentChessActive.moveExpression();
      let removeMoveAble: { x: number; y: number }[] = [];
      for (let i = 0; i < chessSquare.length; i++) {
        if (chessSquare[i].currentChess !== null) {
          for (let j = 0; j < moveAble.length; j++) {
            if (
              chessSquare[i].chessPossition.x === moveAble[j].x &&
              chessSquare[i].chessPossition.y === moveAble[j].y
            ) {
              if (chessSquare[i].currentChess !== null) {
                if (
                  moveAble[j].x > currentChessActive.chessPosition.x &&
                  moveAble[j].y > currentChessActive.chessPosition.y
                ) {
                  removeMoveAble = removeMoveAble.concat(
                    moveAble.filter((e) => {
                      return e.x > moveAble[j].x && e.y > moveAble[j].y;
                    })
                  );

                  break;
                } else if (
                  moveAble[j].x < currentChessActive.chessPosition.x &&
                  moveAble[j].y < currentChessActive.chessPosition.y
                ) {
                  removeMoveAble = removeMoveAble.concat(
                    moveAble.filter((e) => {
                      return e.x < moveAble[j].x && e.y < moveAble[j].y;
                    })
                  );
                  break;
                } else if (
                  moveAble[j].x < currentChessActive.chessPosition.x &&
                  moveAble[j].y > currentChessActive.chessPosition.y
                ) {
                  removeMoveAble = removeMoveAble.concat(
                    moveAble.filter((e) => {
                      return e.x < moveAble[j].x && e.y > moveAble[j].y;
                    })
                  );
                  break;
                } else if (
                  moveAble[j].x < currentChessActive.chessPosition.x &&
                  moveAble[j].y > currentChessActive.chessPosition.y
                ) {
                  removeMoveAble = removeMoveAble.concat(
                    moveAble.filter((e) => {
                      return e.x < moveAble[j].x && e.y > moveAble[j].y;
                    })
                  );
                  break;
                } else if (
                  moveAble[j].x === currentChessActive.chessPosition.x
                ) {
                  if (moveAble[j].y > currentChessActive.chessPosition.y) {
                    removeMoveAble = removeMoveAble.concat(
                      moveAble.filter((e) => {
                        return (
                          e.x === currentChessActive.chessPosition.x &&
                          e.y > moveAble[j].y
                        );
                      })
                    );
                  } else if (
                    moveAble[j].y < currentChessActive.chessPosition.y
                  ) {
                    removeMoveAble = removeMoveAble.concat(
                      moveAble.filter((e) => {
                        return (
                          e.x === currentChessActive.chessPosition.x &&
                          e.y < moveAble[j].y
                        );
                      })
                    );
                  }
                } else if (
                  moveAble[j].y === currentChessActive.chessPosition.y
                ) {
                  if (moveAble[j].x > currentChessActive.chessPosition.x) {
                    removeMoveAble = removeMoveAble.concat(
                      moveAble.filter((e) => {
                        return (
                          e.y === currentChessActive.chessPosition.y &&
                          e.x > moveAble[j].x
                        );
                      })
                    );
                  } else if (
                    moveAble[j].x < currentChessActive.chessPosition.x
                  ) {
                    removeMoveAble = removeMoveAble.concat(
                      moveAble.filter((e) => {
                        return (
                          e.y === currentChessActive.chessPosition.y &&
                          e.x < moveAble[j].x
                        );
                      })
                    );
                  }
                }
              }
            }
          }
        }
      }
      moveAble = moveAble.filter((e) => {
        return removeMoveAble.includes(e) === false;
      });
      setAvailableMove(moveAble);
    } else if (currentChessActive instanceof King) {
      let moveAble: { x: number; y: number }[] =
        currentChessActive.moveExpression();
      if (currentChessActive.haveMove===false) {
        
      }
      setAvailableMove(moveAble);
    } else {
      setAvailableMove([]);
    }
    return;
  };
  useEffect(() => {
    handleFindMoveAvailable();
  }, [JSON.stringify(currentChessActive)]);

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
    if (chessSquare[moveIndex].currentChess !== null) {
      if (
        chessSquare[moveIndex].currentChess?.side ===
        chessSquare[currentIndex].currentChess?.side
      ) {
        setAvailableMove([]);
        return setCurrentChessActive(null);
      }
    }
    const newChessSquare: {
      chessPossition: { x: number; y: number };
      currentChess: null | ChessPiece;
    }[] = [...chessSquare];
    if (currentChessActive instanceof Pawn) {
      const newChessMoveTo = new Pawn(
        currentChessActive.side,
        currentChessActive.chessPoint,
        { x: moveToChessSquare.x, y: moveToChessSquare.y },
        true
      );
      newChessSquare[moveIndex].currentChess = newChessMoveTo;
      newChessSquare[currentIndex].currentChess = null;
      setChessSquare(newChessSquare);
    } else if (currentChessActive instanceof Knight) {
      const newChessMoveTo = new Knight(
        currentChessActive.side,
        currentChessActive.chessPoint,
        { x: moveToChessSquare.x, y: moveToChessSquare.y }
      );
      newChessSquare[moveIndex].currentChess = newChessMoveTo;
      newChessSquare[currentIndex].currentChess = null;
      setChessSquare(newChessSquare);
    } else if (currentChessActive instanceof Queen) {
      const newChessMoveTo = new Queen(
        currentChessActive.side,
        currentChessActive.chessPoint,
        { x: moveToChessSquare.x, y: moveToChessSquare.y }
      );
      newChessSquare[moveIndex].currentChess = newChessMoveTo;
      newChessSquare[currentIndex].currentChess = null;
      setChessSquare(newChessSquare);
      setChessSquare(newChessSquare);
    } else if (currentChessActive instanceof Rock) {
      const newChessMoveTo = new Rock(
        currentChessActive.side,
        currentChessActive.chessPoint,
        { x: moveToChessSquare.x, y: moveToChessSquare.y },
        true
      );
      newChessSquare[moveIndex].currentChess = newChessMoveTo;
      newChessSquare[currentIndex].currentChess = null;
      setChessSquare(newChessSquare);
    } else if (currentChessActive instanceof Bishop) {
      const newChessMoveTo = new Bishop(
        currentChessActive.side,
        currentChessActive.chessPoint,
        { x: moveToChessSquare.x, y: moveToChessSquare.y }
      );
      newChessSquare[moveIndex].currentChess = newChessMoveTo;
      newChessSquare[currentIndex].currentChess = null;
      setChessSquare(newChessSquare);
    } else if (currentChessActive instanceof King) {
      const newChessMoveTo = new King(
        currentChessActive.side,
        currentChessActive.chessPoint,
        { x: moveToChessSquare.x, y: moveToChessSquare.y },
        true
      );
      newChessSquare[moveIndex].currentChess = newChessMoveTo;
      newChessSquare[currentIndex].currentChess = null;
      setChessSquare(newChessSquare);
    }
    setCurrentChessActive(null);
    setAvailableMove([]);
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
          if (element.chessPossition.x % 2 === 0) {
            if (element.chessPossition.y % 2 !== 0) {
              return (
                <Square
                  atr={element}
                  color={"white_square"}
                  handleSetCurrentChessActive={setCurrentChessActive}
                  handleMoveChess={handleMoveChess}
                  activeSquare={availableMove}
                  currentSide={currentChessActive?.side}
                  isChessActive={
                    currentChessActive?.chessPosition.x ===
                      element.chessPossition.x &&
                    currentChessActive?.chessPosition.y ===
                      element.chessPossition.y
                  }
                ></Square>
              );
            } else {
              return (
                <Square
                  atr={element}
                  color={"black_square"}
                  handleSetCurrentChessActive={setCurrentChessActive}
                  handleMoveChess={handleMoveChess}
                  activeSquare={availableMove}
                  currentSide={currentChessActive?.side}
                  isChessActive={
                    currentChessActive?.chessPosition.x ===
                      element.chessPossition.x &&
                    currentChessActive?.chessPosition.y ===
                      element.chessPossition.y
                  }
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
                  activeSquare={availableMove}
                  currentSide={currentChessActive?.side}
                  isChessActive={
                    currentChessActive?.chessPosition.x ===
                      element.chessPossition.x &&
                    currentChessActive?.chessPosition.y ===
                      element.chessPossition.y
                  }
                ></Square>
              );
            } else {
              return (
                <Square
                  atr={element}
                  color={"white_square"}
                  handleSetCurrentChessActive={setCurrentChessActive}
                  handleMoveChess={handleMoveChess}
                  activeSquare={availableMove}
                  currentSide={currentChessActive?.side}
                  isChessActive={
                    currentChessActive?.chessPosition.x ===
                      element.chessPossition.x &&
                    currentChessActive?.chessPosition.y ===
                      element.chessPossition.y
                  }
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
