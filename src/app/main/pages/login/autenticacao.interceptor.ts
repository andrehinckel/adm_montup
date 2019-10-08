import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable()
export class AutenticaoInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['/login']);
            return next.handle(req.clone());
        } else {
            const cloneReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
            });
            return next.handle(cloneReq).pipe(
                tap(
                    succ => { },
                    err => {
                        if (err.status === 401) {
                            this.router.navigateByUrl('login');
                        }
                    }
                )
            );
        }
    }
}