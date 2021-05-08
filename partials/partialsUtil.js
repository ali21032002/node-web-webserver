const hbs = require("hbs");

//register partials
module.exports = (dirname) => {
  console.log(dirname);
  hbs.registerPartials(dirname);
};
