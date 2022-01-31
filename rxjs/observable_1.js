const { Observable } = require("rxjs")

const promise = new Promise(resolve => {
    resolve("Promise is very cool")
})

promise.then(console.log)

const observer = new Observable(subscriber => {
    subscriber.next("Observer")
    subscriber.next("is")
    subscriber.next("very")
    setTimeout(() => subscriber.next("coool"), 400)
    subscriber.next("cool")
    // Significa que eu finalizei meu observable e não tenho mais nada para mandar.
    // Logo, não será mandando mais nenhum valor a partir desse observable.
    subscriber.complete()
})

observer.subscribe(console.log)
observer.subscribe(text => console.log(text.toUpperCase()))