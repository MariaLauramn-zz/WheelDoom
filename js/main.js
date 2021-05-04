let button = document.getElementById("spin");
const resultext = document.getElementById("result");
const group= document.getElementById("lista");
const names = ["Alisa", "Amanda", "Ana G.", "Ana L.", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmin"];

function selectName() {
    const position = Math.floor(Math.random() * names.length);
    let winner = names[position];
    resultext.innerHTML = winner;
    names.splice(position, 1);
    group.innerText = names;
    if (names.length<0){
        button.disabled=true;
    }
}



button.addEventListener("click",selectName);





