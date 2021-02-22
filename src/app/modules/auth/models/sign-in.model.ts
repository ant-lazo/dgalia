export class SignInPageModel {

    title: string;
    emailAddressInput: string;
    passwordInput: string;
    rememberLabel: string;
    forgotPasswordLabel: string;
    signInButtonText: string;
    backgroudTextTitle: string;
    backgroudTextSubTitle: string;
    seeMoreButtonLabel: string;
    seeMoreButtonLink: string;
    backgroundImageLink: string

    constructor(data: {
        title: string,
        emailAddressInput: string,
        passwordInput: string,
        rememberLabel: string,
        forgotPasswordLabel: string,
        signInButtonText: string,
        backgroudTextTitle: string,
        backgroudTextSubTitle: string
        seeMoreButtonLabel: string;
        seeMoreButtonLink: string;
        backgroundImageLink: string;
    }) {
        this.title = data.title;
        this.emailAddressInput = data.emailAddressInput;
        this.passwordInput = data.passwordInput;
        this.rememberLabel = data.rememberLabel;
        this.forgotPasswordLabel = data.forgotPasswordLabel;
        this.signInButtonText = data.signInButtonText;
        this.backgroudTextTitle = data.backgroudTextTitle;
        this.backgroudTextSubTitle = data.backgroudTextSubTitle;
        this.seeMoreButtonLabel = data.seeMoreButtonLabel;
        this.seeMoreButtonLink = data.seeMoreButtonLink;
        this.backgroundImageLink = data.backgroundImageLink;
    }

}