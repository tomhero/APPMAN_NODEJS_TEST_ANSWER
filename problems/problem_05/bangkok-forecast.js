const axios = require('axios');
const moment = require('moment');
const BNK = 'Bangkok,TH';
const METRIC = 'metric';
const DAY_AMOUNT = 7;
const APP_ID = 'e5446373eef6128679c7fa8a1951d788';
const URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';

const bangkokForecast = async () => {
  // put your code here !!
  const response = await axios.get(`${URL}?q=${BNK}&units=${METRIC}&cnt=${DAY_AMOUNT}&appid=${APP_ID}`);
  const weatherData = response.data.list.map(data => {
    const date = moment(data.dt * 1000);
    return {
      date: date.format('YYYY-MM-DD'),
      minTemp: data.temp.min,
      maxTemp: data.temp.max
    }
  });
  return weatherData
};

module.exports = { bangkokForecast };
