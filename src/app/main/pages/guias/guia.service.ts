import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guia } from 'app/models/guia';
import { Usuario } from 'app/models/usuario';

const url = environment.baseUrl + '/guia';
@Injectable({
    providedIn: 'root'
})
export class GuiaService {

    constructor(private http: HttpClient) { }

    obterTodosGuia(): Observable<Guia[]> {
        return this.http.get<Guia[]>(`${url}/obtertodos`);
    }

    obterTodosGuiaFiltro(busca: string, idCidade: number, idMontanha: number): Observable<Guia[]> {
        const params = new HttpParams()
            .append('busca', busca.toString())
            .append('idCidade', idCidade.toString())
            .append('idMontanha', idMontanha.toString());

        return this.http.get<Guia[]>(`${url}/obtertodos`, { params });
    }

    inserirCertificado(guia: Guia, nomeArquivo: File): Observable<any>{

        const formData:FormData = new FormData();
        formData.append('certificado', nomeArquivo, nomeArquivo.name);
        formData.append('idCidade', guia.idCidade.toString());
        formData.append('idMontanha', guia.idMontanha.toString());
        formData.append('codigoPostal', guia.codigoPostal);
        formData.append('ocupacao', guia.ocupacao);
        formData.append('descricaoExperiencia', guia.descricaoExperiencia);
        formData.append('descricaoGuia', guia.descricaoGuia);
        formData.append('telefone', guia.telefone);
        formData.append('instagram', guia.instagram);
        

        let headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');

        return this.http.post(`${url}/cadastro`, formData, { headers: headers });
    }

    obterPeloIdGuia(id: number): Observable<Guia> {
        const params = new HttpParams()
            .append('id', id.toString());
        return this.http.get<Guia>(`${url}/obterpeloid`, { params });
    }
    
    inserirGuia(guia: Guia): Observable<any> {
        return this.http.post(`${url}/cadastro`, guia);
    }

    deleteGuia(): Observable<any> {
        return this.http.delete(`${url}/apagar`);
    }

    alterarGuia(guia: Guia): Observable<any> {
        return this.http.put(`${url}/alterar`, guia);
    }
}
