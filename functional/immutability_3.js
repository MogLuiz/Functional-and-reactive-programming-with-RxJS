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
const changePerson = (person) => {
    const newPerson = { ...person }
    newPerson.name = "Henrique"
    newPerson.city = "Betim"
    newPerson.address.street = "Santa Cecília"
    return newPerson
}

const newPerson = changePerson(person)
console.log(newPerson)
console.log(person)