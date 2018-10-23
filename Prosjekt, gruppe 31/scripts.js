  // Velger alle kortene
  const cards = document.querySelectorAll('.memoryCard');


  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  // function flipCard() {
  //   this.classList.toggle('flip')
  //
  //   if (!hasFlippedCard) {
  //     // Det første klikket
  //     hasFlippedCard = true;
  //     firstCard = this;
  //
  //   } else {
  //     // Det andre klikket
  //     hasFlippedCard = false;
  //     secondCard = this;
  //
  //     // Matcher de?
  //     if (firstCard.dataset.framework === secondCard.dataset.framework) {
  //       // De matcher
  //       firstCard.removeEventListener('click', flipCard);
  //       secondCard.removeEventListener('click', flipCard);
  //     } else {
  //       // Hvis de ikke Matcher
  //         // For å se det andre kortet
  //         setTimeout(() => {
  //           firstCard.classList.remove('flip')
  //           secondCard.classList.remove('flip')
  //         }, 1500);
  //     }
  //   }
  // }

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip')

    if (!hasFlippedCard) {
      // Det første klikket
      hasFlippedCard = true;
      firstCard = this;

      return;
    }
    // Det andre klikket
    secondCard = this;

    checkForMatch();
  }

  function checkForMatch() {
    //Forkorte koden
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();

    // // Matcher de?
    // if (firstCard.dataset.framework === secondCard.dataset.framework) {
    //   // De matcher
    //   disableCards();
    // } else {
    //   // Hvis de ikke Matcher
    //   // For å se det andre kortet
    //   unflipCards();
    // }
  }

  function disableCards() {
    // De matcher
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }

  function unflipCards() {

    lockBoard = true
    // Hvis de ikke Matcher
    // For å se det andre kortet
    setTimeout(() => {
      firstCard.classList.remove('flip')
      secondCard.classList.remove('flip')

      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  (function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  })();

  cards.forEach(card => card.addEventListener('click', flipCard));
