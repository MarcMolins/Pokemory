// character object
const character = {
    boy:{
        char: "char_boy",
        sprite: "boy"
    },
    girl:{
        char: "char_girl",
        sprite: "girl"
    }
}

// cards array
const cards = {
    easy: ['pikachu','charmander','bulbasaur','squirtle'],
    normal: ['chikorita','cindaquil','totodile','phanpy'],
    hard: ['plusle','torchic','treecko','mudkip']
}
$easy = cards.easy;
$normal = $easy.concat(cards.normal);
$hard = $normal.concat(cards.hard);

//dificult selector
const $poke = document.getElementById('poke');
const $super = document.getElementById('super');
const $ultra = document.getElementById('ultra');

const $charImageContainer = document.getElementById('charImage');