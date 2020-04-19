const Audic = require("audic")

filename='./media/beep-07.mp3';

const audio = new Audic(filename);

// Play Audio
audio.play();

// Pause Audio
audio.pause();