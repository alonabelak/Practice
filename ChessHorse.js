class ChessHorse extends Chess {
    // cell 2,2
    // moves: 0,1  0,3  1,4  3,4  4,3  4,1  3,0  1,0  

    movesKoef = [
        [-2,-1], [-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2], [-1,-2]
    ];
    
    constructor(size, figure){
        super(size);
        this.figure = figure;

    }
    setFigure(e,tbl){
        let clicked = this.clickCell(e);  
        tbl.querySelectorAll('div').forEach((cell)=> {
            cell.innerText = '';
        });
        clicked.el.innerText = "♘";
        this.availMoves(clicked.i, clicked.j);
    }
    availMoves(i,j){
        //console.log(i,j);
        for(let move of this.movesKoef){
            const move_i = +i+move[0],
                move_j = +j+move[1];
            if((move_i >= 0 && move_j >= 0) && (move_i <= this.size-1 && move_j<=this.size-1)){
                //console.log(move_i, move_j);
                document.querySelector(`div[data-i="${move_i}"][data-j="${move_j}"]`).innerText = '•';
            }
        }
        
    }
}