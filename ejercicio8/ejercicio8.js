class Producto{
   constructor(nombre,precio,cantidad){
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
   }

   descripcion(){
      console.log(
         "Nombre: " + this.nombre + ", " +
         "Precio: " + this.precio + ", " +
         "Cantidad: " + this.cantidad
      );
   }
}

const listaProductos = [
   new Producto("pollo",5000,1),
   new Producto("Arroz",1500,10),
   new Producto("Sal",1500,20),
   new Producto("Huevos",300,12),
   new Producto("Cafe",3000,30)
];

for (let i = 0; i < listaProductos.length; i++) {
   listaProductos[i].descripcion();
}