class Producto{
    static contadorProductos = 0;
    constructor(nombre,precio){
        this._idProducto = ++ Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `idProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`; //Template String
    }
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){//Se limita para que no agregue mas de 5 productos
            this._productos.push(producto);
        }else{
            console.log('No se pueden agregar más productos')
        }
    }

    calcultarTotal(){
        let totalVenta = 0;
        this._productos.forEach(producto => totalVenta += producto.precio);
        return totalVenta;
    }

    mostrarOrden(){
        let productoOrden = '';
        for(let producto of this._productos){ //For simplificado
            productoOrden += '\n{' + producto.toString() + '}';
        }
        return `Orden: ${this._idOrden} Total: $${this.calcultarTotal()}, Productos: ${productoOrden}`;
    }



}

let producto1 = new Producto('Pantalon',500);
let producto2 = new Producto('Camisa',100);
let producto3 = new Producto('Cinturon',50);
console.log(producto1.toString());
console.log(producto2.toString());

let orden1 = new Orden();
orden1.agregarProducto(producto1); //Relación de agregación
orden1.agregarProducto(producto2);
console.log(orden1.mostrarOrden()); //Se imprmie la orden

let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);//Ya que tiene un limiete de 5 productos, este sexto no lo agrega
console.log(orden2.mostrarOrden());