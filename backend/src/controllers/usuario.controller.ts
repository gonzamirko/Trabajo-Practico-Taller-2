import {type Request, type Response} from "express";
import { UsuarioSevice } from "../services/usuario.service";
import { UsuarioRepository } from "../repository/usuario.repository";

const usuarioRepository = new UsuarioRepository();
const usuarioService = new UsuarioSevice(usuarioRepository);

export class UsuarioController {
   
    constructor() {}

    public crearUsuario = async(req:Request,res:Response)=>{
        try {
            const email = req.params.email;

            const usuario = await usuarioService.obtenerUsuarioPorEmail(email);
            if (!usuario) {
                return res.status(404).json("usuario no encontrado");
            }

            res.status(200).json(usuario);

        } catch (error) {
            res.status(500).json({message:"error",error})
        }
    }
}