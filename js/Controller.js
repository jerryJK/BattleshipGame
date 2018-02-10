export default class Controller  {
  constructor(model,view) {
    this._model = model;
    this._view = view;

    var _this = this;

    this._view.cellClicked.attach(function(context,target) {
        _this.showResult(target);
    });

    this._view.startButtonClicked.attach(function() {
        _this.startGame();
    });

  }

  showResult(target) {
    console.log(target);
    this._model.fireShip(target);
    this._model.addTarget(target);
    //this._view.displayHit(target);
  }

  startGame() {
    this._model.startGame();
  }


};
