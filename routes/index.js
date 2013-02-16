// require MIDI
// require Mobile functionality


/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Let\'s Jam' });
};
