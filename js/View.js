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

    this._model.targetAdded.attach(function (context, target) {
        _this.displayMiss(target);
        _this.show();
        console.log(target);
    });

    this._elements.startButton.on('click',function () {
        _this.startButtonClicked.notify();
    });
  }


  show() {
    let targets = this._model.getTargets();
    console.log(targets);
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

}
