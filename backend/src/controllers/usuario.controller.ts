import {type Request, type Response} from "express";
import { UsuarioSevice } from "../services/usuario.service.js";
import { UsuarioRepository } from "../repository/usuario.repository.js";
import * as bcrypt from 'bcrypt';

const usuarioRepository = new UsuarioRepository();
const usuarioService = new UsuarioSevice(usuarioRepository);

export class UsuarioController {
   
    constructor() {}

    public getUsuario = async(req:Request,res:Response)=>{
        try {
            const id = Number(req.params.id);

            if (isNaN(id)) {
                return res.status(400).json("id invalido");
            }

            const usuario = await usuarioService.obtenerUsuarioPorId(id);
            
            if (usuario == null) {
                return res.status(404).json("usuario no encontrado");
            }

            res.status(200).json(usuario);

        } catch (error) {
            res.status(500).json({message:"error",error})
        }
    }

    public login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, contrasenia } = req.body; 

        if (!email || !contrasenia) {
            res.status(400).json({ error: 'Email y contraseña son obligatorios' });
            return;
        }

        const usuario = await usuarioService.obtenerUsuarioPorEmail(email);
        if (!usuario) {
      
            res.status(401).json({ error: 'Credenciales inválidas' }); 
            return;
        }
        const isPasswordValid = await bcrypt.compare(contrasenia, usuario.contrasenia);
        
        if (!isPasswordValid) {
            res.status(401).json({ error: 'Credenciales inválidas' }); 
            return;
        }

        req.session.user = { 
            email: usuario.email ,
            id_usuario: usuario.id_usuario,
            nombre: usuario.nombre,
            apellido: usuario.apellido
        }; 

        req.session.save((err: any)=> {
            if (err) {
                console.error('Error guardando sesión:', err);
                return res.status(500).json({ error: 'No se pudo guardar la sesión' });
            }
        });
        
        const { contrasenia: _, ...usuarioSinPassword } = usuario;

        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            usuario: usuarioSinPassword,
            user: req.session.user
        });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};


public register = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData = req.body;
        const { nombre, apellido, email, contrasenia, direccion } = userData;
     

        if (!nombre || !apellido || !email || !contrasenia || !direccion) {
            res.status(400).json({ 
                error: 'Todos los campos son obligatorios.' 
            });
            return;
        }
  
        if (!contrasenia || contrasenia.length < 8) {
            res.status(400).json({ 
                error: `La contraseña debe tener al menos 8 caracteres.` 
            });
            return;
        }
        const saltRounds = 10; 
        const contraseniaHasheada = await bcrypt.hash(contrasenia, saltRounds);

        const nuevoUsuario = await usuarioService.registrarUsuario({
            nombre,
            apellido,
            email,
            contrasenia: contraseniaHasheada, 
            direccion,
        });

        const { contrasenia: _, ...usuarioSinContrasenia } = nuevoUsuario;

        res.status(201).json({
            message: "Usuario registrado exitosamente",
            usuario: usuarioSinContrasenia,
        });
    } catch (error: any) {
        console.error("Error en register:", error);
      
        if (error.message.includes("@") || error.message.includes(".com") || error.message.includes("registrado")) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
};

  public getProfile = async (req: Request, res: Response)  => {
    if (!req.session.user) {
        return res.status(401).json({ logged: false });
    }
    res.json({ logged: true, user: req.session.user });
};


  public logout = (req: Request, res: Response) => {
  req.session.destroy((err: any) => {
    if (err) {
      return res.status(500).json({ error: 'Error al cerrar sesión' });
    }
    res.clearCookie('connect.sid'); 
    res.json({ message: 'Sesión cerrada exitosamente' });
  });
  
}
}