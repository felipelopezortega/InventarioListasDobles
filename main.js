import Producto from "./producto.js";
import Inventario from "./inventario.js";

let inventario1 = new Inventario();
let producto1 = new Producto(434, "Arroz Extra 100gr", 2, 12.50);
let producto2 = new Producto(658, "Cereal Zucaritas 400gr", 1, 49);
let producto3 = new Producto(222, "Papel Higiénico Pétalo 30 rollos", 3, 29.90);
let producto4 = new Producto(435, "Vino Lambrusco 750 ml", 1, 119);
let producto5 = new Producto(654, "Palomitas ActII 30gr", 6, 7.50);
let producto6 = new Producto(999, "Playera interior pack 3", 2, 129.99);

//Aquí se están agregando productos al inventario
console.log(inventario1.agregar(producto1));
console.log(inventario1.agregar(producto2));
console.log(inventario1.agregar(producto3));
console.log(inventario1.agregar(producto4));

//Aquí se enlistan todos los productos del inventario
console.log(inventario1.listar());

//Aquí se realizan búsquedas sobre productos mediante el código (identificador)
/*console.log(inventario1.buscar(989));
console.log(inventario1.buscar(999));
console.log(inventario1.buscar(222));

//Aquí se insertan productos al inventario
console.log(inventario1.insertar(producto5,2));
console.log(inventario1.insertar(producto6,4));*/

//Aquí se enlistan de manera inversa los productos del inventario
console.log(inventario1.listarInverso());
