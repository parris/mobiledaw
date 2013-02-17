// require Mobile functionality


/*
 * GET home page.
 */

exports.index = function(req, res){

    res.render('index', { title: 'Let\'s Jam' });
};

exports.html = function(req, res) {
    res.render('instruments/' + req.params.file);
};
