import Card from './cards/Card';
/**
 * A zone represents an area at a centre.Each zone has a name and a
 * capacity which represents the maximum number of people who can enter
 * the zone at any one time. Each zone must maintain a list of all cards
 * (and hence members) currently in the zone. These lists are updated
 * whenever members enter or leave a zone,and it is always possible to
 * say how many people(cards) are in the zone and who they are.
 */
 export default class Zone {

    private _cards: Array<Card> = new Array<Card>();

    constructor(
        private _name: string,
        private _capacity: number,
        private _rating: number
        ){
            this._name=_name;
            this._capacity=_capacity;
            this._rating=_rating;
    }
    
    /**
    *  @param {Card} card - Card to be added
    **/  
    public addCard = (card: Card): void => {
        this.cards.push(card);
    }

    /**
    *  @param {Card} card - Card to be removed
    **/
    public removeCard = (card: Card): void => {
        const index = this.cards.indexOf(card);
        if (index > -1) {
            this.cards.splice(index, 1);
        }
    }

    /**
    * @param {number} getNumberOfCards 
    * @return {this.cards.length} Spesific lengths of the cards
    **/
    public getNumberOfCards = (): number => this.cards.length;
    
    public whoAreInside = (): void =>{
        for (let card of this.cards) {
            console.log(card.toString());
          }
    }

    /**
    * @param {boolean} isCardInside Checks if the card is inside 
    * @return {this.cards.includes} Shows what is the card includes
    **/
    public isCardInside = (card: Card): boolean => this.cards.includes(card);
    
    /**
   * @return {string} Returns the name
   */
    public get name(){ return this._name;}   

    /**
   * @return {number} Returns the capacity
   */  
    public get capacity(){return this._capacity;}

    /**
   * @return {number} Returns the rating
   */  
    public get rating(){return this._rating;}

    /**
   * @return {Card} Returns the cards
   */    
    public get cards(){return this._cards;}
}
