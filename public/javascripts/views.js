(function() {

    function getInstrument(instrument) {
        return $.get('/instruments/' + instrument);
    }

    $(function() {
        var socket = io.connect('http://localhost:3000'),
            instrument;

        // TODO: remember to read current socket state, page refresh != new connection
        socket.on('assign', function(data) {
            instrument = data.instrument;
            getInstrument(instrument).done(function(response){
                $('#layout').html(response);

                $('.play-note').on('mousedown', function() {
                    socket.emit('note', {
                        value: 1,
                        status: 1
                    });
                });

                $('.play-note').on('mouseup', function() {
                    socket.emit('note', {
                        value: 1,
                        status: 0
                    });
                });
            });
        });


    });

}());
