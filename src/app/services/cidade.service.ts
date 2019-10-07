import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cidade } from 'app/models/cidade';

const url = environment.baseUrl + '/cidade';
@Injectable({
    providedIn: 'root'
})
export class CidadeService {

    constructor(private http: HttpClient) { }

    obterTodosCidade(): Observable<Cidade[]> {
        return this.http.get<Cidade[]>(`${url}/obtertodos`);
    }

    obterPeloIdCidade(): Observable<Cidade> {
        return this.http.get<Cidade>(`${url}/obterpeloid`);
    }

    inserirCidade(cidade: Cidade): Observable<any> {
        return this.http.post(`${url}/cadastro`, cidade);
    }

    deleteCidade(): Observable<any> {
        return this.http.delete(`${url}/apagar`);
    }

    alterarCidade(cidade: Cidade): Observable<any>{
        return this.http.put(`${url}/alterar`, cidade);
    }
}
