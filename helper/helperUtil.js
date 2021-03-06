module.exports = (hbs) => {
  hbs.registerHelper("getCurrentYear", () => {
    return new Date().getFullYear();
  });

  hbs.registerHelper("screamIt", (text) => {
    return text.toUpperCase();
  });
};
