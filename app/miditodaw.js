var midi = require('midi');
var output = new midi.output();

var midiManager = module.exports = function midi() {};

midiManager.connect = function(){
	output.openPort(1);

	// (knob 176) (controller 22) (message 1)
	//output.sendMessage([176,22,1]);

	// On (send note 147) (note 36) (message 127)
	output.sendMessage([147,36,127]);

	// Off (send note 147) (note 36) (message 127)
	output.sendMessage([131,36,127]);

	output.closePort(1);
}

midiManager.sendNote = function(){
	console.log("Sending Midi Notes ^_^");
}

// 67001245

