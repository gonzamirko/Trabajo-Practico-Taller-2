import 'express-session';

declare module 'express-session' {
  interface SessionData {
      user?: {
      id_usuario: number;
      nombre: string;
      apellido: string;
      email: string;
    }; 
  }
}