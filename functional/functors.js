const nums = [1, 3, 4, 6, 7]

const newNums = nums
                    .map(num => num + 10)
                    .map(num => num * 2)


console.log( nums, newNums )                    