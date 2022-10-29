document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvasGame');
    let btnReset = document.getElementById('restartGame');
    let img = document.querySelectorAll('.ficha');
    let img2 = document.querySelectorAll('.ficha2');
    let srcimg = "./assets/ficha2.jpg";
    let srcimg2 = "./assets/ficha1.jpg";
    canvas.width = 800;
    canvas.height = 650;
    let ctx = canvas.getContext('2d');

    let juego1 = new Juego(ctx, canvas.width, canvas.height);
    juego1.draw();
    canvas.addEventListener('mousedown', (eMouseDown) => {
        if (juego1.checkHit(eMouseDown.offsetX, eMouseDown.offsetY)) {
            canvas.addEventListener('mousemove', (eMouseMove) => {
                juego1.handleDrag(eMouseMove.offsetX, eMouseMove.offsetY);
            });

        }
    })
    canvas.addEventListener('mouseup', (eMouseUp) => {
        canvas.removeEventListener('mousemove', juego1.handleDrag);
        juego1.stopDragging();
    })
    function newGame() {
        juego1 = new Juego(ctx, canvas.width, canvas.height);
        juego1.draw();
    }
    btnReset.addEventListener("click", newGame)
    img.forEach(element => {
        element.addEventListener('click', () => {
            srcimg2 = element.src;
            juego1.cambiarFicha1(element.src)
        })
    });
    img2.forEach(element => {
        element.addEventListener('click', () => {
            srcimg = element.src;
            juego1.cambiarFicha2(element.src)
        })
    });


    


})