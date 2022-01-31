const { Observable } = require("rxjs")

const observer = new Observable(subscriber => {
    subscriber.next("RxJS")
    subscriber.next("it's")
    subscriber.next("very")
    subscriber.next("Powerful")

    if(Math.random() > 0.5) subscriber.complete()

    subscriber.error("What problem??")
})

observer.subscribe({ 
    next: console.log, 
    error: err => console.log(`Error: ${err}`), 
    complete: () => console.log("Observable is completed") 
})