import Card from './Card';

export default class LoyaltyCard extends Card {
    protected static currentId = 2000;
    private loyalityPoints : number = 0;
  
    constructor(
      memberName: string,
      rating: number,
      credits: number){
        super(memberName,rating,credits);
        this._cardId = LoyaltyCard.currentId++;
    }
    public addCredits = (value: number): void => {
        this._credits += value;
        this.loyalityPoints += 20*value;
    };
    public useZone = (): void => {
      this._credits -= 3;
      this.loyalityPoints -=2;
    };
  
    public hasEnoughCredits() : boolean{ return this._credits >= 3; } 
    public hasEnoughLoyalityPoints = (): boolean => this._credits >= 2;
  
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