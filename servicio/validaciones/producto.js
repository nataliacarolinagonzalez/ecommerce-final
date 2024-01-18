import Joi from 'joi'

//https://joi.dev/api/?v=17.9.1

const validar = producto => {
    const productoSchema = Joi.object({
        nombre: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9. ñáéíóúÑÁÉÍÓÚ]{3,50}$')),
        precio: Joi.number().required(), 
        stock: Joi.number().required(),
        marca: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9. ñáéíóúÑÁÉÍÓÚ]{1,50}$')),
        categoria: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9. ñáéíóúÑÁÉÍÓÚ]{3,50}$')),
        detalles: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9. ñáéíóúÑÁÉÍÓÚ]{3,50}$')),
        foto: Joi.string().required(),
        envio: Joi.required()
    })


    const { error } = productoSchema.validate(producto)
    return error
}

export default validar