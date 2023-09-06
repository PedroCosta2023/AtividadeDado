const pontuacao0 = document.getElementById('score--0')
const pontuacao1 = document.getElementById('score--1')
const pontuacaoCorrente0 = document.getElementById('current--0')
const pontuacaoCorrente1 = document.getElementById('current--1')
const newGame = document.getElementById('newGameBtn')
const jogaDado = document.getElementById('jogaDadoBtn')
const image  = document.querySelector('img')
const player0 = document.getElementById('player0')
const player1 = document.getElementById('player1')

newGame.addEventListener('click', ()=>{
    pontuacao0.textContent = 0
    pontuacao1.textContent = 0
    pontuacaoCorrente0.textContent = 0
    pontuacaoCorrente1.textContent = 0

})

function trocarUser(){
    player0.classList.remove('player--active');
    player1.classList.add("player--active")
}

jogaDado.addEventListener('click', ()=>{
    let randomico = Math.floor(Math.random() *6) + 1;
    console.log(randomico)

    switch(randomico){
        case 1: 
            image.src = "img/dice-1.png"
            pontuacaoCorrente0.textContent = 0
            trocarUser;
            break;

        case 2:
            image.src ="img/dice-2.png";
            pontuacaoCorrente0.textContent = 2 
            break;

        case 3:
            image.src="img/dice-3.png";
            pontuacaoCorrente0.textContent =  3
            break;
        
        case 4:
            image.src="img/dice-4.png";
            pontuacaoCorrente0.textContent = 4
            break;

        case 5:
            image.src="img/dice-5.png";
            pontuacaoCorrente0.textContent = 5
            break;

         case 6:
            image.src="img/dice-6.png";
            pontuacaoCorrente0.textContent = 6
            break;
    }

    
})