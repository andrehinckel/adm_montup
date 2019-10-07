import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const url = environment.baseUrl + '/autenticacao';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
    /*jwtHelper = new JwtHelperService();
    decodedToken: any;

constructor(private http: HttpClient) { }

    login(model: any){
        return this.http.post(`${url}/login`, model).pipe(
            map((response: any) => {
            const user = response;
            if (user) {
                    localStorage.setItem('token', user.token);
                    this.decodedToken = this.jwtHelper.decodeToken(user.token);
                    sessionStorage.setItem('username', this.decodedToken.unique_name);
                }
            })
        ); 
    }

    inserir(model: any){
        return this.http.post(`${url}/cadastrar`, model);
    }

    loggedIn(){
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }
*/
}
