const person = [
    ["../../images/quote/Ahmed_B.png",
    "Будущее нашего народа в его</br> детях. Обучение и воспитание</br> молодежи должно быть нашей</br>  главной задачей.",
    "“Ахмет Байтурсынов - казахский поэт, литературовед</br> публицист, педагог, общественный деятель.”"
    ],
    ["../../images/quote/Alihan_B.png",
    "Образование необходимо</br> каждому, как воздух.",
    "“Алихан Букейханов - казахский государственный, политический</br> и общественный деятель, преподаватель, журналист и этнограф.”"
    ],
    ["../../images/quote/Mirjakip_D.png",
    "Единственная опора, единственная</br> надежда наша в образовании.</br> Дни необразованного народа</br> мрачны, а будущее туманно.",
    "“Миржакип Дулатов - казахский поэт, писатель, журналист, драматург.”"
    ]
]

const randomIndex = Math.floor(Math.random() * person.length);
const randomPerson = person[randomIndex];

document.getElementById("randomImg").setAttribute("src", randomPerson[0])
document.getElementById("randomHead").innerHTML = randomPerson[1]
document.getElementById("randomPar").innerHTML = randomPerson[2]
console.log("Рандом работает успешно")