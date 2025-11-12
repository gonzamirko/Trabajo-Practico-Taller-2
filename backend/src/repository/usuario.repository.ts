import { prisma } from "../prisma";
import { Usuario } from "../../shared/usuario";

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

    async registrarUsuario(usuarioData: any) {
  return await prisma.usuario.create({
    data: {
      nombre: usuarioData.nombre,
      apellido: usuarioData.apellido,
      email: usuarioData.email,
      contrasenia: usuarioData.contrasenia,
      direccion: usuarioData.direccion || null,
    },
  });

  
}

}