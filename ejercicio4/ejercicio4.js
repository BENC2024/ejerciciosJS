const numero1 = document.getElementById("fname1"); //Extraer informacion de la pagina web
const numero2 = document.getElementById("fname2");

const miboton = document.getElementById("boton");

const resultado = document.getElementById("resultado");

miboton.addEventListener("click", () => {
   try{
      let num1 = parseFloat(numero1.value);
      let num2 = parseFloat(numero2.value);
      let result = 0
      if (isNaN(num1) || isNaN(num2)) {
         resultado.textContent = "Campos vacios";
      }
      else{
         result = num1 + num2;
         resultado.textContent = result;
      }
   }
   catch(error){
      resultado.textContent = "Ha ocurrido un error del tipo" + error;
   }
});
