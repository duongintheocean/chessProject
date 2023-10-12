abstract class ChessPiece {
  side: "white" | "black";
  chessPoint: number;
  chessPosition: { x: number; y: number };
  constructor(
    chessSide: "white" | "black",
    chessPoint: number,
    chessPosition: { x: number; y: number }
  ) {
    this.side = chessSide;
    this.chessPoint = chessPoint;
    this.chessPosition = chessPosition;
  }
}
export class ChessSquare {
  x: number;
  y: number;
  currentChessPiece: ChessPiece | undefined;
  constructor(x: number, y: number, currentChessPiece: ChessPiece | undefined) {
    this.x = x;
    this.y = y;
    this.currentChessPiece = currentChessPiece;
  }
  moveTo(newChessPiece: ChessPiece) {
    if (this.currentChessPiece) {
      if (newChessPiece.side === this.currentChessPiece.side) {
        return;
      } else {
        this.currentChessPiece = newChessPiece;
      }
    } else {
      this.currentChessPiece = newChessPiece;
    }
  }
}
export class Horse extends ChessPiece {
  super(
    chessSide: "white" | "black",
    chessPoint: number,
    chessPosition: { x: number; y: number }
  ) {
    this.side = chessSide;
    this.chessPoint = chessPoint;
    this.chessPosition = chessPosition;
  }
  seeMoveAble() {
    const moveAble: { x: number; y: number }[] = [];
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        if (
          (i - this.chessPosition.x) ** 2 + (j - this.chessPosition.y) ** 2 ===
          5
        ) {
          moveAble.push({ x: i, y: j });
        } else {
          continue;
        }
      }
    }
    return moveAble;
  }
}
export class Pawn extends ChessPiece {
  super(
    chessSide: "white" | "black",
    chessPoint: number,
    chessPosition: { x: number; y: number }
  ) {
    this.side = chessSide;
    this.chessPoint = chessPoint;
    this.chessPosition = chessPosition;
  }
  seeMoveAble() {
    const moveAble: { x: number; y: number }[] = [];
    if (this.side === "white") {
      moveAble.push({ x: this.chessPosition.x, y: this.chessPosition.y + 1 });
    } else if ((this.side = "black")) {
      moveAble.push({ x: this.chessPosition.x, y: this.chessPosition.y - 1 });
    }
    return moveAble;
  }
}
