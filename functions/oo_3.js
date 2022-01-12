function Product(name, amount, discount = 0.15) {
    this.name = name
    this.amount = amount
    this._discount = discount

    this.finalAmount = function () {
        return this.amount * (1 - this._discount)
    }
}

Product.prototype.log = function() {
    console.log(`Nome: ${this.name} Preço: ${this.amount}`)
}

Object.defineProperty(Product.prototype, "discount", {
    get: function() {
        return this._discount
    },
    set: function(newDiscount) {
        if(newDiscount >= 0 && newDiscount <= 1) this._discount = newDiscount
    }
})

Object.defineProperty(Product.prototype, "discountString", {
    get: function() {
        return `${this._discount * 100}% de desconto`
    }
})

const p1 = new Product("Caneta", 8.99)
console.log(p1.name)
p1.log()

const p2 = new Product("Geladeira",998.99)
console.log(p2.amount)
console.log(p2.finalAmount())
console.log(p2.discount)
console.log(p2.discountString)

 