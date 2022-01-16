const person = {
    name: "Maria",
    height: "1.76",
    city: "Belo Horizonte"
}

// Atribuição por Referência
const newPerson = person

newPerson.name = "Luizin"
newPerson.city = "Contagem"

console.log(person)