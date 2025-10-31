import { UsuarioRepository } from "../repository/usuario.repository";

export class UsuarioSevice {

    constructor( private usuarioRepository:UsuarioRepository) {}

    async obtenerUsuarioPorEmail(email:string){
        return await this.usuarioRepository.findUsuarioByEmail(email);
    }

    async obtenerUsuarioPorId(id:number){
        return await this.usuarioRepository.findUsuarioById(id);
    }
    
}