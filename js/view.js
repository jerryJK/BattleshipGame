const view = {

  displayMessage: function(msg) {
		var messageWrapper = $(".message-wrapper");
		messageWrapper.text(msg);
	},

	displayHit: function(location) {
    let elem = $(`#${location}`);
    elem.addClass('hit');
	},

	displayMiss: function(location) {
		let elem = $(`#${location}`);
		elem.addClass('miss');
	}

};

export { view };


//test view methods
//view.displayMessage('test')
//view.displayHit('01');
//view.displayMiss('11');
