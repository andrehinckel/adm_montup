import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MontanhasComponent } from './montanhas.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseDemoModule } from '@fuse/components';
import { FuseDemoContentComponent } from '@fuse/components/demo/demo-content/demo-content.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxMaskModule } from 'ngx-mask';

const routes: Routes = [
    { path: '', component: MontanhasComponent},
    { path: 'cadastrar', component: CadastrarComponent}
]


@NgModule({
    imports: [
        NgxMaskModule.forRoot(),
        CommonModule,
        [RouterModule.forChild(routes)],
        MatButtonModule,
        FuseSidebarModule,
        FuseDemoModule,
        FuseSharedModule,
        MatDividerModule,
        MatIconModule,
        MatDatepickerModule,
        MatTableModule,
        MatPaginatorModule,
        RouterModule,
        MatFormFieldModule,  
        MatDividerModule,
        MatListModule,
        MatButtonModule,
        MatDialogModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatMomentDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        FormsModule,
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        FuseSharedModule,
        MatDividerModule,
        MatTabsModule,
        MatButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        FuseSharedModule,
        FuseSharedModule,
        HttpClientModule,
        MatDialogModule,
        MatMomentDateModule,
    
    ],
    exports     : [
        FuseDemoContentComponent
    ],
    declarations: [MontanhasComponent, CadastrarComponent]
})
export class MontanhasModule {}
