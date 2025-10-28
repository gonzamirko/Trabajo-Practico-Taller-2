import { UsuarioRepository } from "../repository/usuario.repository";

export class UsuarioSevice {

    constructor( private usuarioRepository:UsuarioRepository) {}

    async obtenerUsuarioPorEmail(email:string){
        return await this.usuarioRepository.findUsuarioByEmail(email);
    }

    
}