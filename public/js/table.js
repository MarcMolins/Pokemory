window.addEventListener('load', () => {
    const $cards = JSON.parse(sessionStorage.getItem('mode'));
    const $arrayCards = $cards.concat($cards)
    $arrayCards.sort(() => Math.random() - 0.5)

    $arrayCards.forEach(e => {
        const $table = document.getElementById('table');
        let $newCard = document.createElement('div');
        $newCard.setAttribute('data-value',e);
        $newCard.classList.add('card')

        let $newImg = document.createElement('img');
        $newImg.src = `../material/cards/${e}.png`;

        $newCard.appendChild($newImg);
        $table.appendChild($newCard);
    })
})
