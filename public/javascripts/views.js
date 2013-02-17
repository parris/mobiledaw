(function() {

    function getInstrument(instrument) {
        return $.get('/instruments/' + instrument);
    }

    $(function() {
        var socket = io.connect('http://10.0.3.36:3000'),
            instrument,
            worldClock,
            bpm,
            wholeNoteDelay,
            metronomeWidth,
            lastTime = 0,
            timeSinceLastMetronomeClick = 0,
            quarterNoteDelay = 0,
            requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

        window.requestAnimationFrame = requestAnimationFrame;

        // TODO: remember to read current socket state
        // page refresh != new connection
        socket.on('assign', function(data) {
            instrument = data.instrument;
            getInstrument(instrument).done(function(response){
                $('#layout').html(response);

                $('.play-note').on('touchstart', function(e) {
                    var $button = $(e.target);
                    socket.emit('note', {
                        value: parseInt($button.attr('data-note'), 10),
                        status: 1
                    });
                });

                $('.play-note').on('touchend', function(e) {
                    var $button = $(e.target);
                    socket.emit('note', {
                        value: $button.attr('data-note'),
                        status: 0
                    });
                });
            });
        });


        function setMetronomeWidth(width) {
            metronomeWidth = width;
        }

        /*function renderMetronome(timeStamp) {
            var delta = timeStamp - lastTime;
            timeSinceLastMetronomeClick += delta;

            if (timeSinceLastMetronomeClick > wholeNoteDelay) {
                // click logic here
                timeSinceLastMetronomeClick = 0;
            }

            // animation logic here

            lastTime = timeStamp;
            requestAnimationFrame(renderMetronome);
        }*/

        socket.on('ready', function(data) {
            worldClock = data.clock;
            bpm = data.bpm;
            quarterNoteDelay = Math.round(((60/bpm)*1000)*100000)/100000;
            wholeNoteDelay = quarterNoteDelay * 4;
            //requestAnimationFrame(renderMetronome);
        });

        $(window).on('resize', function(e) {
            setMetronomeWidth($(e.target).width());
        });

        setMetronomeWidth($(window).width());

        if (navigator.userAgent.match(/iPad/i) !== null) {
            $('#viewport').attr('viewport', 'width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no');
        }

        setTimeout(function() {
            window.scrollTo(0,1);
        }, 4);
    });

}());
