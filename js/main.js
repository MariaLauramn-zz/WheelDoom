const button = document.getElementById("spin");
const resultext = document.getElementById("result");
const names = ["Alisa", "Amanda", "Ana G.", "Ana L.", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmin"];

function selectName(){
    let winner = names[Math.floor(Math.random() * names.length)];
    resultext.innerHTML = winner;
    let indexOfWinner = names.indexOf(winner);
    let deleteName = names.splice(indexOfWinner,1);
}
button.addEventListener("click",selectName)

let group = document.getElementById("lista");
function showList(){
    let people = names.slice();
    group.innerHTML = people;
}

group.addEventListener("click",showList)
