import { CipherService } from 'service/cipher-service';
import { inject } from 'aurelia-framework';

@inject(CipherService)
export class CaesarCipher {
    constructor(cipherService) {
        this.cipherService = cipherService;
    }

    activate() {
        return this.cipherService.getMessages()
                   .then(messages => this.messages = messages);
    }
}