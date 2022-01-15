const PI = 3.14

// Impure function - PI is an external value
const circleArea = (radius) => radius * radius * PI

// console.log(circleArea(10))


// Pure function -PI isn't an external value
const circleAreaPure = (radius, pi) => radius * radius * pi

console.log(circleAreaPure(10, 3.14))