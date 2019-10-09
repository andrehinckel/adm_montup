import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Guia } from 'app/models/guia';
import { Usuario } from 'app/models/usuario';
import { GuiaService } from 'app/services/guia.service';
import { UsuarioService } from 'app/services/usuario-meu-perfil.service';

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
    guias: Guia[];
    guia: Guia;
    usuario: Usuario;
    usuarios: Usuario[];
    displayedColumns: string[] = ['nome', 'telefone', 'instagram'];
    busca = '';
    idCidade = 0;
    idMontanha = 0;
    familia: Object[];
    urlImagem: string;
    constructor(private guiaService: GuiaService,
                private usuarioService: UsuarioService
        ) { }

    ngOnInit(): void {
        this.obterTodosGuia();
        this.obterTodosUsuario();
    }

    obterTodos() {
        this.guiaService.obterTodosGuiaFiltro(this.busca, this.idCidade, this.idMontanha).subscribe((
            _guias: Guia[]) => {
            this.guias = _guias;
        }, error => {
            console.log(error);
        });
    }

    obterTodosGuia() {
        this.guiaService.obterTodosGuia().subscribe(
            (x: Guia[]) => {
                this.guias = x;
            },
            error => {
                console.log(error);
            }
        );
    }

    obterTodosUsuario(){
        this.usuarioService.obterTodos().subscribe((
            _usuarios: Usuario[]) => {
            this.usuarios = _usuarios;
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
