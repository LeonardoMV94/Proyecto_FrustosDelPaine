import { Router } from "express";
import type { Response, Request, NextFunction } from 'express'
import { UsuarioRequest } from '@models/ususarios.model'
import passport from "passport";
import jwt from 'jsonwebtoken';
import config from '@src/config';

const router = Router();

interface CustomRequest<T> extends Request {
    body: T
}

router.post('/login',
    passport.authenticate('local', { session: false }),
    async (req: CustomRequest<UsuarioRequest>, res: Response, next: NextFunction) => {
        try {
            const user = req.body.usuario;
            if (!user) {
                return res.status(401).json({
                    message: 'Invalid username or password'
                });
            }
            const payload = {
                sub: user.correo,
                role: user.rol
            };
            const token = jwt.sign(payload, 'botitas');
            res.json({ user, token });
        } catch (error) {
            next(error);
        }
    }
);


export default router;