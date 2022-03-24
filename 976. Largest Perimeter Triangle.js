/**
 * @param {number[]} nums
 * @return {number}
 */
 var largestPerimeter = function(nums) {
    let sorted = nums.sort((a, b) => b - a)
    for (let i = 0; i < sorted.length; i++) {
        let first = sorted[i]
        let second = sorted[i + 1]
        let third = sorted[i + 2]
        if (first < second + third) {
            return first + second + third
        }
    }
	return 0
};