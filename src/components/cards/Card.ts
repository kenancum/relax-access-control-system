/**
 * A card is used to move through a door.
 */
 export default abstract class Card {
    protected _cardId?: number;
/**
   * Constructor for a Member's card
   * @param {string} _name - member's name
   * @param {number} _rating - member's rating
   * @param {number} _credits - inital number of credits
   * @param {string} _centre - centre at which a member is registered
   */

  constructor(
    protected _name: string,
    protected _rating: number,
    protected _credits: number,
    protected _centre: string
  ) {
  }
  /**
   * @return {string} member's name
   */
  public get name(){ return this._name }
  /**
   * @return {number} member's id
   */
   public get cardId(){ return this._cardId}   
/**
   * @return {number} member's rating
   */
  public get rating(){ return this._rating }
  
 /**
  * @return {number} number of credits on the card
  */
  public get credits(){ return this._credits }
  /**
   * changes a member's rating
   * @param {number} rating - new rating
   */

  public changeRating = (rating: number): void => {
    this._rating = rating;
  };

  /**
     * @return {boolean} true if a card has enough credits
     */  
  abstract hasEnoughCredits() : boolean;

  abstract useZone(): void;

  /**
   * @return {string} a String representation of the member card details
   */
  public toString = (): string =>
    "\nCard No: " +
    this._cardId +
    "\nName: " +
    this._name +
    "\nRating: " +
    this._rating +
    "\nCredits: " +
    this._credits +
    "\nRelax Centre : " +
    this._centre +
    "\n";
}


