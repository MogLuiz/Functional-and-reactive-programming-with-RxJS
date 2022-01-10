let promis = new Promise((resolve) => resolve(["Ana", "Bia", "Carlos", "Luiz"]))

const getFirstName = (res) => res[0] 
const getFirstLetter = (firstName => firstName[0])
const parseToLowerCase = (letter => letter.toLowerCase())

promis
    .then(getFirstName)
    .then(getFirstLetter)
    .then(parseToLowerCase)
    .then(console.log)