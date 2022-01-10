const workOrNot = (value, errorPossibility) => {
    return new Promise((resolve, reject) => {
       try {
        if(Math.random() < errorPossibility) reject("an error has occurred")
            
        resolve(value)
       } catch(e) {
           reject(e)
       }
    }) 
}

workOrNot("testing...", 0.1)
    .then(value => console.log(`Valor: ${value}`))
    .catch(err => console.log(`Erro: ${err}`)) 