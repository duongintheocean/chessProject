import whitePawnImg from "../img/chess_piece/pawn_w.png";
import whiteKnightImg from "../img/chess_piece/knight_w.png";
import blackKnightImg from "../img/chess_piece/knight_b.png";
import blackPawnImg from "../img/chess_piece/pawn_b.png";
import blackQueenImg from "../img/chess_piece/queen_b.png";
import whiteQueenImg from "../img/chess_piece/queen_w.png";
import whiteRockImg from "../img/chess_piece/rook_w.png";
import blackRockImg from "../img/chess_piece/rook_b.png";
import whiteBishopImg from "../img/chess_piece/bishop_w.png";
import blackBishopImg from "../img/chess_piece/bishop_b.png";
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
  fistMove: boolean;
  constructor(
    chessSide: "white" | "black",
    chessPoint: number,
    chessPosition: { x: number; y: number },
    fistMove: boolean
  ) {
    super(chessSide, chessPoint, chessPosition);
    this.fistMove = fistMove;
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
      if (!this.fistMove) {
        moveAble.push({ x: this.chessPosition.x, y: this.chessPosition.y + 2 });
      }
    } else if (this.side === "black") {
      moveAble = [
        ...moveAble,
        { x: this.chessPosition.x, y: this.chessPosition.y - 1 },

        { x: this.chessPosition.x - 1, y: this.chessPosition.y - 1 },
        { x: this.chessPosition.x + 1, y: this.chessPosition.y - 1 }, // Fixed this line
      ];
      if (!this.fistMove) {
        moveAble.push({ x: this.chessPosition.x, y: this.chessPosition.y - 2 });
      }
    }
    return moveAble;
  }
}
export class Rock extends ChessPiece {
  haveMove: boolean;
  constructor(
    chessSide: "white" | "black",
    chessPoint: number,
    chessPosition: { x: number; y: number },
    haveMove: boolean
  ) {
    super(chessSide, chessPoint, chessPosition);
    this.haveMove = haveMove;
    if (this.side === "white") {
      this.chessImg = whiteRockImg;
    } else {
      this.chessImg = blackRockImg;
    }
  }
  override moveExpression() {
    let moveExpression: { x: number; y: number }[] = [];
    for (let i = 1; i <= 8; i++) {
      moveExpression.push(
        { x: this.chessPosition.x, y: i },
        { x: i, y: this.chessPosition.y }
      );
    }
    return moveExpression;
  }
}
export class Bishop extends ChessPiece {
  constructor(
    chessSide: "white" | "black",
    chessPoint: number,
    chessPosition: { x: number; y: number }
  ) {
    super(chessSide, chessPoint, chessPosition);
    if (this.side === "white") {
      this.chessImg = whiteBishopImg;
    } else {
      this.chessImg = blackBishopImg;
    }
  }
  override moveExpression() {
    let moveAble: { x: number; y: number }[] = [];
    for (let i = 1; i <= 8; i++) {
      for (let j = 0; j <= 8; j++) {
        if (
          -1 * (i - this.chessPosition.x) + (j - this.chessPosition.y) ===
          0
        ) {
          moveAble.push({ x: i, y: j });
        }
        if (i - this.chessPosition.x + j - this.chessPosition.y === 0) {
          moveAble.push({ x: i, y: j });
        }
      }
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
    for (let i = 1; i <= 8; i++) {
      moveAble.push(
        { x: this.chessPosition.x, y: i },
        { x: i, y: this.chessPosition.y }
      );
      for (let j = 0; j <= 8; j++) {
        if (
          -1 * (i - this.chessPosition.x) + (j - this.chessPosition.y) ===
          0
        ) {
          moveAble.push({ x: i, y: j });
        }
        if (i - this.chessPosition.x + j - this.chessPosition.y === 0) {
          moveAble.push({ x: i, y: j });
        }
      }
    }
    return moveAble;
  }
}
