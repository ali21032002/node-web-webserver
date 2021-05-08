const fs = require("fs");
const path = require("path");

var getRootDirectory = () => path.dirname(require.main.filename);

var readConfig = () => {
  try {
    let confs = fs.readFileSync("appConfigs.json");
    let conf = JSON.parse(confs.toString());
    return conf.app.logging;
  } catch (err) {
    throw err;
  }
};

var logUtil = (filePath, log) => {
  try {
    let log1 = `${log}\n`;
    if (readConfig()) fs.appendFile(filePath, log1, (err) => {});
    else console.log(log);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  logUtil,
  getRootDirectory,
};
