// *Menu seleccion de personaje */
plySel = ($char) => $charImageContainer.src = `material/sprites/${$char}.png`;
document.getElementById('boySelector').addEventListener('mouseover', function(){plySel(character.boy.char)});
document.getElementById('girlSelector').addEventListener('mouseover', function(){plySel(character.girl.char)});

selClick = ($sprite) => {
    sessionStorage.setItem('sprite', $sprite);
    location.href = "pages/menu.html";
}
document.getElementById('boySelector').addEventListener('click', function(){selClick(character.boy.sprite)});
document.getElementById('girlSelector').addEventListener('click', function(){selClick(character.girl.sprite)});



