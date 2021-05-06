import Zone from './Zone';
import Door from './Door';
import RelaxCentre from './RelaxCentre';
import Card from './cards/Card';

export class RelaxSite implements RelaxCentre{

    private centreName: string = "";
    private zones: Array<Zone> = [ new Zone("Outside",1000,0), new Zone("Reception",100,1)];
    private cards: Array<Card>= new Array<Card>();
    private doors: Array<Door>= [ new Door(0,this.zones[0],this.zones[1]),  new Door(1,this.zones[1],this.zones[0])];

    getCentreName = (): string => this.centreName;

    addZone = (zone: Zone): void => {
        this.zones.push(zone);
    }

    addCard = (card: Card): void =>{
        this.cards.push(card);
    }

    addDoor = (door:Door): void =>{
        this.doors.push(door);
    }

    findZone = (zoneName: string): Zone => this.zones.find(zone => zone.name === zoneName)!;

    findCard = (cardId: number): Zone => {
        const card = this.cards.find(card => card.cardId === cardId);

        for (let item of this.zones) {
            if(item.isCardInside(card!)){
                return item;
            }
          }
          return this.zones[0];
    };
    
    move = (card: Card, doorNumber: number): string => {

        const destinationZone = this.doors[doorNumber].destinationZone;
        const sourceZone = this.doors[doorNumber].sourceZone;


        if(destinationZone.getNumberOfCards() >= destinationZone.capacity){
            return "Destination is full!";
        }
        if(!card.hasEnoughCredits){
            return "Unsufficient credits!"
        }
        if(!sourceZone.isCardInside){
            return "Card is not listed in the source zone"
        }

        sourceZone.removeCard(card);
        destinationZone.addCard(card);

        return "Successful entry";
    }

    canMove = (card: Card, door: Door): boolean => {
        const destinationZone = door.destinationZone;
        const sourceZone = door.sourceZone;

        if(destinationZone.getNumberOfCards() < destinationZone.capacity || card.hasEnoughCredits||sourceZone.isCardInside)
            return true;
        return false;
    };

    cardsInZone = (zone: Zone): string => {
        let cardsString = "";

        for (let card of zone.cards) {
            cardsString += card.toString()
          }
        return cardsString;
    }
    
    cardsInAllZones = (): string => {
        let cardsString = "";

        for (let zone of this.zones) {
            for(let card of zone.cards){
                cardsString += card.toString();
            }
          }
        return cardsString;
    }

    moveToOutside = (card: Card): void => {
        this.move(card,1);
    }

    moveAllToOutside = (): void => {
        for (let zone of this.zones) {
            for(let card of zone.cards){
                this.moveToOutside(card);
            }
          }
    }
    
    exampleCentre = (): void => {
        const templateZones = [
            new Zone("Pool", 3,10),
            new Zone("Sauna", 5,2),
            new Zone("Sun Bed", 1,1)
        ];

        const templateDoors = [
            new Door(2,this.findZone("Reception"),this.findZone("Pool")),
            new Door(3,this.findZone("Pool"),this.findZone("Reception")),
            new Door(4,this.findZone("Sauna"),this.findZone("Reception")),
            new Door(5,this.findZone("Reception"),this.findZone("Sun Bed")),
            new Door(6,this.findZone("Sun Bed"),this.findZone("Reception")),
            new Door(7,this.findZone("Pool"),this.findZone("Sauna"))
        ];

        for(let zone of templateZones){
            this.addZone(zone);
        }
        for(let door of templateDoors){
            this.addDoor(door);
        }
    }

}