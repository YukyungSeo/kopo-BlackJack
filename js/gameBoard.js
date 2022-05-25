import Deck from "./models/Deck.js";
import Dealer from "./models/Dealer.js";
import User from "./models/User.js";

export default class GameBoard {
    constructor(){
        this.deck = new Deck();
        this.dealer = new Dealer();
        this.user = new User();
    }
    init(){
        // deck 섞기
        this.deck.shuffle();
        // 카드 2장씩 나눠주기
        // hit();
        // hit();
        // // 유저 카드는 다 보여주기
        // displayUserCard();
        // // 딜러 카드 보여주기
        // displayDillerCard();
    }

    hit(){
        const popDeck = this.deck.popCard();
        this.user.addCard(popDeck);
        
        if(true) {
            const popDeck2 = this.deck.popCard();
            this.dealer.addCard(popDeck2);
        }
        //console.log(this.deck.deck.length);
        console.log(this.user.cards);
        alert("tests~!!");

    }

    stand() {
        console.log("stand()");
        while(this.cardValueCalculation() <= 21) {
            dealer.addCard(deck.popCard());
        }
    }

    cardValueCalculation() {
        // 정빈이 여기!
        // 카드 점수가 21점 이하인지 계산하기
        // 에이일 경우 11일 때와 1일 때를 동시에 계산하여
        // 둘 중 21을 넘지 않으면서 가장 큰 값을 리턴 할 것
    }

    showCard(){
        //유저 카드를 이미지 
        for(let i=0; i<this.user.cards.length; i++){
            const doc = document.getElementById('dillercard');
            doc.innerHTML=`<img class="card" src="./img/${deck.cardValue}_of_clubs.png" alt=""></img>`;   
        }
    }
}

