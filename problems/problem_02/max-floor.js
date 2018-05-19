const maxFloor = input => {
  // put your code here !!
  let num = input
  let floor = 0
  let subtractor = 1
  while(num > subtractor) {
    floor++
    if (num === subtractor) {
      break
    } else if (num === (subtractor + 1)) {
      floor++
      break
    } else {
      num -= subtractor
      subtractor++
    }
  }
  return floor
};

module.exports = { maxFloor };
