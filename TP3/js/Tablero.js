class Tablero {
  constructor(ctx, size) {
    this.ctx = ctx;
    this.fichasTeam1 = [];
    this.fichasTeam2 = [];
    this.espacios = [[]];
    this.size = size;
    this.turnoActivo = false;
    this.createHitBox();
    this.imageTeam1;
    this.imageTeam2;
    this.loadChip();
  }

  draw() {
    let image = document.querySelector('.img-tablero')
    let pat = this.ctx.createPattern(image, 'no-repeat');
    this.ctx.rect(0, 0, 655, 650);
    this.ctx.fillStyle = pat;
    this.ctx.fill();

    //Celdas para fichas
    this.espacios.forEach((espacio) => {
      espacio.forEach((espaci) => {
        this.ctx.beginPath();
        let posX = espaci.posX + espaci.width + 10 ;
        let posY = espaci.posY + espaci.height + 10 ;
        this.ctx.fillStyle = "#060A16";
        this.ctx.strokeStyle = "#fff";
        this.ctx.arc(posX, posY, 27, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
      });
    });
    //Fichas de ambos equipos
    this.fichasTeam1.forEach((ficha) => {
      ficha.draw();
    });
    this.fichasTeam2.forEach((ficha) => {
      ficha.draw();
    });
  }

  //Carga imagenes en fichas
  loadChip() {
    this.imageTeam1 = new Image();
    this.imageTeam1.src = "./assets/ficha1.jpg";
    this.imageTeam1.onload = () => {
      this.fichasTeam1.push(new Ficha(620, 40, 30, this.imageTeam1, this.ctx));
    };
    this.imageTeam2 = new Image();
    this.imageTeam2.src = "./assets/ficha2.jpg";
    this.imageTeam2.onload = () => {
      this.fichasTeam2.push(new Ficha(30, 40, 30, this.imageTeam2, this.ctx));
    };
  }

  //Retorna una ficha en caso de que las posiciones x y esten en su rango
  getSelectedChip(posX, posY) {
    if (this.turnoActivo) {
      for (let i = 0; i < this.fichasTeam1.length; i++) {
        if (this.fichasTeam1[i].hit(posX, posY)) {
          return this.fichasTeam1[i];
        }
      }
    } else {
      for (let i = 0; i < this.fichasTeam2.length; i++) {
        if (this.fichasTeam2[i].hit(posX, posY)) {
          return this.fichasTeam2[i];
        }
      }
    }
    return null;
  }

  //chequea el movimiento valido en filas y columnas
  checkMove(ficha) {
    let fichaX = ficha.getPosX();
    let fichaY = ficha.getPosY();
    let retornedSatus = false;
    let columna = this.getColSelected(fichaX, fichaY);
    let fila;
    // Una vez que tenemos columna
    if (columna != undefined) {
      //Verificar cual es la ultima fila disponible
      fila = this.getRowAvailable(columna);
      if (fila != undefined) {
        this.moveChip(ficha, columna, fila);
        retornedSatus = true;
        this.turnoActivo = !this.turnoActivo;
      }
    }
    if (retornedSatus) {
      return { retornedSatus, columna, fila };
    } else {
      return retornedSatus;
    }
  }

  //Mueve la ficha a la casilla adecuada y bloquea movimiento.
  //Luego agrega una ficha nueva al tablero
  moveChip(ficha, columna, fila) {
    //calcula el centro de la celda 
    let posX =
      this.espacios[fila][columna].posX +
      this.espacios[fila][columna].width + 10;
    let posY =
      this.espacios[fila][columna].posY +
      this.espacios[fila][columna].height + 10;
    ficha.move(posX, posY);
    ficha.setDrop();
    if (this.turnoActivo == true) {
      this.espacios[fila][columna].state = 1;
      this.fichasTeam1.push(new Ficha(620, 30, 30, this.imageTeam1, this.ctx));
    } else {
      this.espacios[fila][columna].state = 2;
      this.fichasTeam2.push(new Ficha(30, 40, 30, this.imageTeam2, this.ctx));
    }
  }
  //Retorna la columna seleccionada
  getColSelected(posX, posY) {
    let retorned;
    this.espacios[0].forEach((celda, index) => {
      if (
        posX >= celda.posX &&
        posX <= celda.posX + celda.width &&
        posY <= celda.posY
      ) {
        retorned = index;
      }
    });
    return retorned;
  }
  getRowAvailable(index) {
    let variable = this.espacios.length - 1;
    let retorned;
    let retornedSatus = false;
    for (let i = variable; i >= 0; i--) {
      if (retornedSatus == false && this.espacios[i][index].state == 0) {
        retornedSatus = true;
        retorned = i;
      }
    }
    return retorned;
  }

  //Crea las celdas 
  createHitBox() {
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        let blankSpace = {
          posX: 65 + x * 60,
          posY: 50 + y * 60,
          width: 60,
          height: 60,
          state: 0,
        };
        if (x == 0) {
          this.espacios[y] = new Array(this.size);
        }
        this.espacios[y][x] = blankSpace;
      }
    }
  }

  checkWin(fila, columna) {
    // obtiene las celdas diagonales, horizontales y verticales de una celda
    let diagL = [],
      diagR = [],
      horiz = [],
      vert = [];
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        // si estan en la misma fila componen su horizontal
        if (i == fila) {
          horiz.push(this.espacios[i][j]);
        }

        // si estan en la misma columna se agrega a vertical
        if (j == columna) {
          vert.push(this.espacios[i][j]);
        }

        // si esta en la diagonal izquierda 
        if (i - j == fila - columna) {
          diagL.push(this.espacios[i][j]);
        }

        // si esta en la diagonal derecha 
        if (i + j == fila + columna) {
          diagR.push(this.espacios[i][j]);
        }
      }
    }
    // chequea si algun jugador gana el juego
    return (
      this.checkFour(diagL) ||
      this.checkFour(diagR) ||
      this.checkFour(horiz) ||
      this.checkFour(vert)
    );
  }

  checkFour(cells = []) {
    let count = 0;
    let jugadorActivo;
    if (this.turnoActivo) {
      jugadorActivo = 1;
    } else {
      jugadorActivo = 2;
    }
    //recorre y verifica que la casilla este ocupada por 4 en linea (count == 4)
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].state == 0) {
        count = 0;
      } else if (cells[i].state == jugadorActivo) {
        count++;
      } else {
        count = 1;
      }

      jugadorActivo = cells[i].state;

      if (count == 4) {
        if (this.turnoActivo) {
          return 1;
        } else {
          return 2;
        }
      }
    }
    return false;
  }
}