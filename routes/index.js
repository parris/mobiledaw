// require Mobile functionality
var midiManager = require('../app/miditodaw');



/*
 * GET home page.
 */

exports.index = function(req, res){

	midiManager.noteOn([147,36,50]);
	midiManager.noteOff([131,36,50]);

    res.render('index', { title: 'Let\'s Jam' });
};

exports.html = function(req, res) {
    res.render('instruments/' + req.params.file);
};
