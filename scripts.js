








const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll('.quadroReceitas')

for (let card of cards) {
    card.addEventListener("click", function() {
         
        var cardImg = card.getElementsByTagName("img")[0];
        var imgSrc = cardImg.getAttributeNode('src').value;
        var imgAlt = cardImg.getAttributeNode('alt').value;
        


        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `${imgSrc}`;
        modalOverlay.querySelector('img').alt = `${imgAlt}`;

        modalOverlay.querySelector('.modal-title').innerHTML = card.querySelector('.img-title').textContent;
        modalOverlay.querySelector('.modal-chef').innerHTML = card.querySelector('.img-chef').textContent;



       modalOverlay.querySelector('.quadroReceitas')
    })
}

