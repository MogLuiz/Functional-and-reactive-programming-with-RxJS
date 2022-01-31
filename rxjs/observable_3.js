const { Observable, noop } = require("rxjs")

const streamEntry = (min, max) => {
    if(min > max) [min, max] = [max, min]
    return new Observable(subscriber => {
        for (let i = min; i <= max; i++) subscriber.next(i)

        subscriber.complete()
    })
    
}

streamEntry(4, 5)
    .subscribe({
        next: console.log,
        error: noop,
        complete: () => console.log("Completo")
    })