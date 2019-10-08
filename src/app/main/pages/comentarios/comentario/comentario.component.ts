import { Component, OnInit } from '@angular/core';
import { Comentario } from 'app/models/Comentario';
import { Usuario } from 'app/models/usuario';
import { ComentarioService } from 'app/services/comentario.service';
import { UsuarioService } from 'app/services/usuario-meu-perfil.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})

export class ComentarioComponent implements OnInit {

    usuario: Usuario = new Usuario();
    usuarios: Usuario[];

    comentarios: Comentario[];
    comentario: Comentario = new Comentario();
    
    comentarioTexto: string;

    
    displayedColumns: string[] = ['usuario', 'comentario', 'acao'];

    constructor(private comentarioService: ComentarioService, private usuarioService: UsuarioService) { }

    ngOnInit(): void {
        this.obterTodos();
        this.obterTodosUsuario();
    }

    obterTodos(){
        this.comentarioService.obterTodosComentario().subscribe((
            _comentarios: Comentario[]) => {
            this.comentarios = _comentarios;
        }, error => {
            console.log(error);
        });
    }

    obterTodosUsuario(){
        this.usuarioService.obterTodos().subscribe((
            _usuarios: Usuario[]) => {
            this.usuarios = _usuarios;
        }, error => {
            console.log(error);
        });
    }
}
