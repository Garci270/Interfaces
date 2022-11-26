const itemsGameplay = document.querySelector('.list-galery');
const galeryNext = document.querySelector('.carousel-next');
const galeryPrev = document.querySelector('.carousel-prev');



console.log(itemsGameplay.clientWidth);

galeryNext.addEventListener('click', ()=>{
	itemsGameplay.scrollLeft += 500;
	let lis = document.querySelectorAll(".slide-galery")
	lis.forEach(x =>{
		x.classList.remove('moveRightLi')
	})
	setTimeout(() =>{
		lis.forEach(x =>{
			x.classList.add('moveRightLi');
		})
	}, 100)
})
galeryPrev.addEventListener('click', ()=>{
	itemsGameplay.scrollLeft -= 500;
	let lis = document.querySelectorAll(".slide-galery")
	lis.forEach(x =>{
		x.classList.remove('moveLeftLi')
	})
	setTimeout(() =>{
		lis.forEach(x =>{
			x.classList.add('moveLeftLi');
		})
	}, 100)
})


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

//scroll history

let img1scroll = document.querySelector("#img-1-scroll");
let img2scroll = document.querySelector("#img-2-scroll");
let img3scroll = document.querySelector("#img-3-scroll");
let card1scroll = document.querySelector("#card-1-scroll");
let card2scroll = document.querySelector("#card-2-scroll");
let card3scroll = document.querySelector("#card-3-scroll");
window.addEventListener('scroll', e =>{
    console.log(window.scrollY);
    if(window.scrollY >= 1935 && window.scrollY < 2440){
        console.log("object");
        card1scroll.classList.add('opacity-set');
        card2scroll.classList.remove('opacity-set');
        card3scroll.classList.add('opacity-set');
        img1scroll.classList.add('opacity-set');
        img2scroll.classList.remove('opacity-set');
        img3scroll.classList.add('opacity-set');
    }else if(window.scrollY >= 2440){
        card1scroll.classList.add('opacity-set');
        card2scroll.classList.add('opacity-set');
        card3scroll.classList.remove('opacity-set');
        img1scroll.classList.add('opacity-set');
        img2scroll.classList.add('opacity-set');
        img3scroll.classList.remove('opacity-set');
    }
    else if(window.scrollY < 1935){
        card1scroll.classList.remove('opacity-set');
        card2scroll.classList.add('opacity-set');
        card3scroll.classList.add('opacity-set');
        img1scroll.classList.remove('opacity-set');
        img2scroll.classList.add('opacity-set');
        img3scroll.classList.add('opacity-set');
    }
})

//sprite
let contador = 1;
setInterval(()=>{
    const sprite = document.querySelector('#sprite');
    if(contador == 10){
        sprite.classList.remove('step-'+contador);
        sprite.classList.add('step-'+1);
        contador = 1;
    }else{
        sprite.classList.remove('step-'+contador);
        contador++;
        sprite.classList.add('step-'+contador);
        console.log(contador);
    }
},300)