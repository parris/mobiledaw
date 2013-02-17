var midi = require('midi');
var output = new midi.output();

var midiManager = module.exports = function midi() {};

// note should be an array with 3 values
midiManager.noteOn = function(note){
	output.openPort(1);

	// On (send note 147) (note 36) (message 127)
	output.sendMessage(note);
	output.closePort(1);

	console.log("Sent Midi Note On -- " + note);
};

midiManager.noteOff = function(note){
	output.openPort(1);

	// On (send note 147) (note 36) (message 127)
	output.sendMessage(note);
	output.closePort(1);

	console.log("Sent Midi Note Off -- " + note);
};

midiManager.guitar = function (status, value) {
	var self = this;

	switch(value)
	{
	case 1:
		if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
		break;
	case 2:
	  	if(status === 0){
			self.noteOff([131,37,100]);
		} else {
			self.noteOn([147,37,100]);
		}
	  	break;
	case 3:
	  	if(status === 0){
			self.noteOff([131,38,100]);
		} else {
			self.noteOn([147,38,100]);
		}
	  	break;
	default:
	  	if(status === 0){
			self.noteOff([131,39,100]);
		} else {
			self.noteOn([147,39,100]);
		}
	  	break;
	}
};

midiManager.keys = function(value, status) {
	var self = this;

	switch(value)
	{
	case 1:
		if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
		break;
	case 2:
	  	if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
	  	break;
	case 3:
	  	if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
	  	break;
	default:
	  	if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
	  	break;
	}
};

midiManager.drums = function (value, status) {
	var self = this;

	switch(value)
	{
	case 1:
		if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
		break;
	case 2:
	  	if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
	  	break;
	case 3:
	  	if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
	  	break;
	case 4:
	  	if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
	  	break;
	default:
	  	if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
	  	break;
	}
};

midiManager.sax = function (value, status) {
	var self = this;

	switch(value)
	{
	case 1:
		if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
		break;
	case 2:
	  	if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
	  	break;
	case 3:
	  	if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
	  	break;
	default:
	  	if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
	  	break;
	}
};

midiManager.bass = function (value, status) {
	var self = this;

	switch(value)
	{
	case 1:
		if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
		break;
	case 2:
	  	if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
	  	break;
	case 3:
	  	if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
	  	break;
	default:
	  	if(status === 0){
			self.noteOff([131,36,100]);
		} else {
			self.noteOn([147,36,100]);
		}
	  	break;
	}
};



// My Parking Location -> 67001245
// (knob 176) (controller 22) (message 1)
//output.sendMessage([176,22,1]);
