var midi = require('midi');
var output = new midi.output();

var midiManager = module.exports = function midi() {};



// note should be an array with 3 values
midiManager.noteOn = function(note){
	output.openPort(1);

	// On (send note 147) (note 36) (message 127)
	output.sendMessage([147,note,100]);

	console.log("Sent Midi Note On -- " + note);
};

midiManager.noteOff = function(note){

	// On (send note 147) (note 36) (message 127)
	output.sendMessage([131,note,100]);
	output.closePort(1);

	console.log("Sent Midi Note Off -- " + note);
};

// (knob 176) (controller 22) (message 1)
//output.sendMessage([176,22,1]);
