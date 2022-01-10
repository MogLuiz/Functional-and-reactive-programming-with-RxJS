let p = new Promise((keepPromise) => keepPromise(["Ana", "Bia", "Carlos", "Luiz"]))

p
    .then(res => res[0])
    .then(first => first[0])
    .then(letter => letter.toLowerCase())
    .then(lowerCaseLetter => console.log(lowerCaseLetter))