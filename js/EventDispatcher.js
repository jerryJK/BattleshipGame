export default class Event {
    constructor(sender) {
        this._sender = sender;
        this._listeners = [];
    }

    attach(listener) {
        this._listeners.push(listener);
    }

    notify(args) {
        for (let i = 0; i < this._listeners.length; i++) {
            console.log(this._listeners[i]);

            this._listeners[i](this.sender, args);
        }
    }
}
