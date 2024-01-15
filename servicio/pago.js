// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
import config from '../config.js'

const client = new MercadoPagoConfig({ accessToken: config.MP_AccessToken, options: { timeout: 5000 } });

export const preference = new Preference(client);

