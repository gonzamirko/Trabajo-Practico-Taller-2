export interface Usuario {
  id_usuario?: number; 
  nombre: string;
  apellido: string;
  email: string;
  contrasenia: string;
  direccion?: string | null;
}
