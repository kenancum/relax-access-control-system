import Zone from './Zone';
import Door from './Door';
import Card from './cards/Card';

/**
 * This interface specifies the methods required to manage a centre.
 * A centre consists of a number of zones which have ratings, and are
 * connected by doors. Access through a door is by a card which must
 * have a rating equal or higher than the zone.
 *
 **/
 export default 
 interface RelaxCentre {
    /**
     * @return {string} - name of the centre
     **/
    getCentreName: () => string; 
        
    /**
     *  @param {Zone} zone - Zone to be added
     **/
    addZone: (zone: Zone) => void;
  
    /**
     * @param {Card} card - Card to be added
     **/
    addCard: (card: Card) => void;
  
    /**
     * @param {Door} door - door to be added
     **/
    addDoor: (door: Door) => void;
  
    /**
     * @param {string} zoneName
     * @return {Zone} - the Zone with the specified name
     **/
    findZone: (zoneName: string) => Zone;
  
    /**
     * @param {number} cardId - the specified card id
     * @return {Zone} - the Zone which contains the card id
     **/
    findCard: (cardId: number) => Zone;
  
    /**
     * Returns a string description of the result of a card requesting to move through a door.
     * A move will be successful if:
     * the rating of the card  >= the rating of the destination zone
     * AND the destination zone is not full
     * AND the card has sufficient credits
     * AND the card is currently in the source zone
     * If the move can be made, the card information is removed from the source
     * zone and added to the destination zone and a suitable message returned.
     * If the move cannot be made, the state of the system remains unchanged
     * and a message specifying the reason is returned.
     * @param {Card} card - is the card requesting the move
     * @param {number} doorNumber - is the number of the door through which the
     * card is requesting to move
     * @return {string} - a string describing the result of the request
     **/
    move: (card: Card, doorNumber: number) => string;
  
    /**
     * Returns true if a card is allowed to move through a door,
     * false otherwise. A move can be made if:
     * the rating of the card  >= the rating of the destination zone
     * AND the destination zone is not full
     * AND the card has sufficient credits
     * AND the card is currently in the source zone
     * @param {Card} card - is the card requesting the move
     * @param {Door} door - is the door through which the card is requesting to move
     * @return {boolean} true if a card is allowed through a door, false otherwise
     **/
    canMove: (card: Card, door: Door) => boolean;
  
    /**
     *  Returns a string representation of all the cards in the specified zone
     *  @param {Zone} zone - the specified zone
     *  @return {string} a string representation of all cards in the zone
     **/
    cardsInZone: (zone: Zone) => string;
  
    /**
     * Returns a string representation of all the cards in all zones
     * @return {string} a string representation of all cards in all zones
     **/
    cardsInAllZones: () => string;
  
    /**
     * Moves a specified card to the outside zone
     * @param {Card} card - the card to be moved to the outside
     **/
    moveToOutside: (card: Card) => void;
  
    /**
     * Moves all cards into the outside zone
     **/
    moveAllToOutside: () => void;

    /**
     * Creates a preset centre
     **/
    exampleCentre:() => void;
  }
  