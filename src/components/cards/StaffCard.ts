import Card from './Card';

export default class StaffCard extends Card {
    
    protected static currentId = 5000;
    protected _employeeNumber: number;
    protected _fitnessScore: number;

    constructor(
      memberName: string,
      employeeNumber: number,
      fitnessScore: number,
      centreName: string){
        super(memberName,10,5,centreName);
        this._cardId = StaffCard.currentId++;
        this._employeeNumber=employeeNumber;
        this._fitnessScore=fitnessScore;
    }

    /**
     * @param {number} _fitnessScore the credits to show that a zone has been use
     */
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