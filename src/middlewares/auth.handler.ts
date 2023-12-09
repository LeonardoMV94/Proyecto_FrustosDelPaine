import boom from '@hapi/boom';
import { UsuarioRequest } from '@src/models/ususarios.model';
import { Request, Response, NextFunction } from 'express';

interface CustomRequest<T> extends Request {
    body: T
}

const checkApiKey = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers['api'];
    if (apiKey === '123') {
        next();
    } else {
        next(boom.unauthorized());
    }
};

const checkAdminRol = (req: CustomRequest<UsuarioRequest>, res: Response, next: NextFunction) => {
    const user = req.body.usuario;
    if (user.rol == 'admin') {
        next();
    } else {
        next(boom.unauthorized());
    }
};

export { checkApiKey, checkAdminRol };