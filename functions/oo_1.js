function Product(name, amount, discount = 0.15) {
    this.name = name
    this.amount = amount
    this.discount = discount

    this.finalAmount = function () {
        return this.amount * (1 - this.discount)
    }
}

const p1 = new Product("Caneta", 8.99)
console.log(p1.name)

const p2 = new Product("Geladeira",998.99)
console.log(p2.amount)
console.log(p2.finalAmount())

