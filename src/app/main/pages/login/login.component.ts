import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'app/services/autenticacao.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { duration } from 'moment';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    model: any = {};
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _snackBar: MatSnackBar,
        private router: Router,
        private autenticacaoService: AutenticacaoService,
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        if (localStorage.getItem('token') !== null) {
            this.router.navigate(['/montanha']);
        }

        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    login() {
        this.autenticacaoService.login(this.loginForm.value).subscribe(
            () => {
                this.router.navigate(['/sample']);
                this._snackBar.open('Logado com Sucesso', 'Fechar', {
                    duration: 4000,
                });
            }, error => {
                this._snackBar.open('Falha ao tentar Logar', 'Fechar', {
                    duration: 4000,
                });
            }
        );
    }
}

