const nums = [1, 3, 4, 6, 7]

const newNums = nums
                    .map(num => num + 10)
                    .map(num => num * 2)


// console.log(nums, newNums)                    

function typeSafe(value) {
    return {
        value,
        isInvalid() {
            return this.value === null || this.value === undefined
        },
        map(fn) {
            if(this.isInvalid()) return typeSafe(null)
            const newValue = fn(this.value)
            return typeSafe(newValue)
        }
    }
}

const result = typeSafe("This is a text")
    .map(t => t.toUpperCase())
    .map(t => null)
    .map(t => t.split("").join(" "))

console.log(result.value)