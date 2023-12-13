import bcrypt from 'bcrypt';
import boom from '@hapi/boom';
import { Strategy } from 'passport-local';

import * as UsuariosService from "@services/usuarios.service";

// const { Strategy } = passport;
const service = UsuariosService;

const LocalStrategy = new Strategy({ usernameField: "correo", passwordField: "pass_encrypt" }, async (correo, passUsuario, done) => {
    try {
        const usuario = await service.getOneUsuarioByCorreo(correo);
        if (!usuario) {
            done(boom.unauthorized(), false);
        }
        const isMatch = await bcrypt.compare(passUsuario, usuario.Colaboradores.correo);
        if (!isMatch) {
            done(boom.unauthorized(), false);
        }
        //console.log('autorizado!: ', colaborador.dataValues.rut_colaborador)

        done(null, usuario!);

    } catch (error) {
        done(error, false);
    }
});

export default LocalStrategy;