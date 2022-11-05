class Juego {
    constructor(ctx, width, height,size){
        this.ctx = ctx;
        this.tablero = new Tablero(ctx,size);
        this.mode = '';
        this.width = width;
        this.height = height;
        this.selectedChip = null;
        this.gameOver = false;
        this.srcimgTeam1 = "";
        this.srcimgTeam2 = "";
    }

    cambiarFicha1(image){
        this.tablero.cambiarFicha1(image);
    }

    cambiarFicha2(image){
        this.tablero.cambiarFicha2(image);
    }

    draw(){
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.tablero.draw();
    }
    checkHit(posX, posY){
        if (this.gameOver) {
            return;
        }
        let selectedChip = this.tablero.getSelectedChip(posX, posY);
        if (selectedChip) {
                this.mode = 'dragging';
                this.selectedChip = selectedChip;
                return true;
        }
        return false;
    }
    handleDrag(posX, posY){
        if(this.mode === 'dragging' && this.selectedChip){
            this.selectedChip.move(posX, posY);
            this.draw();
        }
    }
    stopDragging(){
        if(this.mode === 'dragging'){
            this.checkMove();
        }
        this.mode = 'standBy';
    }
    checkMove(){
        let checkMove = this.tablero.checkMove(this.selectedChip);
        let checkWin;
        if(checkMove.retornedSatus){
            this.draw();
            checkWin = this.tablero.checkWin(checkMove.fila, checkMove.columna);
            if(checkWin == 1){
                this.gameOver = true;
                this.playerWin(1)
            }
            if(checkWin == 2){
                this.gameOver = true;
                this.playerWin(2)
            }
        }
    }
    playerWin(player){
        let size = 90;
        let text;
        if (player == 1) {
            this.ctx.fillStyle = "white";
            this.ctx.strokeStyle = "white";
            text = "Stark!";
        } else {
            this.ctx.fillStyle = "blue";
            this.ctx.strokeStyle = "blue";  
            text = "Caminante!";
        }
        this.ctx.font = size + "px Times New Roman";
        this.ctx.lineJoin = "round";
        this.ctx.lineWidth = size / 10;
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";    
        let offset = size * 0.9;
        this.ctx.strokeText("Gana el equipo", this.height / 2, this.width / 3);
        this.ctx.fillText("Gana el equipo", this.height / 2, this.width / 3);
        this.ctx.strokeText(text, this.height / 2, this.width / 3 + offset);
        this.ctx.fillText(text, this.height / 2, this.width / 3 + offset);
        
    }

    selectLinea(){
        let size = 90;
        let text;
        this.ctx.fillStyle = "red";
        this.ctx.strokeStyle = "white";
        text = "Dimensiones";
        this.ctx.font = size + "px Times New Roman";
        this.ctx.lineJoin = "round";
        this.ctx.lineWidth = size / 20;
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";    
        let offset = size * 0.9;
        this.ctx.strokeText("Selecciona las", this.height / 2, this.width / 3);
        this.ctx.fillText("Selecciona las", this.height / 2, this.width / 3);
        this.ctx.strokeText(text, this.height / 2, this.width / 3 + offset);
        this.ctx.fillText(text, this.height / 2, this.width / 3 + offset);
        
    }
}