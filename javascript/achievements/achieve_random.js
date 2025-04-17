const person = [
    "../../images/achievements/"
]

const randomIndex = Math.floor(Math.random() * person.length);
const randomPerson = person[randomIndex];

document.getElementById("randomImg").setAttribute("src", randomPerson[0])
document.getElementById("randomHead").innerHTML = randomPerson[1]
document.getElementById("randomPar").innerHTML = randomPerson[2]
console.log("Рандом работает успешно")