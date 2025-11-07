import { UsuarioRepository } from "../repository/usuario.repository";

export class UsuarioSevice {

    constructor( private usuarioRepository:UsuarioRepository) {}

    async obtenerUsuarioPorEmail(email:string){
        return await this.usuarioRepository.findUsuarioByEmail(email);
    }

    async obtenerUsuarioPorId(id:number){
        return await this.usuarioRepository.findUsuarioById(id);
    }
    
    async registrarUsuario(data: {[key: string]: any}){
        const {id_usuario, 
               nombre, 
               apellido, 
               email, 
               contrasenia, 
               direccion} = data;

        const usuarioEncontradoConEmail = await this.usuarioRepository.findUsuarioByEmail(email);
        const usuarioEncontradoConContrasenia = await this.usuarioRepository.findUsuarioByPassword(contrasenia);

        if(!email.includes('@') || !email.includes('.com')){
            throw new Error(' El Email tiene que tener el "@" y el ".com" ');
        }

        if(usuarioEncontradoConEmail || usuarioEncontradoConContrasenia){
            throw new Error('Email y contraseña ya registrados, intente con unos nuevos');
        }

        return await this.usuarioRepository.
        registrarUsuario({id_usuario,nombre,apellido,email,contrasenia,direccion});       
    }
}