import { inject } from 'aurelia-framework';
import { CipherService } from 'service/cipher-service';

@inject(CipherService)
export class Home {
    constructor(cipherService) {
        this.cipherService = cipherService;
    }

    activate() {
        return this.cipherService.getCiphers()
                   .then(ciphers => this.ciphers = ciphers);
    }
}