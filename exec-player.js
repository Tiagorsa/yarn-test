
const { exec } = require("child_process");

var player='play';
var filename='./media/beep-07.mp3'


exec(`${player} ${filename}`, (error, stdout, stderr) => {
    if (error) {
        //console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        //console.log(`stderr: ${stderr}`);
        return;
    }
    //console.log(`stdout: ${stdout}`);
});