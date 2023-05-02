 const wagi = [7,3,1,7,3,1,7,3];
 const alfabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','W','X','Y','Z'];
    function generator(){
let numer = "";
let LosowaLiczba = 0;
let LosowaLitera = 0;
let Zbiorliczb = "";
let suma = 0;
// losowanie liter i mnożenie ich przez odpowiednie wagi
for(let i = 0;i<3;i++){
 LosowaLitera =  Math.floor((Math.random())*9);
numer += alfabet[LosowaLitera];
suma += (alfabet.lastIndexOf(numer[i]) + 10) * wagi[i];}
//losowanie liczb i mnożenie ich przez odpowiednie wagi
for(let a = 0;a<5;a++ ){
LosowaLiczba =  Math.floor((Math.random())*9);
Zbiorliczb += LosowaLiczba;
suma += Zbiorliczb[a] * wagi[a];}
//liczenie cyfry kontrolnej i składanie numeru dowodu 
let kontrolna = suma % 10;
document.getElementById("numer").innerText = numer + kontrolna + Zbiorliczb;  
     }