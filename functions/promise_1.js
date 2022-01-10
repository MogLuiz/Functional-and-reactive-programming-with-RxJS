let p = new Promise((keepPromise) => keepPromise(["Ana", "Bia", "Carlos"]))

p.then(res => console.log(res))