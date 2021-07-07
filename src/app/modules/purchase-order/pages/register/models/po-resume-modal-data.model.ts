import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { Provider } from 'app/modules/provider/models/provider';

export class PoResumeModalRespData {
    provider: Provider;
    headquarter: Headquarter;
    registrationType: 'draft' | 'register';
    comments: string;

    constructor(data: {
        provider: Provider,
        headquarter: Headquarter,
        registrationType: 'draft' | 'register',
        commnets: string,
    }) {
        this.provider = data.provider;
        this.headquarter = data.headquarter;
        this.registrationType = data.registrationType;
        this.comments = data.commnets;
    }


}