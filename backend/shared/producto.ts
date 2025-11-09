export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  clasificacion: string;
  precio: number;
  rutaImagen: string;
  stock: number | null; 
  color: string;
  talle: number;
}