/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    
    const sumFunction = (eachArr) => {
       return eachArr.reduce((acc, currValue) => {
            return acc + currValue;
        }, 0)
    }
    
    const sumEachArr = accounts.map(arr => {
        return sumFunction(arr);
    })
    
      return Math.max(... sumEachArr);
    
    };