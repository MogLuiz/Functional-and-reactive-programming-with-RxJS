class Product {

    constructor(name, amount, discount = 0.5) {
        this.name = name
        this.amount = amount
        this.discount = discount
    }

    finalAmount() {
        return this.amount * (1 - this.discount)
    }
}

const p1 = new Product("Caneta", 8.99)
console.log(p1.name)

const p2 = new Product("Geladeira",998.99)
console.log(p2.amount)
console.log(p2.finalAmount())