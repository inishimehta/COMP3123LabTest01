// Question-3 (Remove.js)
const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

if (fs.existsSync(logsDir)) {
  const files = fs.readdirSync(logsDir);
  for (const f of files) {
    console.log(`delete files...${f}`);
    fs.rmSync(path.join(logsDir, f));
  }
  fs.rmdirSync(logsDir);
} else {
  console.log('Logs directory does not exist');
}
