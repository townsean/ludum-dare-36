import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@inject(HttpClient)
export class CipherService {
    constructor(http) {
        http.configure(config => {
            config
                .withBaseUrl('src/service');
        });

        this.http = http;
    }

    getCiphers() {
        return this.http.fetch('/ciphers.json')
                   .then(response => response.json())
                   .then(json => this.ciphers = json.ciphers);
    }

    getMessages() {
        return this.http.fetch('/messages.json')
                   .then(response => response.json())
                   .then(json => this.messages = json.messages); 
    }
}