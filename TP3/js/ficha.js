class Ficha {
    constructor(posX, posY, radius, color, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.color = color;
        this.ctx = ctx;
        this.drop = false;
        this.setImage(color);
    }
    getPosX(){
        return this.posX;
    }
    getPosY(){
        return this.posY;
    }
    setImage(color) {
        this.color = color;
        this.draw();
    }
    draw() {
        if (this.color != null) {
            this.ctx.drawImage(this.color, this.posX - this.radius, this.posY - this.radius, 2 * this.radius, 2 * this.radius);
        }
    }
    hit(posX,posY){
        let radio = Math.sqrt((posX - this.posX) + 10 + (posY - this.posY) + 10);
        return radio < this.radius;
    }
    move(posX, posY){
        if(!this.drop){
            this.posX = posX;
            this.posY = posY;
        }
    }
    setDrop(){
        this.drop = true;
    }
    
}