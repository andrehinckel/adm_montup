import { Component, OnInit, Input } from '@angular/core';
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

    @Input() id: number;

    montanha: Montanha = new Montanha();
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

    ObterPeloId() {
        this.montanhaservice.obterPeloIdMontanha(this.id).subscribe(
            (x: Montanha) => {
                this.id = this.montanha.id;
                this.montanha = x;
            });
    }

    excluirMontanha(montanha: Montanha) {
        this.montanha = montanha;
        this.montanhaservice.apagarMontanha(this.montanha.id).subscribe(
            () => {
                this.obterTodos();
            }, error => {
                console.log(error);
            });   
    }
}
