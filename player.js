// Android player: pkg install sox

const player = require('play-sound')();

filename='./media/beep-07.mp3'

player.play(filename, (err) => {
    if (err) console.log(`Could not play sound: ${err}`);
});