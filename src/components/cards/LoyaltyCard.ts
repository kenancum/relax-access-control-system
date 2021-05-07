import { basename } from 'path';
import Card from './Card';

export default class LoyaltyCard extends Card {
    protected static currentId = 2000;
    private loyalityPoints : number = 0;
  
    constructor(
      memberName: string,
      rating: number,
      credits: number,
      centreName: string){
        super(memberName,rating,credits,centreName);
        this._cardId = LoyaltyCard.currentId++;
    }

    /**
     * adds credits to the member's card
     * @param {number} credits number of credits to be added
     */
    public addCredits = (value: number): void => {
        this._credits += 30*value;
        this.loyalityPoints += 20*value;
    };
    
    /**
    * @return {number} decrements the credits  to show that a zone has been use
    */
    public useZone = (): void => {
      this._credits -= 3;
      this.loyalityPoints +=2;
    };
  
    public hasEnoughCredits() : boolean{ return this._credits >= 3; } 

    /**
     * @return {boolean} true if a card has loyality points
     */  
    public hasEnoughLoyalityPoints = (): boolean => this.loyalityPoints >= 2;
  
    /**
    * @param {number} convertCoins converts loyality points to coins
    */ 
    public convertCoins = (value: number): void =>{
      this.loyalityPoints+=value;
      this._credits-=value*5;
    }

    public toString = (): string =>
      "***Loyality Card***" +
      this.toString() +
      "Loyality Points : " +
      this.loyalityPoints +
      "\n";
      
  }