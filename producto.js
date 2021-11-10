export default class Producto{

    constructor(codigo, nombre, cantidad, costo){

        this._codigo = codigo;
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._costo = costo;
        this._siguiente = null;
        this._anterior = null;
        this._precio = (Number(this._cantidad)*Number(this._costo));
    };

    getCodigo(){

        return this._codigo;
    }


}