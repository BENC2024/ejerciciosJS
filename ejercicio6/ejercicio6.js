//Palindromo
let txt = document.getElementById("texto");
let miboton = document.getElementById("miboton");
let rest = document.getElementById("rest");

miboton.addEventListener("click" , ()=>{
   let texto = txt.value.toLowerCase(); //pone el texto en minuscula
   let texto1 = ""
   let texto2 = "";
   let msj = "";

   for(i in texto){
      if (texto[i]!=" ") {
         texto1 = texto[i]+texto1;
      }
   }

   for (let i = texto.length-1; i >= 0; i--) {
      if (texto[i]!=" ") {
         texto2 = texto[i]+texto2;
      }
   }
   if (texto1==texto2) {
      msj = "Es un palindromo";
   }
   else{
      msj = "No es un palindromo";
   }
   rest.innerHTML = "<label><h1>" + msj + "</h1></label>";
   console.log(msj);
});