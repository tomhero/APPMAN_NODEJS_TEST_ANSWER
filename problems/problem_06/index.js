const { dataUsage } = require('./data-usage');
dataUsage()
  .then(console.log)
  .catch(console.log)
module.exports = { dataUsage };
