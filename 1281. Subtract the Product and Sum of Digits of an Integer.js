/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    return String(n).split('')
        .reduce((acc, cur) => acc  * cur , 1) - String(n).split('')
        .reduce((acc, cur) => acc * 1 + cur * 1, 0)
 };