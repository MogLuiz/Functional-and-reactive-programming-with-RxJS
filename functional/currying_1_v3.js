
const textWithSizeBetween = (min) => (max) => (error) => (text) => {
    const size = (text || "").trim().length
    
    if(size < min || size > max) {
        throw error
    }

    console.log(text)
}


const applyValidation = (fn) => (value) => {
    try {
        fn(value)
    } catch(e) {
        return { error: e }
    }
}
    
const forceStandardSize = textWithSizeBetween(4)(255)
const forceValidNameProduct = forceStandardSize("Invalid Name!")
const validNameProduct = applyValidation(forceValidNameProduct)


const p1 = { name: "A", price: 14.99, desc: 0.25 }

console.log(validNameProduct(p1.name))