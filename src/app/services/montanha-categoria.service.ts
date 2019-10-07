import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Montanha } from 'app/models/montanha';
import { Observable } from 'rxjs';
import { MontanhaCategoria } from 'app/models/montanhaCategoria';

const url = environment.baseUrl + '/montanhacategoria';

@Injectable({
  providedIn: 'root'
})
export class MontanhaCategoriaService {

constructor(private http: HttpClient) { }
    
    obterPeloId(): Observable<MontanhaCategoria> {
        return this.http.get<MontanhaCategoria>(`${url}/obterpeloid`);
    }

    obterTodosPeloIdMontanha(): Observable<MontanhaCategoria[]> {
        return this.http.get<MontanhaCategoria[]>(`${url}/obtertodos`);
    }

    relacionar(montanha: MontanhaCategoria): Observable<any>{
        return this.http.post<MontanhaCategoria>(`${url}/relacionar`, montanha);
    }

    relacionarVarios(montanhas: MontanhaCategoria[]): Observable<any>{
        return this.http.post<MontanhaCategoria[]>(`${url}/relacionarvarios`, montanhas);
    }
}
