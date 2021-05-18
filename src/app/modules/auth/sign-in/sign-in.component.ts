import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TreoAnimations } from '@treo/animations';
import { AuthService } from 'app/core/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInPageModel } from 'app/modules/auth/models/sign-in.model';
import { SignInPageMapper } from '../mappers/sign-in.mapper';
import { PageMapper } from '../../../core/interfaces/page-mapper';
import auth from './../../../../assets/language/es/auth.json';

@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: TreoAnimations
})
export class AuthSignInComponent implements OnInit {
    signInForm: FormGroup;
    message: any;
    public model: SignInPageModel;
    private mapper: PageMapper<SignInPageModel>;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router
    ) {
        this.message = null;
        this.setModel();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.signInForm = this._formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required],
            rememberMe: ['']
        });
        this.verifyRemember();
    }


    signIn(): void {
        this.signInForm.disable();
        this.message = null;
        const credentials = this.signInForm.value;
        if (credentials.rememberMe) this._authService.setRemember(credentials.email);

        // Sign in
        this._authService.signIn(credentials)
            .subscribe(() => {

                const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
                this._router.navigateByUrl(redirectURL);

            }, (response) => {

                this.signInForm.enable();
                this.message = {
                    appearance: 'outline',
                    content: response.error.error.description,
                    shake: true,
                    showIcon: false,
                    type: 'error'
                };
            });
    }

    private setModel(): void {
        if (auth.sigIng) {
            this.mapper = new SignInPageMapper();
            this.model = this.mapper.getUiElementa(auth.sigIng);
        }
    }

    public goToseeMorePage(link: string): void {
        window.open(link, '_blank');
    }

    private verifyRemember() {
        if (this._authService.getRemember()) this.signInForm.controls.email.setValue(this._authService.getRemember());
    }

}
