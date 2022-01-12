function Product(name, amount) {
    this.name = name
    this.amount = amount

    let private = 3
}

const p1 = new Product("Caneta", 8.99)
console.log(p1.name)

const p2 = new Product("Geladeira",998.99)
console.log(p2.amount)

