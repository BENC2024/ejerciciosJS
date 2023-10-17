const txtnum = document.getElementById("valor"); //Extraer informacion de la pagina web
const miboton = document.getElementById("miboton");
const txt = document.getElementById("resultado");

miboton.addEventListener("click", ()=>{
   let num = parseInt(txtnum.value);

   let i = 0;
   let msj = "";
   if (isNaN(num))
   {
      msj = "Porfavor ingrese numero";
   }
   else{
      if (num<=0) {
         msj = "Solo numeros positivos";
      }
      else{
         while (i<=num) {
            if (i%2==0) {
               msj = msj + " " + i;
            }
            i++;
         }
      }
   }
   txt.textContent = msj;
});