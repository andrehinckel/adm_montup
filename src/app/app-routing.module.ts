import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MontanhasComponent } from './main/pages/montanhas/montanhas.component';
import { LoginComponent } from './main/pages/login/login.component';
import { GuiaComponent } from './main/pages/guias/guia.component';


const routes: Routes = [    
    { path: 'montanha', loadChildren: () => import('./main/pages/montanhas/montanhas.module').then(x => x.MontanhasModule)},
    { path: 'login', component: LoginComponent },
    { path: 'guia', component: GuiaComponent}

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
