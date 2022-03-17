const cards = document.querySelectorAll('.memory-game');

 let hasFlipperCard = false;
 let firstCard;
 let secondCard;
 let lockBoadrd = false;



function flipCard() {
    if (lockBoadrd) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if(!hasFlipperCard) {
        hasFlipperCard = true;
        firstCard = this;
        return
    }

    secondCard = this;
    

    checkForMatch();
}

  function checkForMatch() {
      if (firstCard.dataset.framework===secondCard.dataset.framework) {
          disableCards();
          return;
      }

         unflipCards();
  }
    
  function disableCards() {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      resetBoard();
  } 

    function unflipCards() {
        lockBoadrd = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1200);
    }

    function resetBoard() {
     [hasFlipperCard, lockBoadrd] = [false, false];
     [firstCard, secondCard] = [null, null];
    }
   
    (function shuffle() {
        cards.forEach(card => {
            let randomPositon = Math.floor(Math.random() * 24);
            card.style.order = randomPositon;
        }); 
    })();
    
cards.forEach(card => card.addEventListener('click', flipCard));