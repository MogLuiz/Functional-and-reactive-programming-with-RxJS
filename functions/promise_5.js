const workOrNot = (value, errorPossibility) => {
    return new Promise((resolve, reject) => {
        if(Math.random() < errorPossibility) reject("an error has occurred")
            
        resolve(value)
    })
}