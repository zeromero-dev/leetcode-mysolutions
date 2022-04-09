/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let map = new Map();
    map.set(n);
    while(n > 1) {
        let sum = 0;
        while(n > 0) {
            let remainder = n % 10;
            sum += remainder * remainder;
            n = Math.floor(n / 10);
        }
        if(map.has(sum)) return false;
        map.set(sum, 0);
        n = sum;
    }
    return true;
};