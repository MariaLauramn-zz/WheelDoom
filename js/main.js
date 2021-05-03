const button = document.getElementById("spin");
const resultext = document.getElementById("result");
let group = document.getElementById("lista");
const names = ["Alisa", "Amanda", "Ana G.", "Ana L.", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmin"];

function selectName(){
    let winner = names[Math.floor(Math.random() * names.length)];
    resultext.innerHTML = winner;
    let indexOfWinner = names.indexOf(winner);
    let deleteName = names.splice(indexOfWinner,1);
}

function showList(){
    let lista = names.slice();
    group.innerHTML = lista;
    let deleteName = names.splice(group,1);
}
button.addEventListener("click",selectName)
names.addEventListener("load", showList)

