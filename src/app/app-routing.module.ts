import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MontanhasComponent } from './main/pages/montanhas/montanhas.component';


const routes: Routes = [    
    { path: 'montanhas', component: MontanhasComponent }

];
@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
