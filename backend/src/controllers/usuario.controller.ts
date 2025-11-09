import {type Request, type Response} from "express";
import { UsuarioSevice } from "../services/usuario.service";
import { UsuarioRepository } from "../repository/usuario.repository";
import { Usuario } from "../../shared/usuario";

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
      res.status(404).json({ error: 'Usuario no encontrado' });
      return;
    }

    if (usuario.contrasenia !== contrasenia) {
      res.status(401).json({ error: 'Contraseña incorrecta' });
      return;
    }

    const { contrasenia: _, ...usuarioSinPassword } = usuario;

    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      usuario: usuarioSinPassword
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


      public register = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData = req.body as Usuario;
    const { nombre, apellido, email, contrasenia, direccion } = userData;

    const nuevoUsuario = await usuarioService.registrarUsuario({
      nombre,
      apellido,
      email,
      contrasenia,
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

}