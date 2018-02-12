import Event from './EventDispatcher';

export default class Model  {
  constructor(items) {
      this._gameStart = false;
      this._timer = 0;
      this._intervalId;
      this._targets = [];
      this._boardSize = 10;
    	this._numShips = 5;
    	this._shipLength = 3;
    	this._shipsSunk = 0;
      this._ships = [
          { locations: [0, 0, 0], hits: ["", "", ""] },
          { locations: [0, 0, 0], hits: ["", "", ""] },
          { locations: [0, 0, 0], hits: ["", "", ""] },
          { locations: [0, 0, 0], hits: ["", "", ""] },
          { locations: [0, 0, 0], hits: ["", "", ""] }
    	];

      this.targetAdded = new Event(this);
      this.showMessage = new Event(this);
      this.showHit = new Event(this);
      this.showMiss = new Event(this);
      this.gameStart = new Event(this);
      this.handleTimer = new Event(this);
      this.handleShipsLeft = new Event(this);

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

          let numbShipsLeft = this._numShips - this._shipsSunk;
          this.handleShipsLeft.notify(numbShipsLeft);
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
    this._timer = 0;
    this._targets = [];
    this._shipsSunk = 0;
    this._gameStart = true;
    this.showMessage.notify("Sink all ships, Good Luck!");
    this.gameStart.notify();
    this.handleTimer.notify(0);
    clearInterval(this._intervalId);
    this.generateShipLocations();

    for (let i = 0; i < this._numShips; i++) {
			let ship = this._ships[i];
      ship.hits = [];
    }

    this._intervalId	=	setInterval(()	=>	{
        this._timer++;
        this.handleTimer.notify(this._timer);
        if(!this._gameStart) {
          clearInterval(this._intervalId);
        }
        console.log(this._timer);
    },1000);

  }

  generateShipLocations() {
    let locations;
    for (let i = 0; i < this._numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this._ships[i].locations = locations;
    }
    console.log(this._ships);
  }

  generateShip() {
    let direction = Math.floor(Math.random() * 2);
    let row, col;

    if (direction === 1) { // horizontal
      row = Math.floor(Math.random() * this._boardSize);
      col = Math.floor(Math.random() * (this._boardSize - this._shipLength));
    } else { // vertical
      row = Math.floor(Math.random() * (this._boardSize - this._shipLength));
      col = Math.floor(Math.random() * this._boardSize);
    }

    let newShipLocations = [];
    for (let i = 0; i < this._shipLength; i++) {
      if (direction === 1) {
        newShipLocations.push(row + "" + (col + i));
      } else {
        newShipLocations.push((row + i) + "" + col);
      }
    }
    return newShipLocations;
  }

  collision(locations) {
    for (let i = 0; i < this._numShips; i++) {
      let ship = this._ships[i];
      for (let j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  }

  addTarget(target) {
    this._targets= [...this._targets, target];
    this.targetAdded.notify(target);
  }

  getTargets() {
      return [...this._targets];
  }

}
