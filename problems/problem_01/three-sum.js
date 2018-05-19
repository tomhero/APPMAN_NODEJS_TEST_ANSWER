const threeSum = (nums, target) => {
  // put your code here !!
  const afterMath = [];
  for (let i = 0; i <= (nums.length) - 3; i++) {
    const firstNum = nums[i];

    for (let j = (i + 1); j <= (nums.length) - 2; j++) {
      const subTmpInnerArray = nums.slice(j);
      const secondNum = nums[j];

      for (let k = (j + 1); k <= (nums.length) - 1; k++) {
        const superSubTmpInnerArray = nums.slice(k);
        const thirdNum = nums[k];
  
        if (firstNum + secondNum + thirdNum === target) {
          afterMath.push([i, j, k]);
        }
      }
    }
    
  }
  return afterMath;
};

module.exports = { threeSum };
