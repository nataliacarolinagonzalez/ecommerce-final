import mongoose from 'mongoose'

const carritoSchema = mongoose.Schema({
    compra: Object,
    pedido: Array
},{versionKey: false})

export const CarritoModel = mongoose.model('carritos', carritoSchema)