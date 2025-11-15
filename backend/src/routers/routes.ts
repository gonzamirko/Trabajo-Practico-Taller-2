
import { Router } from 'express';
import { UsuarioController } from '../controllers/usuario.controller.js';
import { ProductoController } from '../controllers/producto.controller.js';
import carritoRoutes from './carrito.routes.js';



const router = Router();
const usuarioController = new UsuarioController();
const productoController = new ProductoController();


router.post('/api/usuario/register', usuarioController.register);
router.post('/api/usuario/login', usuarioController.login);
router.get('/api/productos', productoController.getProductos);
router.get('/api/productos/:id', productoController.getProductoById);
router.get('/api/usuario/perfil', usuarioController.getProfile);
router.post('/api/usuario/logout', usuarioController.logout);   
router.use('/api/carrito', carritoRoutes);



router.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Servidor funcionando' });
});


router.use((req, res) => {
    res.status(404).json({ 
        error: 'Ruta no encontrada',
        path: req.originalUrl
    });
});

export const AppRoutes = {
    routes: router
};