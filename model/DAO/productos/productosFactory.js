import ModelMongoDB from "./productosMongoDB.js"
import ModelFile from "./productosFile.js"
import ModelMem from "./productosMem.js"

class ModelFactory {
    static get(tipo) {
        switch (tipo) {
            case 'MEM':
                console.log('**** Producto Persistiendo en Memoria ****')
                return new ModelMem()

            case 'FILE':
                console.log('**** Producto Persistiendo en File System ****')
                return new ModelFile()

            case 'MONGODB':
                console.log('**** Producto Persistiendo en MongoDB ****')
                return new ModelMongoDB()

            default:
                console.log('**** Persistiendo en File System (default) ****')
                return new ModelFile()
        }
    }
}

export default ModelFactory