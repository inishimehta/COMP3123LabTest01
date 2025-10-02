// Question-3 (Add.js)
const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

// Ensuring Logs directory exists
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Changing current process to Logs
process.chdir(logsDir);

// Creating 10 log files with content, output names
for (let i = 0; i < 10; i++) {
  const file = `log${i}.txt`;
  fs.writeFileSync(file, `This is log file ${i}\n`, 'utf8');
  console.log(file);
}
