import fetch from 'node-fetch';

var Starter; 

function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(allpokemon => console.log(allpokemon));
}

function giveStarter(){
    let StartVal = Math.floor(Math.random() * 3);
    
    if(StartVal == 1){
        Starter = 1;
    }
    else if(StartVal ==2){
        Starter = 4;
    }
    else if(StartVal ==3){
        Starter = 7;
    }
}

