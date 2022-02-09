const fs = require('fs/promises');
const path = require('path');

const pathDir = path.join(__dirname, '..', 'client', 'build', 'static', 'js');

const run = async () => {
  try {
    if (!pathDir) return;
    const files = await fs.readdir(pathDir);
    const [file] = files.filter(f => f.endsWith('.js'));
    if (!file) return;
    const pathFile = path.join(pathDir, file);
    const data = await fs.readFile(pathFile, 'utf-8');
    const newData = data.replace(/REACT_APP_PORT:"\d{1,6}"/g, `REACT_APP_PORT:"${process.env.PORT}"`);

    await fs.writeFile(pathFile, newData);
  } catch (error) {
    console.error('replacePort.error', error);
  }
  
}

run();