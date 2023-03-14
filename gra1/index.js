
function znikanie(){
    document.getElementById("nowa").innerHTML = "";
}

function zegar(){
var i = 30;
let taskId = setInterval(() => {
    if (i > -1)  {
        document.getElementById("timer").innerText = i;
        i--;
    } else {
        clearInterval(taskId);
        document.getElementById("wraperr").innerHTML = "koniec" + " twój wynik to " + score;
    }
}, 1_000);
}





var numerek = "";
var score = 0 ;
function pytanie(){
    numerek = Math.floor(Math.random()*6);
    switch(numerek) {
        case 0 :
                document.getElementById("pytanie").innerText = "/[a-z]/";
                document.getElementById("wynik").innerText = score;
                 break;

        case 1 : 
                document.getElementById("pytanie").innerText = "/[A-Z]/";
                document.getElementById("wynik").innerText = score;
                break;

        case 2 : 
                document.getElementById("pytanie").innerText = "/[0-9]{3}/";
                document.getElementById("wynik").innerText = score;
                break;

        case 3 : 
                document.getElementById("pytanie").innerText = "/[^kot]/";
                document.getElementById("wynik").innerText = score;
                break;

        case 4 : 
                document.getElementById("pytanie").innerText = "/[^pies]/";
                document.getElementById("wynik").innerText = score;
                break;

        case 5 : 
                document.getElementById("pytanie").innerText = "/[a-zA-Z]+[0-9]{3}/";
                document.getElementById("wynik").innerText = score;
                break;

}};

let napis = "";

function sprawdz(){


    switch(numerek) {

        case 0 : 
                 napis = document.getElementById("odp").value;
                let a = /[a-z]/.test(napis);
                if(a == true){
                score++;
                document.getElementById("odpowiedz").innerText = "";
                pytanie()
                }
                else if(a == false) { 
                document.getElementById("odpowiedz").innerText = "źle"; };
                 break;

        case 1 : 
                  napis = document.getElementById("odp").value;
                  let h = /[A-Z]/.test(napis);
                 if(h == true){
                 score++;
                 document.getElementById("odpowiedz").innerText = "";
                pytanie()
                 }
                 else if(h == false) { 
                document.getElementById("odpowiedz").innerText = "źle"; };
                break;
        case 2 : 
                  napis = document.getElementById("odp").value;
                 let b = /[0-9]{3}/.test(napis);
                 if(b == true){
                 score++;
                 document.getElementById("odpowiedz").innerText = "";
                pytanie()
                 }
                 else if(b == false) { 
                document.getElementById("odpowiedz").innerText = "źle"; };
                break;
        case 3 : 
                  napis = document.getElementById("odp").value;
                 let c = /[^kot]/.test(napis);
                 if(c == true){
                 score++;
                 document.getElementById("odpowiedz").innerText = "";
                pytanie()
                 }
                 else if(c == false) { 
                document.getElementById("odpowiedz").innerText = "źle"; };
                break;
        case 4 : 
                  napis = document.getElementById("odp").value;
                 let d = /[^pies]/.test(napis);
                 if(d == true){
                 score++;
                 document.getElementById("odpowiedz").innerText = "";
                pytanie()
                 }
                 else if(d == false) { 
                document.getElementById("odpowiedz").innerText = "źle"; };
                break;
        case 5 : 
                  napis = document.getElementById("odp").value;
                 let e = /[a-zA-Z]+[0-9]{3}/.test(napis);
                 if(e == true){
                 score++;
                 document.getElementById("odpowiedz").innerText = "";
                pytanie()
                 }
                 else if(e == false) { 
                document.getElementById("odpowiedz").innerText = "źle"; };
                break;

}};


