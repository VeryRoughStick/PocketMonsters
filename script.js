import fetch from 'node-fetch';

function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(allpokemon => console.log(allpokemon));
}

// function giveStarter(){
//     1 4 7
    
// }

