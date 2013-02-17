
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    _ = require('underscore'),
    fs = require('fs'),
    app = express(),
    midiManager = require('./app/miditodaw'),
    instruments = ['drums', 'bass', 'keys', 'sax', 'guitar'],
    connections = 0,
    maxConnections = 5,
    bpm = 140,
    clockSync,
    io,
    server;

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.set('view engine', 'jade');
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/instruments/:file', routes.html);

server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    var instrument;
    if (connections >= maxConnections) {
        socket.emit('roomFull');
        return;
    }

    instrument = instruments.pop();
    socket.set('instrument', instrument, function() {
        console.log('assigned instrument: ' + instrument);
        socket.emit('assign', { instrument: instrument });
        connections++;

        if (connections === 5) {
            clockSync = Date.now();
            // tell all sockets we are ready
            io.sockets.emit('ready', {
                clock: clockSync,
                bpm: bpm
            });
        }
    });

    socket.on('note', function(note) {
        socket.get('instrument', function(err, instrument) {

          midiManager.guitar(1, '');
          setTimeout(midiManager.guitar(0, ''), 5000);

          // midiManager.keys(1, '');
          // midiManager.keys(0, '');

          // midiManager.drums(1, '');
          // midiManager.drums(0, '');

          // midiManager.sax(1, '');
          // midiManager.sax(0, '');

          // midiManager.bass(1, '');
          // midiManager.bass(0, '');


           console.log(instrument + ': midi ' + note.value + ', ' + note.status);
        });
    });

    socket.on('disconnect', function () {
        socket.get('instrument', function(err, instrument) {
            console.log('put instrument away: ' + instrument);
            instruments.push(instrument);
            connections--;
        });
    });
});
