export default class View  {
  constructor(model,elements) {
    this._model = model;
    this._elements = elements;
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
