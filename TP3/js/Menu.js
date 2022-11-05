document.addEventListener('DOMContentLoaded', () => {
    let size5 = document.querySelector('.size5');
    let size6 = document.querySelector('.size6');
    let size8 = document.querySelector('.size8');
    let canvas = document.getElementById('canvasGame');
    let btnReset = document.getElementById('restartGame');
    let img = document.querySelectorAll('.ficha');
    let img2 = document.querySelectorAll('.ficha2');
    let srcimg = "./assets/ficha2.jpg";
    let srcimg2 = "./assets/ficha1.jpg";
    canvas.width = 800;
    canvas.height = 650;
    let ctx = canvas.getContext('2d');

    let juego1 = new Juego(ctx, canvas.width, canvas.height,8);
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
        juego1 = new Juego(ctx, canvas.width, canvas.height,8);
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


    size5.addEventListener("click", () => {
        let canvas = document.getElementById('canvasGame');
        let btnReset = document.getElementById('restartGame');
        let img = document.querySelectorAll('.ficha');
        let img2 = document.querySelectorAll('.ficha2');
        let srcimg = "./assets/ficha2.jpg";
        let srcimg2 = "./assets/ficha1.jpg";
        canvas.width = 800;
        canvas.height = 650;
        let ctx = canvas.getContext('2d');
        juego1 = new Juego(ctx, canvas.width, canvas.height, size5.value);
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
            juego1 = new Juego(ctx, canvas.width, canvas.height, size5.value);
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

    size6.addEventListener("click", () => {
        let canvas = document.getElementById('canvasGame');
        let btnReset = document.getElementById('restartGame');
        let img = document.querySelectorAll('.ficha');
        let img2 = document.querySelectorAll('.ficha2');
        let srcimg = "./assets/ficha2.jpg";
        let srcimg2 = "./assets/ficha1.jpg";
        canvas.width = 800;
        canvas.height = 650;
        let ctx = canvas.getContext('2d');

        juego1 = new Juego(ctx, canvas.width, canvas.height, size6.value);
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
            juego1 = new Juego(ctx, canvas.width, canvas.height, size5.value);
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

    size8.addEventListener("click", () => {
        let canvas = document.getElementById('canvasGame');
        let btnReset = document.getElementById('restartGame');
        let img = document.querySelectorAll('.ficha');
        let img2 = document.querySelectorAll('.ficha2');
        let srcimg = "./assets/ficha2.jpg";
        let srcimg2 = "./assets/ficha1.jpg";
        canvas.width = 800;
        canvas.height = 650;
        let ctx = canvas.getContext('2d');

        juego1 = new Juego(ctx, canvas.width, canvas.height, size8.value);
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
            juego1 = new Juego(ctx, canvas.width, canvas.height, size5.value);
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
})