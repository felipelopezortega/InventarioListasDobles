export default class Inventario{

    constructor(){
        
        this.inicio=null;
    };

    agregar(nuevo){

        if(this.inicio==null){

           this.inicio = nuevo;

        }else{

            this._agregar(nuevo, this.inicio);
        };

        return this.inicio;
    };

    _agregar(nuevo, inicio){

        if(inicio._siguiente == null){

            inicio._siguiente = nuevo;
            nuevo._anterior = inicio;

        }else{

            this._agregar(nuevo, inicio._siguiente);

        };

    }

    listar(){

        if(this.inicio ==null){

            return "El inventario está vació";
        }

        let listar = "";

        let temp = this.inicio;

        while(temp){

            listar +=  `Código: ${temp._codigo} Nombre: ${temp._nombre} Cantidad: ${temp._cantidad} Costo: ${temp._costo} Precio: ${temp._precio}\n` 
            temp = temp._siguiente;

        };

        return listar;

    }

    listarInverso(){

        if(this.inicio ==null){

            return "El inventario está vació";
        }

        let listarIn = ""

        let temp = this.inicio

        while(temp._siguiente){

            temp = temp._siguiente
        };

        while(temp){

            listarIn +=  `Código: ${temp._codigo} Nombre: ${temp._nombre} Cantidad: ${temp._cantidad} Costo: ${temp._costo} Precio: ${temp._precio}\n`
            temp = temp._anterior
        }

        return listarIn;


    }




    buscar(codigo){

        if(this.inicio ==null){

            return "El inventario está vació";
        }

        let temp = this.inicio;

        while(temp!== null){

            if(temp._codigo == codigo){

                return temp;

            }else{

                temp = temp._siguiente;
            };

           
        };

        return "El código buscado no existe"
    };

    insertar(nuevoProducto, posicion){

        if(this.inicio ==null){

            return "El inventario está vació";
        }

        if(posicion==1){

            nuevoProducto._siguiente = this.inicio;
            this.inicio = nuevoProducto;
            this.inicio._siguiente._anterior = this.inicio;

            return this.inicio;

        }else{

            let temp = this.inicio;
            let aux = null;
            let i = 2;

            while(i<posicion && temp){

                i++
                temp = temp._siguiente;    
            }

            aux = temp._siguiente;
            temp._siguiente = nuevoProducto;
            nuevoProducto._anterior = temp;
            nuevoProducto._siguiente = aux;
            aux._anterior = nuevoProducto;

            return temp;

        }


    }

    eliminar(codigo){

        if(this.inicio ==null){

            return "El inventario está vació";
        }

        let temp = this.inicio;
        let eliminado = null;

        while(temp._siguiente){

            if(codigo == temp._siguiente._codigo){

                eliminado = temp._siguiente;
                eliminado._siguiente = null;
                eliminado._anterior = null;
                temp._siguiente._siguiente._anterior = temp;
                temp._siguiente = temp._siguiente._siguiente;

                return `La información del producto eliminado es: Código: ${eliminado._codigo} Nombre: ${eliminado._nombre} Cantidad: ${eliminado._cantidad} Costo: ${eliminado._costo} Precio: ${eliminado._precio}\n`

            }else{

                temp = temp._siguiente;
            }

            
        }

        return "El código no coincide con ningún producto registrado, por lo tanto no puede ser eliminado";



    }






}