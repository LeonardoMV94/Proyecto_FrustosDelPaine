import bcrypt from 'bcrypt';
import boom from '@hapi/boom';
import { Strategy } from 'passport-local';

import * as UsuariosService from "../../../services/usuarios.service";

// const { Strategy } = passport;
const service = UsuariosService;

const LocalStrategy = new Strategy({ usernameField: "correo", passwordField: "pass_encrypt" }, async (correo, passEncrypt, done) => {
    try {
        const user = await service.getOneUsuarioByCorreoToAuth(correo);
        console.log(`passport usuario ${user.usuario.correo}`)
        console.log(`Strategy: ${passEncrypt} ${user.usuario.password?.trim()}`)
        if (!user) {
            done(boom.unauthorized(), false);
        }
        const isMatch = await bcrypt.compare(passEncrypt, user.usuario.password!);
        if (!isMatch) {
            console.log("contraseñas no coinciden")
            done(boom.unauthorized(), false);
        }
        console.log('autorizado!: ', user.usuario.correo)

        done(null, user!);

    } catch (error) {
        done(error, false);
    }
});

export default LocalStrategy;