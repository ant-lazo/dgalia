import { SignInPageModel } from "../models/sign-in.model";
import { PageMapper } from '../../../core/interfaces/page-mapper'

export class SignInPageMapper implements PageMapper<SignInPageModel> {
    getUiElementa(json: any): SignInPageModel {
        return new SignInPageModel({
            title: json.title,
            emailAddressInput: json.emailAddressInput,
            passwordInput: json.passwordInput,
            rememberLabel: json.rememberLabel,
            forgotPasswordLabel: json.forgotPasswordLabel,
            signInButtonText: json.signInButtonText,
            backgroudTextTitle: json.backgroudTextTitle,
            backgroudTextSubTitle: json.backgroudTextSubTitle,
            seeMoreButtonLabel: json.seeMoreButtonLabel,
            seeMoreButtonLink: json.seeMoreButtonLink,
            backgroundImageLink: json.backgroundImageLink
        });
    }
}