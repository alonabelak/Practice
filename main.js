let tbl = new ChessHorse (8);
tbl.chessTable();
tbl.tbl.querySelectorAll('div').forEach((cell)=>{
    cell.addEventListener('click', function(e){ 
        tbl.setFigure(e, tbl.tbl)
    });
})
