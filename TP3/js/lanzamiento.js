//CARROUSEL DE PERSONAJES
const personajes = document.querySelectorAll('.card-character');
const nextPersonajes = document.querySelector('.flecha-d-personajes');
const prevPersonajes = document.querySelector('.flecha-i-personajes');
let cont = 0;
console.log(personajes)

window.addEventListener('load', ()=>{
	personajes[0].classList.add('active');
	personajes[1].classList.add('active');
})

nextPersonajes.addEventListener('click', () =>{
	paginationTwoPersonajes();
})

prevPersonajes.addEventListener('click',() =>{
	paginationOnePersonajes();
})
const paginationOnePersonajes = () =>{
    if(cont == 1){
        personajes[2].classList.remove('active');
        personajes[3].classList.remove('active');
        personajes[0].classList.add('active');
        personajes[1].classList.add('active');
        cont--;
    }else if(cont == 2){       
        personajes[4].classList.remove('active');
        personajes[5].classList.remove('active');
        personajes[2].classList.add('active');
        personajes[3].classList.add('active');
        cont--;
    }
}

const paginationTwoPersonajes = () =>{
    if(cont == 0){
        personajes[0].classList.remove('active');
	    personajes[1].classList.remove('active');
        personajes[2].classList.add('active');
	    personajes[3].classList.add('active');
        cont++;
    }else if(cont == 1){
        personajes[2].classList.remove('active');
	    personajes[3].classList.remove('active');
        personajes[4].classList.add('active');
	    personajes[5].classList.add('active');
        cont++;
    }
}