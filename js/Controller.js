export default class Controller  {
  constructor(model,view) {
    this._model = model;
    this._view = view;

    var _this = this;

    this._view.cellClicked.attach(function (context,target) {
        _this.addTarget(target);
    });

  }

  addTarget(target) {
    console.log(target);
    this._model.addTarget(target);
    //this._view.displayHit(target);
  }


};
