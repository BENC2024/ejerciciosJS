const miboton = document.getElementById("boton"); //Extraer informacion de la pagina web
const textnum = document.getElementById("numero");

miboton.addEventListener("click", function(){
   let msj = "";
   let num = parseInt(textnum.value);

   if (isNaN(num)) {
      alert("Por favor, ingresa un número válido.");
   }
   else{
      if (num%2 == 0) {
         msj = `${num} Es un numero par`;
      }
      else{
         msj = `${num} Es un numero impar`;
      }
      alert(msj);
      console.log(msj);
   }
});