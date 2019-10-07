import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from 'app/models/Comentario';

const url = environment.baseUrl + '/comentario';
@Injectable({
    providedIn: 'root'
})
export class ComentarioService {
    
    constructor(private http: HttpClient) { }

    obterTodosComentario(): Observable<Comentario[]> {
        return this.http.get<Comentario[]>(`${url}/obtertodos`);
    }

    obterPeloIdComentario(): Observable<Comentario[]> {
        return this.http.get<Comentario[]>(`${url}/obterpeloid`);
    }

    inserirComentario(comentario: Comentario): Observable<any> {
        return this.http.post(`${url}/cadastro`, comentario);
    }

    apagarComentario(): Observable<any> {
        return this.http.delete(`${url}/apagar`);
    }
    
    alterarComentario(comentario: Comentario): Observable<any>{
        return this.http.put(`${url}/alterar`, comentario);
    }
}