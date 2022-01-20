const composer = (...fns) => (value) => {
    return fns.reduce((fn, acc) => {
        return fn(acc)
    }, value)
}