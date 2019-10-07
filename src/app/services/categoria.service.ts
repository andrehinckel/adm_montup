import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from 'app/models/categoria';
import { environment } from 'environments/environment';

const url = environment.baseUrl + '/categoria';
@Injectable({
    providedIn: 'root'
})
export class CategoriaService {

    constructor(private http: HttpClient) { }

    obterTodosCategoria(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(`${url}/obtertodos`);
    }

    obterPeloIdCategoria(): Observable<Categoria> {
        return this.http.get<Categoria>(`${url}/obterpeloid`);
    }

    inserirCategoria(categoria: Categoria): Observable<any> {
        return this.http.post(`${url}/cadastro`, categoria);
    }

    apagarCategoria(): Observable<any>{
        return this.http.delete<any>(`${url}/apagar`);
    }

    alterarCategoria(categoria: Categoria): Observable<any>{
        return this.http.put(`${url}/alterar`, categoria);
    }
}
