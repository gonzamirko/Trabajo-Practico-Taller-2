import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { WelcomePage } from './pages/welcome-page/welcome-page';
import { ProductoDetalle} from './components/producto-detalle/producto-detalle';
import { RecoverPassword } from './pages/recover-password/recover-password';

export const routes: Routes = [
    {path:'' , component:WelcomePage},
    {path:'home', component:Home},
    {path:'login', component:Login},
    {path:'register', component:Register},
    {path: 'producto/:id', component: ProductoDetalle},
    {path:'recoverPassword',component:RecoverPassword},
    {path:'**',redirectTo: ''}
];
