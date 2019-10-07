import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'app/models/usuario';

const url = environment.baseUrl + '/usuario';
@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) { }

    obterPeloIdUsuario(id: number): Observable<Usuario> {
        const params = new HttpParams()
            .append('id', id.toString());
        return this.http.get<Usuario>(`${url}/obterpeloid`, { params });
    }

    obterUsuarioLogado(): Observable<Usuario> {
        return this.http.get<Usuario>(`${url}/obterusuariologado`);
    }

    obterImagemUsuario(id: number): Observable<Usuario> {
        const params = new HttpParams()
            .append('id', id.toString());
        return this.http.get<Usuario>(`${url}/obterimagemusuario`, { params });
    }

    alterarUsuario(usuario: Usuario): Observable<any> {
        return this.http.put(`${url}/alterar`, usuario);
    }

    obterTodos(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${url}/obtertodos`);
    }

    uploadImagem(usuarioArquivo: File): Observable<any> {
        let formData: FormData = new FormData();
        formData.append('usuarioArquivo', usuarioArquivo, usuarioArquivo.name);

        let headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');

        return this.http.post(`${url}/upload`, formData, { headers: headers });
    }
}