function walidacja(){
    var wpis = 1;
    var braki="";

    var name = document.getElementById("imie").value;
    var Array = name.split(" ");
    console.log(Array.length);
    if(Array.length == 1 ){
        alert("podaj imię i nazwisko. Samo "+ Array +" nie wystarczy ");
        braki +="imie i nazwisko\n";
        wpis = 0;
    }
    if(document.getElementById("imie").value == ""){
        braki +="imie\n"
        wpis = 0;
    }
    if(document.getElementById("e-mail").value == ""){
        braki+= "e-mail\n"
        wpis=0
    }
    if(document.getElementById("ocena").value == ""){
        braki +="ocena\n";
        wpis = 0;
    }
    if(document.getElementById("data").value == ""){
        braki +="data\n";
        wpis = 0;
    }

if(wpis==1){
     alert("Obowiązkowe pola zostały wypełnione.")}
    else if(wpis == 0 ) {
    alert("Nie wypełniono obowiązkowych pól:\n" + braki)}

}
