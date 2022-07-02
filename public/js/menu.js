window.addEventListener('load', () => document.getElementById('yourSprite').src = `../material/sprites/${sessionStorage.getItem('sprite')}.png`)

function choseDiff($mode){
    sessionStorage.setItem('mode',JSON.stringify($mode));
    location.href = "../pages/table.html";
}

$poke.addEventListener('click', () => choseDiff($easy))
$super.addEventListener('click', () => choseDiff($normal))
$ultra.addEventListener('click', () => choseDiff($hard))
