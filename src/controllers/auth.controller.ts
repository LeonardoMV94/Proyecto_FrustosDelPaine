import { Router } from "express";
import type { Response, Request, NextFunction } from 'express'
import { UsuarioRequest } from '../models/ususarios.model'
import passport from "passport";
import jwt from 'jsonwebtoken';

const router = Router();

interface CustomRequest<T> extends Request {
    body: UsuarioRequest
    user: UsuarioRequest
}

router.post(
    '/login',
    passport.authenticate('local', { session: false }),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user: any = req.user;
            console.log(`login: body `, req.body)

            if (!user) {
                return res.status(401).json({
                    message: 'Invalid username or password'
                });
            }
            const payload = {
                sub: user.usuario.correo,
                role: user.usuario.rol
            };
            const token = jwt.sign(payload, 'botitas', {expiresIn: '3h'}); // payload, secret key, expiration time
            res.json({ user, token });
        } catch (error) {
            next(error);
        }
    }
);


export default router;