const fs = require("fs");

const _start = (process.hrtime()[0]/60).toFixed(8);
const zeroPad = (num, places) => String(num).padStart(places, '0')

try {
    const data = fs.readFileSync('file.txt', 'utf8')
    // console.log(data)
    const lines = data.split(/\r?\n/);
    i=0;
    lines.forEach((line) => {
        //console.log(typeof(line));
        i++;
        if (i%5==0) {
            process.stdout.write(".");
            //process.stdout.write(line);
            //console.log(line);
            //line.split('').forEach((ch) => { process.stdout.write(ch); });
            //process.stdout.write('\n');
        }
        
    });
    console.log('\n');
    console.log('Antes ----------->',_start);
    console.log(`Depois (${zeroPad(i,6)})-->`,(process.hrtime()[0]/60).toFixed(8));
    
  } catch (err) {
    console.error(err)
  }
