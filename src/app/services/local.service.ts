import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Local } from 'app/models/local';

const url = environment.baseUrl + '/local';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

constructor(private http: HttpClient) { }

    obterTodosLocal(): Observable<Local[]>{
        return this.http.get<Local[]>(`${url}/obtertodos`);
    }

    obterPeloIdLocal(): Observable<Local>{
        return this.http.get<Local>(`${url}/obterpeloid`);
    }

    inserirLocal(local: Local): Observable<any>{
        return this.http.post(`${url}/cadastro`, local);
    }

    apagarLocal(): Observable<any>{
        return this.http.delete(`${url}/apagar`);
    }

    alterarLocal(local: Local): Observable<any>{
        return this.http.put(`${url}/alterar`, local);
    }
}
