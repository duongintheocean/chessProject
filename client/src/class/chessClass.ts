import whitePawnImg from "../img/chess_piece/pawn_w.png";
import whiteKnightImg from "../img/chess_piece/knight_w.png";
import blackKnightImg from "../img/chess_piece/knight_b.png";
import blackPawnImg from "../img/chess_piece/pawn_b.png";
import blackQueenImg from "../img/chess_piece/queen_b.png";
import whiteQueenImg from "../img/chess_piece/queen_w.png";
export abstract class ChessPiece {
  side: "white" | "black";
  chessPoint: number;
  chessPosition: { x: number; y: number };
  chessImg: string = "";
  constructor(
    chessSide: "white" | "black",
    chessPoint: number,
    chessPosition: { x: number; y: number }
  ) {
    this.side = chessSide;
    this.chessPoint = chessPoint;
    this.chessPosition = chessPosition;
  }
  moveExpression() {}
}
export class ChessSquare {
  x: number;
  y: number;
  currentChessPiece: ChessPiece | null;
  constructor(x: number, y: number, currentChessPiece: ChessPiece | null) {
    this.x = x;
    this.y = y;
    this.currentChessPiece = currentChessPiece;
  }
  // moveTo(newChessPiece: ChessPiece) {
  //   if (this.currentChessPiece) {
  //     if (newChessPiece.side === this.currentChessPiece.side) {
  //       return;
  //     } else {
  //       this.currentChessPiece = newChessPiece;
  //       this.currentChessPiece.chessPosition={x:this.x,y:this.y}
  //     }
  //   } else {
  //     this.currentChessPiece = newChessPiece;
  //     this.currentChessPiece.chessPosition={x:this.x,y:this.y}
  //   }
  // }
  // left(){
  //   this.currentChessPiece=null
  // }
}
export class Knight extends ChessPiece {
  constructor(
    chessSide: "white" | "black",
    chessPoint: number,
    chessPosition: { x: number; y: number }
  ) {
    super(chessSide, chessPoint, chessPosition);
    if (this.side === "white") {
      this.chessImg = whiteKnightImg;
    } else {
      this.chessImg = blackKnightImg;
    }
  }

  override moveExpression() {
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
  constructor(
    chessSide: "white" | "black",
    chessPoint: number,
    chessPosition: { x: number; y: number }
  ) {
    super(chessSide, chessPoint, chessPosition); // Call the parent class constructor
    if (this.side === "white") {
      this.chessImg = whitePawnImg;
    } else {
      this.chessImg = blackPawnImg;
    }
  }

  override moveExpression() {
    let moveAble: { x: number; y: number }[] = [];
    if (this.side === "white") {
      moveAble = [
        ...moveAble,
        { x: this.chessPosition.x, y: this.chessPosition.y + 1 },
        { x: this.chessPosition.x - 1, y: this.chessPosition.y + 1 },
        { x: this.chessPosition.x + 1, y: this.chessPosition.y + 1 },
      ];
    } else if (this.side === "black") {
      moveAble = [
        ...moveAble,
        { x: this.chessPosition.x, y: this.chessPosition.y - 1 },
        { x: this.chessPosition.x - 1, y: this.chessPosition.y - 1 },
        { x: this.chessPosition.x + 1, y: this.chessPosition.y - 1 }, // Fixed this line
      ];
    }
    return moveAble;
  }
}

export class Queen extends ChessPiece {
  constructor(
    chessSide: "white" | "black",
    chessPoint: number,
    chessPosition: { x: number; y: number }
  ) {
    super(chessSide, chessPoint, chessPosition);
    if (this.side === "white") {
      this.chessImg = whiteQueenImg;
    } else {
      this.chessImg = blackQueenImg;
    }
  }

  override moveExpression() {
    let moveAble: { x: number; y: number }[] = [];
    if (this.side === "white") {
      moveAble = [
        ...moveAble,
        { x: this.chessPosition.x, y: this.chessPosition.y + 1 },
        { x: this.chessPosition.x - 1, y: this.chessPosition.y + 1 },
        { x: this.chessPosition.x + 1, y: this.chessPosition.y + 1 },
      ];
    } else if (this.side === "black") {
      moveAble = [
        ...moveAble,
        { x: this.chessPosition.x, y: this.chessPosition.y - 1 },
        { x: this.chessPosition.x - 1, y: this.chessPosition.y - 1 },
        { x: this.chessPosition.x - 1, y: this.chessPosition.y - 1 },
      ];
    }
    return moveAble;
  }
}
