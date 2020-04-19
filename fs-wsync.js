const fs = require("fs");

const _start = (process.hrtime()[0]/60).toFixed(8);
const filename='file.txt';
const zeroPad = (num, places) => String(num).padStart(places, '0')

try {
    fs.readFile(filename, 'utf8',(err,data)=>{
      // console.log(data)
      const lines = data.split(/\r?\n/);
      i=0;
      lines.forEach((line) => {
          //console.log(typeof(line));
          i++;
          if (i%5==0) {
              //process.stdout.write(".");
              //process.stdout.write(line);
              //console.log(line);
              //line.split('').forEach((ch) => { process.stdout.write(ch); });
              //process.stdout.write('\n');
          }
        });
      console.log('\n');
      console.log(`Termino da leitura do arquivo "${filename}"`);
    });
    
    console.log('Antes --->',_start);
    console.log(`Depois -->`,(process.hrtime()[0]/60).toFixed(8));
    
  } catch (err) {
    console.error(err)
  }
