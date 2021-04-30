let arr = ['Pepi', 'Clau','Daniela T','Maria Laura', 'Amanda', 'Alisa','Ana G','Ana L', 'Angie', 'Daniela R' , 'Eliana',
    'Flo', 'Gaby', 'Leo', 'Inga', 'Marta', 'Nicole', 'Olga', 'Yeraldine', 'Ranju', 'Rosangely','Sonia', 'Taiza', 'Yasmin'];

let spinner = document.getElementById("spin");

    function chooseName(){
        console.log(arr[Math.floor(Math.random() * arr.length)]);

    }
spinner.addEventListener("click", chooseName);

    function nameSelector (){
        spinner = arr [Math.floor(Math.random()*arr.length)];
        message = "La seleccionada es:  ";

        }
     document.getElementById("spinner").innerHTML = message;