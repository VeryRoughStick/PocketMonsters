import fetch from 'node-fetch';

var StarterName; 
var StarterType;
var StarterImage;

var EnemyName; 
var EnemyType;
var EnemyImage;

function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(allpokemon => console.log(allpokemon));
}

async function getStarterPokemon(num){
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();
    
    let res = await fetch(url);
    let pokemon = await res.json();

    StarterName = pokemon["name"];
    StarterType = pokemon["types"];
    StarterImage = pokemon["sprites"]["front-default"];    
}

async function getPokemon(num){
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();
    
    let res = await fetch(url);
    let pokemon = await res.json();

    EnemyName = pokemon["name"];
    EnemyType = pokemon["types"];
    EnemyImage = pokemon["sprites"]["front-default"];    
}


function giveStarter(){
    
    let StartVal = Math.floor(Math.random() * 3);
    
    if(StartVal == 1){
        getStarterPokemon(1);
    }
    else if(StartVal ==2){
        getStarterPokemon(4);
    }
    else if(StartVal ==3){
        getStarterPokemon(7);
    }
}

// function battlePokemon(num, num2){
//     let StartVal = Math.floor(Math.random() * num) + num2;
//     getPokemon(StartVal);
    
//     let probability = Math.floor(Math.random()*)
    
// }

// function checkEffective(Pokemon){
//     if(Pokemon[1].equals("normal"));
// }
