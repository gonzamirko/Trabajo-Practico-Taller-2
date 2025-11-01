import {type Request, type Response} from "express";
import { UsuarioSevice } from "../services/usuario.service";
import { UsuarioRepository } from "../repository/usuario.repository";

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

    public login = async (req: Request, res: Response) => {
        try {
      
          const { email, password } = req.body;
      
          const usuarioEmail = await usuarioService.obtenerUsuarioPorEmail(email);
          //console.log('Usuario encontrado:', usuarioEmail);
      
          if (!usuarioEmail) {
            return res.status(400).json({ message: "Usuario no encontrado" });
          }
      
          if (usuarioEmail.contrasenia != password) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
          }
      
          res.status(200).json({ message: "Login exitoso", usuarioEmail });
          
          res.redirect('/home');
          
        } catch (error) {
          res.status(500).json({ message: "Error interno en el servidor", error });
        }
      };
      
}