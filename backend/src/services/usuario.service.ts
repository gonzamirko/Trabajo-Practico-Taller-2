import { Usuario } from "../../shared/usuario";
import { UsuarioRepository} from "../repository/usuario.repository";

export class UsuarioSevice {

    constructor( private usuarioRepository:UsuarioRepository) {}

    async obtenerUsuarioPorEmail(email:string){
        return await this.usuarioRepository.findUsuarioByEmail(email);
    }

    async obtenerUsuarioPorId(id:number){
        return await this.usuarioRepository.findUsuarioById(id);
    }
    async registrarUsuario(data: { [key: string]: any }) {
  const { nombre, apellido, email, contrasenia, direccion } = data;

  // 🔍 Validaciones simples
  if (!nombre || !apellido || !email || !contrasenia) {
    throw new Error("Todos los campos son obligatorios.");
  }

  if (!email.includes("@") || !email.includes(".com")) {
    throw new Error("El Email debe contener '@' y '.com'.");
  }

  // 🔎 Verificamos si ya existe el usuario por email
  const usuarioExistente = await this.usuarioRepository.findUsuarioByEmail(email);
  if (usuarioExistente) {
    throw new Error("El email ya está registrado.");
  }


  return await this.usuarioRepository.registrarUsuario({
    nombre,
    apellido,
    email,
    contrasenia,
    direccion: direccion || null,
  });
}
    
}