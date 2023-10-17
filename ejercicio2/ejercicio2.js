
const txnumero = document.getElementById("numero"); //Extraer informacion de la pagina web
const miboton = document.getElementById("boton");

let resul = document.getElementById("rest");

miboton.addEventListener("click", () => {
   let num = parseFloat(txnumero.value);
   if(isNaN(num)){
      resul.textContent = "Por favor ingrese numero";
   }
   else{
      if (num>0) {
         resul.textContent = num + " es un numero positivo";
      }
      else if (num<0) {
         resul.textContent = num + " es un numero negativo";
      }
      else{
         resul.textContent = num + " es el cero";
      }
   }
});