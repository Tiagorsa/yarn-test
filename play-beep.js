  // If you want raw access to the player (via stdin)

  // require and stuff happened here
  var play = require('play');
  var player = false;

  // Force it to use mplayer (can be anything else)
  play.usePlayer('mplayer');
  play.on('play', function () {
    player = play.player;
  });

  play.sound('./media/beep-07.mp3');