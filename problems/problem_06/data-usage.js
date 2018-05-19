const { readFileSync } = require('fs');
const logFilePath = __dirname + '/data-usage.log';

const raw = readFileSync(logFilePath, 'utf8');
const windowDelimiter = '\r\n'

const dataUsage = async () => {
  // put your code here !!
  const dataArray = raw.split(windowDelimiter)

  const formattedData = dataArray.map(data => {
    const row = data.split(',')
    const date = row[0]
    const username = row[1].slice(5)
    const usage = row[2].slice(5)
    return {
      username,
      usage,
      date
    }
  })

  const distinctUsername = [...new Set(formattedData.map(data => data.username))]
  const totals = []
  const avg = []

  const result = []

  for (const user of distinctUsername) {
    const filterdUserData = formattedData.filter(data => data.username === user)
    const userUsage = filterdUserData.map(data => data.usage)
    const userTotalUsage = userUsage.reduce((acc, val) => Number(acc) + Number(val))
    const userDate = [...new Set(filterdUserData.map(data => data.date))]
    let userDailyAvg = []
    for (const date of userDate) {
      const oneDayUserUsage = filterdUserData.filter(d => d.date === date).map(d => Number(d.usage))
      const userUsageDaily = oneDayUserUsage.reduce((acc, val) => acc + val)
      userDailyAvg.push(userUsageDaily)
    }
    userDailyAvg = userDailyAvg.reduce((acc, val) => acc + val) / (userDate.length)
    result.push({
      username: user,
      total: userTotalUsage,
      average: userDailyAvg
    })
  }
  
  return result
};

module.exports = { dataUsage };
