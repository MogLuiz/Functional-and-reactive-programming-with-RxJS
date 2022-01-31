const { Observable } = require("rxjs")

const promise = new Promise(resolve => {
    resolve("Promise is very cool")
})

promise.then(console.log)

const observer = new Observable(subscriber => {
    subscriber.next("Observer is very cool")
})

observer.subscribe(console.log)