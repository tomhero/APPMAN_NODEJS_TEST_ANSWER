function isPrime (num) {
  if(num <= 1) return false;
  const limit = Math.floor(Math.sqrt(num));
  for(let i = 2; i <= limit; i++) {
      if(num % i === 0) return false;
  }
  return true;
}

const minStep = input => {
  // put your code here !!
  let counter = 0;
  let num = input;
  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      if (isPrime(num)) {
        num--;
      } else {
        num++;
      }
    }
    console.log(num)
    counter++;
  }
  return counter;
};
module.exports = { minStep };
