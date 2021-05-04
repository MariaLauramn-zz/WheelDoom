const button = document.getElementById("spin");
const resultext = document.getElementById("result");
const group= document.getElementById("lista");
const names = ["Alisa", "Amanda", "Ana G.", "Ana L.", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmin"];

function selectName() {
    let winner = names[Math.floor(Math.random() * names.length)];
    resultext.innerHTML = winner;
    group.innerText = names;
    let indexOfWinner = names.indexOf(winner);
    let deleteName = names.splice(indexOfWinner, 1);
    if (names.length<0) {
        button.enable = false;
        return "Reload the game";
                }
    else {
        button.enable = true;
        }
}
button.addEventListener("click",selectName);





