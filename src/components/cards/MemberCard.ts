import Card from './Card';

export default class MemberCard extends Card {
    protected static currentId = 1000;
    constructor(
      memberName: string,
      rating: number,
      credits: number,
      centre: string){
        super(memberName,rating,credits,centre);
        this._cardId = MemberCard.currentId++;
      }
    /**
     * decrements the credits to show that a zone has been use
     */
     public useZone = (): void => {
      this._credits -= 4;
    };
  
    /**
     * @return {boolean} true if a card has enough credits to enter a zone,
     * else false
     */
    public hasEnoughCredits = (): boolean => this.credits >= 4;
  
    /**
     * adds credits to the member's card
     * @param {number} credits number of credits to be added
     */
    public addCredits = (credits: number): void => {
      this._credits += credits;
    };
  
    public toString = (): string =>
      "***Member Card***" +
      this.toString();
      
  }