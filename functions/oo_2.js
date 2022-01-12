class Product {
    constructor(name, amount, discount = 0.5) {
        this.name = name
        this.amount = amount
        this.discount = discount
    }

    get name() {
        return `Produto: ${this._name}`
    }

    set name(newName) {
        this._name = newName.toUpperCase()
    }

    get amount() {
        return this._amount
    }

    set amount(newAmount) {
        if(newAmount >= 0) this._amount = newAmount
    }

    get finalAmount() {
        return this.amount * (1 - this.discount)
    }
}

const p1 = new Product("Caneta", 8.99)
p1.amount = -20
console.log(p1.name)
console.log(p1.amount)


const p2 = new Product("Geladeira",10000, 0.8)
console.log(p2.amount)
console.log(p2.finalAmount)