import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chat } from 'app/models/chat';

const url = environment.baseUrl + '/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

constructor(private http: HttpClient) { }
    
    obterTodosChat(): Observable<Chat[]>{
        return this.http.get<Chat[]>(`${url}/obtertodos`);
    }

    obterPeloIdChat(): Observable<Chat>{
        return this.http.get<Chat>(`${url}/obterpeloid`);
    }

    inserirChat(chat: Chat): Observable<any>{
        return this.http.post(`${url}/cadastro`, chat);
    }
}
