const { bangkokForecast } = require('./bangkok-forecast');
bangkokForecast()
  .then(console.log)
  .catch(console.error)
module.exports = { bangkokForecast };
