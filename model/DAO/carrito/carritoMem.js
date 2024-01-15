class ModelMem {

    constructor() {
        this.carrito = []
    }

    obtenerCarrito = async () => this.carrito

    guardarCarrito = async carrito => {
        carrito.id = String(parseInt(this.carrito[this.carrito.length-1]?.id || 0) + 1)
        this.carrito.push(carrito)
        return carrito
    }
}

export default ModelMem