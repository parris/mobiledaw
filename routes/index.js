// require Mobile functionality
var midiManager = require('../app/miditodaw');



/*
 * GET home page.
 */

exports.index = function(req, res){

	midiManager.sendNote();
    res.render('index', { title: 'Let\'s Jam' });
};
