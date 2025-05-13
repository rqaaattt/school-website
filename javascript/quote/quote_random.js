const person = [
    ["../../images/quote/Ahmed_B.png",
    "Будущее нашего народа в его детях. Обучение и воспитание молодежи должно быть нашей главной задачей.",
    "“Ахмет Байтурсынов - казахский поэт, литературовед публицист, педагог, общественный деятель.”"
    ],
    ["../../images/quote/Alihan_B.png",
    "Образование необходимо каждому, как воздух.",
    "“Алихан Букейханов - казахский государственный, политический и общественный деятель, преподаватель, журналист и этнограф.”"
    ],
    ["../../images/quote/Mirjakip_D.png",
    "Единственная опора, единственная надежда наша в образовании. Дни необразованного народа= мрачны, а будущее туманно.",
    "“Миржакип Дулатов - казахский поэт, писатель, журналист, драматург.”"
    ]
]

const randomIndex = Math.floor(Math.random() * person.length);
const randomPerson = person[randomIndex];

document.getElementById("randomImg").setAttribute("src", randomPerson[0])
document.getElementById("randomHead").innerText = randomPerson[1]
document.getElementById("randomPar").innerText = randomPerson[2]
console.log("Рандом работает успешно")