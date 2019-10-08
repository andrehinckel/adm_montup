import { Component, OnInit } from '@angular/core';
import { Montanha } from 'app/models/montanha';
import { MontanhaService } from 'app/services/montanha.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-montanhas',
    templateUrl: './montanhas.component.html',
    styleUrls: ['./montanhas.component.scss']
})
export class MontanhasComponent implements OnInit {

    composeForm: FormGroup;

    montanha: Montanha;
    montanhas: Montanha[];

    displayedColumns: string[] = ['nome', 'altitude', 'extensao', 'duracao', 'nivel', 'latitude', 'longitude', 'acoes'];

    constructor(private montanhaservice: MontanhaService,
                public dialog: MatDialog,
                private _formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.obterTodos();
    }

    obterTodos() {
        this.montanhaservice.obterTodosMontanha().subscribe(
            (x: Montanha[]) => {
                this.montanhas = x;
            },
            error => {
                console.log(error);
            }
        );
    }

    openDialog() {
        const dialogRef = this.dialog.open(MontanhasComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
