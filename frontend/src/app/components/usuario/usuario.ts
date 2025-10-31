export class Usuario {
 
  constructor(

     public id_usuario?: number,
     public nombre: string = '',
     public apellido: string = '',
     public email: string = '',
     public password: string = '',
     public direccion: string = ''
  ){}

}
