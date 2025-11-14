import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { WelcomePage } from './pages/welcome-page/welcome-page';
import { ProductoDetalle} from './components/producto-detalle/producto-detalle';
import { RecoverPassword } from './pages/recover-password/recover-password';
import { DetailUsuarioComponent } from './pages/detail-usuario/detail.usuario.component';
import { Logout } from './pages/logout/logout';
import { Carrito } from './components/carrito/carrito';
import { AuthGuard } from "./api/services/auth.guard";

export const routes: Routes = [
    {path:'' , component:WelcomePage},
    {path:'home', component:Home, canActivate: [AuthGuard]},
    {path:'login', component:Login},
    {path:'register', component:Register},
    {path: 'producto/:id', component: ProductoDetalle, canActivate: [AuthGuard]},
    {path:'recoverPassword',component:RecoverPassword},
    {path: 'usuario/:id', component: DetailUsuarioComponent, canActivate: [AuthGuard]},
    {path: 'carrito',component: Carrito, canActivate: [AuthGuard]},
    {path:'**',redirectTo: ''},
    { path: 'logout', component: Logout }
];
