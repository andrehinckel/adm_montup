import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Montanha } from 'app/models/montanha';
import { ImagemMontanha } from 'app/models/imagemMontanha';

const url = environment.baseUrl + '/montanha';
@Injectable({
    providedIn: 'root'
})
export class MontanhaService {

    constructor(private http: HttpClient) { }

    obterTodosMontanha(): Observable<Montanha[]> {
        return this.http.get<Montanha[]>(`${url}/obtertodos`);
    }

    obterTodosMontanhaFiltro(idCategoria: number, busca: string): Observable<Montanha[]> {
        const params = new HttpParams()
            .append('idCategoria', idCategoria.toString())
            .append('busca', busca.toString());
        return this.http.get<Montanha[]>(`${url}/obtertodos`, { params });
    }
    
    obterTodasImagem(idMontanha: number): Observable<ImagemMontanha[]> {
        const params = new HttpParams()
            .append('idMontanha', idMontanha.toString());
        return this.http.get<ImagemMontanha[]>(`${url}/obtertodasimagens`, { params });
    }

    obterPeloIdMontanha(id: number): Observable<Montanha> {
        const params = new HttpParams()
            .append('id', id.toString());
        return this.http.get<Montanha>(`${url}/obterpeloid`, { params });
    }

    inserirMontanha(montanha: Montanha): Observable<any> {
        return this.http.post(`${url}/cadastro`, montanha);
    }

    apagarMontanha(id: number): Observable<any> {
           const params = new HttpParams()
            .append('id', id.toString());
           return this.http.delete(`${url}/apagar?`, { params });
    }

    alterarMontanha(montanha: Montanha): Observable<any> {
        return this.http.put(`${url}/alterar`, montanha);
    }
}
