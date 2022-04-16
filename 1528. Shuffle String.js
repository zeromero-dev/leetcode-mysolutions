/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    const splitStr = s.split("")
    let shuffledArr = []
    
    splitStr.map((e,i) => {
       shuffledArr[indices[i]] = e})

    return shuffledArr.join("")
};