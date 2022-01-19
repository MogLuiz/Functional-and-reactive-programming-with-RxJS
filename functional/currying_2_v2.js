// Currying with arrow function
const textWithSizeBetween = (min) => (max) => (error) => (text) => {
    const size = (text || "").trim().length
    
    if(size < min || size > max) {
        throw error
    }

    console.log(text)
}

// Currying with declarative function
function textWithSizeBetween2(min) {
    return function(max) {
        return function(error) {
            return function(text) {
                const size = (text || "").trim().length

                if(size < min || size > max) {
                    throw error
                }
            }
        }
    }
}

    
const forceStandardSize = textWithSizeBetween(4)(255)
const forceValidNameProduct = forceStandardSize("Invalid Name!")


const p1 = { name: "A", price: 14.99, desc: 0.25 }
// textWithSizeBetween(4)(244)("Invalid Name!")(p1.name)
// forceStandardSize("Invalid Name!")(p1.name)
forceValidNameProduct(p1.name)