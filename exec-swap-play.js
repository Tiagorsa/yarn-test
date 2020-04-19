const { spawn } = require("child_process");

const player='play';
const filename='./media/beep-07.mp3'

const processSpawned = spawn(player, [filename]);

processSpawned.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
});

processSpawned.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});

processSpawned.on('error', (error) => {
    console.log(`error: ${error.message}`);
});

processSpawned.on("close", code => {
    console.log(`child process exited with code ${code}`);
});