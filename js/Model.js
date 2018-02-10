import Event from './EventDispatcher';

export default class Model  {
  constructor(items) {
      this._gameStart = false;
      this._targets = [];
      this._boardSize = 10;
    	this._numShips = 5;
    	this._shipLength = 3;
    	this._shipsSunk = 0;
      this._ships = [
    		{ locations: ["00", "01", "02"], hits: ["", "", ""] },
    		{ locations: ["24", "34", "44"], hits: ["", "", ""] },
        { locations: ["77", "78", "79"], hits: ["", "", ""] },
        { locations: ["75", "85", "95"], hits: ["", "", ""] },
    		{ locations: ["91", "92", "93"], hits: ["", "", ""] }
    	];

      this.targetAdded = new Event(this);
      this.showMessage = new Event(this);
      this.showHit = new Event(this);
      this.showMiss = new Event(this);
      this.gameStart = new Event(this);

  }

  fireShip(guess) {
    console.log(guess);
    if(this._gameStart && this._shipsSunk < this._numShips) {
		for (let i = 0; i < this._numShips; i++) {
			let ship = this._ships[i];
			let index = ship.locations.indexOf(guess);

			if (ship.hits[index] === "hit") {
				this.showMessage.notify("Ups, You hit this field before!");
				return true;
			} else if (index >= 0) {
				ship.hits[index] = "hit";
				this.showHit.notify(guess);
				this.showMessage.notify("YOU HIT!");

				if (this.isSunk(ship)) {
					this.showMessage.notify("SHIP SUNK!");
					this._shipsSunk++;
				}
        if (this._shipsSunk === this._numShips) {
          this.showMessage.notify("Congratulations, you have sunk all the ships!");
          this._gameStart = false;
        }
				return true;
			}
		}
		this.showMiss.notify(guess);
		this.showMessage.notify("YOU MISS!");
  }

		return false;
	}


  isSunk(ship) {
    for (let i = 0; i < this._shipLength; i++)  {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
      return true;
  }

  startGame() {
    this._targets = [];
    this._shipsSunk = 0;
    this._gameStart = true;
    this.showMessage.notify("Sink all ships, God Luck!");
    this.gameStart.notify();

    for (let i = 0; i < this._numShips; i++) {
			let ship = this._ships[i];
      ship.hits = [];
    }
  }

  addTarget(target) {
    this._targets= [...this._targets, target];
    this.targetAdded.notify(target);
  }

  getTargets() {
      return [...this._targets];
  }

}
