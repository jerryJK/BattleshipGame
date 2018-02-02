import Event from './EventDispatcher';

export default class Model  {
  constructor(items) {
      this._targets = [];
      this.targetAdded = new Event(this);
  }

  addTarget(target) {
      this._targets= [...this._targets, target];
      this.targetAdded.notify(target);
  }

  getTargets() {
      return [...this._targets];
  }

}
