import { prisma } from "../prisma";

export class UsuarioRepository {

    async findUsuarioByEmail(email:string){
        return await prisma.usuario.findUnique({
            where:{email:email}
        })
    }
    
}