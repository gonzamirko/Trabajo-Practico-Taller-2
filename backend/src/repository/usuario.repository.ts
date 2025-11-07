import { prisma } from "../prisma";

export class UsuarioRepository {

    async findUsuarioByEmail(email:string){
        return await prisma.usuario.findUnique({
            where:{email:email}
        })
    }

    async findUsuarioByPassword(contrasenia:string){
        return await prisma.usuario.findFirst({
            where:{contrasenia:contrasenia}
        })
    }


    
    async findUsuarioById(id:number){
        return await prisma.usuario.findUnique(
        {
           where : {id_usuario:id}
        })
    }

    async registrarUsuario( data: {id_usuario: number,
                                nombre: string,
                                apellido: string,
                                email: string,
                                contrasenia: string,
                                direccion?: string
                               })
    {
        return await prisma.usuario.create({data});
    }
}