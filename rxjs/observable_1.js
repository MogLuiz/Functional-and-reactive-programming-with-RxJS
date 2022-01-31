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
})

observer.subscribe(console.log)
observer.subscribe(text => console.log(text.toUpperCase()))