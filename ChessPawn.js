class ChessPawn extends Chess{
    movesKoef = [
        [0,-1], [-2,0]
    ];
    constructor(size){
        super(size);
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