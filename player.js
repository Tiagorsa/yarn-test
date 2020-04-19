// Android player: pkg install sox
// players – List of available audio players to check. Default:
//  mplayer
//  afplay
//  mpg123
//  mpg321
//  play
//  omxplayer
//  aplay
//  cmdmp3

const player = require('play-sound')(opts = {});
var filename='./media/beep-07.mp3'

player.play(filename, (err) => {
    if (err) console.log(`Could not play sound: ${err}`);
});
