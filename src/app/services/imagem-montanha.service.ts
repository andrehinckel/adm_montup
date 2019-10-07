import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ImagemMontanha } from 'app/models/imagemMontanha';
import { Observable } from 'rxjs';
import { Montanha } from 'app/models/montanha';


const url = environment.baseUrl + '/imagemmontanha';


@Injectable({
  providedIn: 'root'
})
export class ImagemMontanhaService {

constructor(private http: HttpClient) { }

    cadastro(imagemmontanha: ImagemMontanha): Observable<any>{
        return this.http.post<ImagemMontanha>(`${url}/cadastro`, imagemmontanha );
    }

    obterImagem(montanhaId: number): Observable<ImagemMontanha>{
        const params = new HttpParams()
        .append('montanhaId', montanhaId.toString())
        return this.http.get<ImagemMontanha>(`${url}/obterimagem`, { params });
    }
    apagar(): Observable<any>{
        return this.http.delete<any>(`${url}/apagar`);
    }
}
