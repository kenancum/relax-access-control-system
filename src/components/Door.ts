import Zone from './Zone';
/**
 * A door provides a one-way connection between two zones. It
 * has a door number and information about both the source and
 * the destination zone
 *
 */
 export default class Door{ 

    constructor(
        private _doorNumber: number,
        private _sourceZone: Zone,
        private _destinationZone: Zone
    ){
        this._doorNumber = _doorNumber;
        this._sourceZone = _sourceZone;
        this._destinationZone = _destinationZone;
    }

    /**
   * @return {number} gets door number
   */  
    public get doorNumber(){
        return this._doorNumber;
    }

    /**
   * @return {Zone} gets which zone is the source zone
   */    
    public get sourceZone(){
        return this._sourceZone;
    }

    /**
   * @return {Zone} gets which zone is the destination
   */   
    public get destinationZone(){
        return this._destinationZone;
    }
}