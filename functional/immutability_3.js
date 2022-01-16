const person = {
    name: "Maria",
    height: "1.76",
    city: "Belo Horizonte",
    address: {
        street: "Belmiro"
    }
}

// Atribuição por Referência
// const newPerson = person
// newPerson.name = "Luizin"
// newPerson.city = "Contagem"

// Passagem por referência
const changePerson = (Person) => {
    const newPerson = { ...Person }
    newPerson.name = "Henrique"
    newPerson.city = "Betim"
    return newPerson
}

const result = changePerson(person)
console.log(result)
console.log(person)