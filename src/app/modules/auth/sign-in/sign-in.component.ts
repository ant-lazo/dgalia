import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TreoAnimations } from '@treo/animations';
import { AuthService } from 'app/core/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInPageModel } from 'app/modules/auth/models/sign-in.model';
import { SignInPageMapper } from '../mappers/sign-in.mapper';
import { PageMapper } from '../../../core/interfaces/page-mapper';

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
            email: ['watkins.andrew@company.com'],
            password: ['admin'],
            rememberMe: ['']
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void {
        // Disable the form
        this.signInForm.disable();

        // Hide the message
        this.message = null;

        // Get the credentials
        const credentials = this.signInForm.value;

        // Sign in
        this._authService.signIn(credentials)
            .subscribe(() => {

                // Set the redirect url.
                // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                // to the correct page after a successful sign in. This way, that url can be set via
                // routing file and we don't have to touch here.
                const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

                // Navigate to the redirect url
                this._router.navigateByUrl(redirectURL);

            }, (response) => {

                // Re-enable the form
                this.signInForm.enable();

                // Show the error message
                this.message = {
                    appearance: 'outline',
                    content: response.error,
                    shake: true,
                    showIcon: false,
                    type: 'error'
                };
            });
    }

    private setModel(): void {
        const json = this._activatedRoute.snapshot.data;
        if (json) {
            this.mapper = new SignInPageMapper();
            this.model = this.mapper.getUiElementa(json);
            console.log(this.model);
        }
    }

    public goToseeMorePage(link: string): void {
        window.open(link, '_blank');
    }

}
