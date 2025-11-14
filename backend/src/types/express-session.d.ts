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

declare module "express-serve-static-core" {
  interface Request {
    session: Session & Partial<SessionData>;
  }
}