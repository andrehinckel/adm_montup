import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Montanha } from 'app/models/montanha';
import { MontanhaService } from 'app/services/montanha.service';
import { CidadeService } from 'app/services/cidade.service';
import { Cidade } from 'app/models/cidade';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastrar',
    templateUrl: './cadastrar.component.html',
    styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {
    idCidade = -1;
    form: FormGroup;

    montanha: Montanha;
    montanhas: Montanha[];

    cidade: Cidade;
    cidades: Cidade[];

    /**
     * Constructor
     * @param {MatDialog} _matDialog
     * @param {FormBuilder} _formBuilder
     */

    constructor(
        private _formBuilder: FormBuilder,
        private montanhaService: MontanhaService,
        private cidadeService: CidadeService,
        private router: Router
    ) {}

    ngOnInit() {
        this.form = this._formBuilder.group({
            idCidade: ['', Validators.required],
            nome: ['', Validators.required],
            altitude: ['', Validators.required],
            extensao: ['', Validators.required],
            duracao: ['', Validators.required],
            nivel: ['', Validators.required],
            idadeMinima: ['', Validators.required],
            descricao: ['', Validators.required],
            latitude: ['', Validators.required],
            longitude: ['', Validators.required]
        });

        this.obterTodasCidades();
    }

    cadastrarMontanha() {
        if (this.form.valid) {
            this.montanha = Object.assign({}, this.form.value);
            this.montanhaService.inserirMontanha(this.montanha).subscribe(
                () => {
                    this.router.navigate(['/montanha']);
                },
                error => {
                    console.log(error);
                }
            );
        }
    }

    obterTodasCidades() {
        this.cidadeService.obterTodosCidade().subscribe(
            (x: Cidade[]) => {
                this.cidades = x;
            }, error => {
                console.log(error);
            });
    }
}
