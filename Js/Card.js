class Card {
  constructor() {
    this.type = null;
    this.content = null;
    this.id = null;
  }

  static getCardInfo() {
    var cardsInfoRef = database.ref('cardsInGame');
    cardsInfoRef.on("value", (data) => {
      allCards = data.val();
      
    })



 
  }

  

  
}

  





  //shuffleCards
  //hw - how to shuffle an array?
  //condition - how to aleternatively give the cards to the players and stop when each player has 10 cards
  //distributeCards
  //playWithCards


        
