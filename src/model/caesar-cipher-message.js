export class CaesarCipherMessage {
    constructor(decodedMessage, encodedMessage, shift) {
        this.decodedMessage = decodedMessage;
        this.encodedMessage = encodedMessage;
        this.shift = shift;
    }
}