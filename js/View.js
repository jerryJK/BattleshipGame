import Event from './EventDispatcher';

export default class View  {
  constructor(model,elements) {
    this._model = model;
    this._elements = elements;
    this.startButtonClicked = new Event(this);
    this.cellClicked = new Event(this);

    let _this = this;

    // add listeners
    this._elements.gameBoard.find('td').on('click',function (event) {
        _this.cellClicked.notify(event.target.id);
    });

    this._model.handleTimer.attach((context, time) => {
        this._elements.timer.text(time);
    });

    this._model.showMessage.attach(function (context, msg) {
        _this.displayMessage(msg);
    });

    this._model.showHit.attach(function (context, location) {
        _this.displayHit(location);
    });

    this._model.showMiss.attach(function (context, location) {
        _this.displayMiss(location);
    });

    this._model.gameStart.attach(function() {
        _this.clearView();
    });



    this._model.targetAdded.attach((context, target) => {
        let targets = this._model.getTargets();
        console.log(targets);
      });

    this._elements.startButton.on('click',function () {
        _this.startButtonClicked.notify();
    });
  }

  displayMessage(msg) {
		this._elements.messageWrapper.text(msg);
	}

	displayHit(location) {
    let elem = $(`#${location}`);
    elem.addClass('hit');
	}

	displayMiss(location) {
		let elem = $(`#${location}`);
		elem.addClass('miss');
	}

  clearView() {
    this._elements.gameBoard.find('td').removeClass();
  }

}
