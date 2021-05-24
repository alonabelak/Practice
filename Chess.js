class Chess {
    cellI= 0;
    cellJ= 0;
    cellColor= 'black';
    cellSize = 50;
    tbl = document.createElement("div");
    constructor (size){
        this.size = size;
    }
    chessTable(){ 
        this.tbl.setAttribute('style', 'border:1px solid #000;display:grid;grid-template-columns:repeat('+this.size+', 1fr); width:' +(this.size*this.cellSize) + 'px');
        let cell = document.createElement("div");
        cell.setAttribute('style', 'width:' +this.cellSize+ 'px;height:' + this.cellSize + 'px;display:flex;align-items:center;justify-content:center;font-size:40px');

        for(let i =0; i<this.size; i++){
           for(let j = 0; j<this.size; j++) {
               let clone_cell = cell.cloneNode(true);
               if(i%2 == 0 && j%2 == 0 || (i%2 !== 0 && j%2 !== 0)){
                   clone_cell.style.backgroundColor = '#999';
                   clone_cell.dataset.color = 'black';
               }else{
                    clone_cell.style.backgroundColor = '#efefef';
                    clone_cell.dataset.color = 'white';
               }
               clone_cell.dataset. i = i ;
               clone_cell.dataset. j = j;
               clone_cell.onclick = this.clickCell;
               this.tbl.append(clone_cell);
           }
        }
        document.body.append(this.tbl);
    }
    clickCell(e){
        const el = e.target;
        this.cellI = el.dataset.i;
        this.cellJ = el.dataset.j;
        this.cellColor = el.dataset.color;
     
      return {
          'el': el,
          'i':el.dataset.i,
          'j':el.dataset.j,
           'color':el.dataset.color
        };
    }
      
}