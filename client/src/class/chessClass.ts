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
    seeMoveAble(){
        const moveAble:{x:number,y:number}[]=[]
        for (let i = 1; i <= 8; i++) {
            for (let j = 1; j <=8; j++) {
                if ((i-this.chessPosition.x)**2+(j-this.chessPosition.y)**2===5) {
                    moveAble.push({x:i,y:j})
                }else{
                    continue
                }   
            }
        }
        return moveAble
    }
  }
  