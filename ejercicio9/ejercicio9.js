//Ascendente, de menor a mayor

function Ascendente(lista){
   let ordenar = lista;
   let ancho = ordenar.length;
   let valor = 0;
   
   for (let i = 0; i < ancho; i++) {
      for (let j = 0; j < ancho-1; j++) {
         if ( ordenar[j] > ordenar[j+1] ) {
            valor = ordenar[j];
            ordenar[j] = ordenar[j+1];
            ordenar[j+1] = valor;
         }
      }
   }
   return ordenar;
}

let lista = [15,46,21,89,21,6,0,18,-23]

console.log( Ascendente(lista) );