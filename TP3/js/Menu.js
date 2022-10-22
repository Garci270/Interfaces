document.addEventListener('DOMContentLoaded', () =>{
    let canvas = document.getElementById('canvasGame');
    let btnReset = document.getElementById('restartGame');
    let btnInstructions = document.getElementById('btnInstructions');
    let instructions = document.getElementsByClassName("instructions")

    canvas.width = 800;
    canvas.height = 650;
    let ctx = canvas.getContext('2d');
    let image = new Image();
    image.src = "./assets/img/tablero.jpg"
    image.onload = () =>{
        ctx.drawImage(image,0,0);
    }

    let juego1 = new Juego(ctx, canvas.width,canvas.height);
    juego1.draw();

    canvas.addEventListener('mousedown', (eMouseDown) =>{
        if(juego1.checkHit(eMouseDown.offsetX, eMouseDown.offsetY)){
            canvas.addEventListener('mousemove', (eMouseMove) => {
                juego1.handleDrag(eMouseMove.offsetX, eMouseMove.offsetY);
            });
           
        }
    })
    canvas.addEventListener('mouseup', (eMouseUp) => {
        canvas.removeEventListener('mousemove', juego1.handleDrag);
        juego1.stopDragging();
    })
    function newGame(){
        juego1 = new Juego(ctx, canvas.width,canvas.height);
        juego1.draw();
    }
    const showInstructions = () => {
        console.log(instructions[0].classList);
           instructions[0].classList.toggle('show');
    }
    btnReset.addEventListener("click", newGame)
    btnInstructions.addEventListener("click",showInstructions);
   
})