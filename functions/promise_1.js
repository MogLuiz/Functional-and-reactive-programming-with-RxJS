let promis = new Promise((keepPromise) => keepPromise(["Ana", "Bia", "Carlos", "Luiz"]))

const getFirstName = (res) => res[0] 
const getFirstLetter = (firstName => firstName[0])
const parseToLowerCase = (letter => letter.toLowerCase())
const printResponse = (lowerCaseLetter => console.log(lowerCaseLetter))

promis
    .then(getFirstName)
    .then(getFirstLetter)
    .then(parseToLowerCase)
    .then(printResponse)