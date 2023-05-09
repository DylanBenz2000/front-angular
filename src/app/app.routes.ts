import { RouterModule, Routes} from '@angular/router';
import { ApiComponent } from './components/api/api.component';
import { CompoProducComponent } from './components/compo-produc/compo-produc.component';



export const APP_ROUTES: Routes = [
    {
        path: 'home', component: ApiComponent
    },
    {
        path: 'crear-producto', component: CompoProducComponent
    },
    {
        path: 'editar-producto/:id', component: CompoProducComponent
    },
    {
        path: '**', pathMatch: 'full', redirectTo: 'home'
    }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});