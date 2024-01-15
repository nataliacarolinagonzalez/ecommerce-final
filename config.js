import dotenv from 'dotenv'

dotenv.config()
//console.log(process.env)

const PORT = process.env.PORT || 8080 

const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'FILE'
const STRCNX = process.env.STRCNX || 'mongodb://127.0.0.1'
const BASE = process.env.BASE || 'test'
const FTP_HOST = process.env.FTP_HOST || ''
const FTP_USER = process.env.FTP_USER || ''
const FTP_PASS = process.env.FTP_PASS || ''
const MP_AccessToken = process.env.MP_AccessToken || ''

export default {
    MODO_PERSISTENCIA,       
    PORT,
    STRCNX,
    BASE,
    FTP_HOST,
    FTP_USER,
    FTP_PASS,
    MP_AccessToken
}