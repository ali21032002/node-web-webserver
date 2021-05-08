const path = require("path");
const fs = require("fs");
var logUtil = require("./logUtil");

module.exports = (app, express) => {
  app.set("view engine", "hbs");

  app.use((req, res, next) => {
    try {
      let log = `${new Date().toString()}: ${req.method} - ${req.url}`;
      logUtil.logUtil("log.txt", log);
    } catch (err) {
      console.log(err.message);
    }
    next();
  });

  app.use(express.static(path.join(logUtil.getRootDirectory(), "/public")));

  //Maintenance Mode
  app.use((req, res, next) => {
    let confBuffer = fs.readFileSync("appConfigs.json");
    let conf = JSON.parse(JSON.stringify(Buffer.from(confBuffer).toString()));

    let obj = JSON.parse(conf);
    if (obj.app.maintenance)
      res.render("maintenance", {
        authorName: obj.app.author,
      });
    else next();
  });
};
