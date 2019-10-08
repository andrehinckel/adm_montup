import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Guia } from 'app/models/guia';
import { Usuario } from 'app/models/usuario';
import { GuiaService } from './guia.service';

@Component({
    selector: 'guia',
    templateUrl: './guia.component.html',
    styleUrls: ['./guia.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class GuiaComponent implements OnInit {

    _filtroLista = '';
    guiasFiltrados: any = [];
    guias: any = [];
    guia: Guia;
    usuario: Usuario;
    displayedColumns: string[] = ['foto', 'nome', 'telefone', 'instagram'];
    busca = '';
    idCidade = 0;
    idMontanha = 0;
    familia: Object[];
    urlImagem: string;
    constructor(private guiaService: GuiaService) { }

    ngOnInit(): void {
        this.obterTodos();
        console.log(this.familia);
    }

    obterTodos() {
        this.guiaService.obterTodosGuiaFiltro(this.busca, this.idCidade, this.idMontanha).subscribe((
            _guias: Guia[]) => {
            this.guias = _guias;
        }, error => {
            console.log(error);
        });
    }


    reciverFeedback(respostaFilho) {
        this.idCidade = +respostaFilho.idCidade;
        this.idMontanha = +respostaFilho.idMontanha;
        this.obterTodos();
    }
}
