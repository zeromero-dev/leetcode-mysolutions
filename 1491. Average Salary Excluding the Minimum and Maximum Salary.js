/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
    let sorted = salary.sort((a, b) => a - b)
    sorted.shift()
     sorted.pop()
    let sum = sorted.reduce((acc, cur) => acc + cur)
    return sum/salary.length
 };