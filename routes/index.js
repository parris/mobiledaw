// require Mobile functionality
var midiManager = require('../app/miditodaw');



/*
 * GET home page.
 */

exports.index = function(req, res){

	midiManager.guitar(1, '');
	midiManager.guitar(0, '');

	midiManager.keys(1, '');
	midiManager.keys(0, '');

	midiManager.drums(1, '');
	midiManager.drums(0, '');

	midiManager.sax(1, '');
	midiManager.sax(0, '');

	midiManager.bass(1, '');
	midiManager.bass(0, '');

    res.render('index', { title: 'Let\'s Jam' });
};

exports.html = function(req, res) {
    res.render('instruments/' + req.params.file);
};
