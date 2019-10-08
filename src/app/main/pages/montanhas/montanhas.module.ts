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


const routes: Routes = [
    { path: '', component: MontanhasComponent}
]


@NgModule({
    imports: [
        CommonModule,
        [RouterModule.forChild(routes)],
        MatButtonModule,
        FuseSidebarModule,
        FuseDemoModule,
        FuseSharedModule,
        MatDividerModule,
        MatIconModule,
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
    
    ],
    exports     : [
        FuseDemoContentComponent
    ],
    declarations: [MontanhasComponent]
})
export class MontanhasModule {}
