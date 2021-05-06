import Card from './Card';

export default class StaffCard extends Card {
    
    protected static currentId = 5000;
    protected _employeeNumber: number;
    protected _fitnessScore: number;

    constructor(
      memberName: string,
      rating: number,
      credits: number,
      employeeNumber: number,
      fitnessScore: number){
        super(memberName,10,5);
        this._cardId = StaffCard.currentId++;
        this._employeeNumber=employeeNumber;
        this._fitnessScore=fitnessScore;
    }
    public useZone = (): void => {
        this._fitnessScore+=1;
    };
  
    hasEnoughCredits(): boolean {
      return true;
    }
    
    public toString = (): string =>
      "***Staff Card***" +
      this.toString();
  }