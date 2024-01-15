//https://www.npmjs.com/package/basic-ftp
import ftp from 'basic-ftp'
import config from '../config.js'
import fs from 'fs'

class Servicio {
    constructor() {}

    async subirArchivoFTP(file) {
        // genero la instancia del cliente FTP (para subir la imágen a un servidor de archivos)
        const timeout = 0
        const client = new ftp.Client(timeout)
        client.ftp.verbose = false

        try {
            // Me conecto al servidor FTP
            await client.access({
                host: config.FTP_HOST,
                user: config.FTP_USER,
                password: config.FTP_PASS,
                secure: true
            })
            console.log('*** FTP connection OK! ***')

            console.log('*** Subiendo archivo por FTP ***')
            
            //console.log(file)
            let bytesTotal = file.size
            //console.log(bytesTotal)
            
            client.trackProgress(info => {
                let porcentaje = parseInt((info.bytes * 100) / bytesTotal)
                console.log(porcentaje + '%')
            })

            const src = file.path
            const dst = `public_html/uploads/${file.filename}`
            await client.uploadFrom(src,dst)
            console.log(' -> Upload OK!')

            client.trackProgress()

            await fs.promises.unlink(file.path)

            // Me desconecto del servidor FTP
            client.close()

            return `https://${config.FTP_USER}.000webhostapp.com/uploads/${file.filename}`
        }
        catch(error) {
            console.log('Error de conexión FTP:', error.message)
            return ''
        }
    }

    guardarArchivoFTP = async file => {
        const urlFotoFTP = await this.subirArchivoFTP(file)
        return urlFotoFTP
    }
}

export default Servicio

