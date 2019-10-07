import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensagem } from 'app/models/mensagem';

const url = environment.baseUrl + '/mensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

constructor(private http: HttpClient) { }

    obterTodosMensagem(): Observable<Mensagem[]>{
        return this.http.get<Mensagem[]>(`${url}/obtertodos`);
    }

    obterPeloIdMensagem(): Observable<Mensagem>{
        return this.http.get<Mensagem>(`${url}/obterpeloid`);
    }

    inserirMensagem(mensagem: Mensagem): Observable<any>{
        return this.http.post(`${url}/cadastro`, mensagem);
    }

    alterarMensagem(mensagem: Mensagem): Observable<any>{
        return this.http.put(`${url}/alterar`, mensagem);
    }

    apagarMensagem(): Observable<any> {
        return this.http.delete(`${url}/apagar`);
    }
}
