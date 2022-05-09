import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-encypt-dcypt-component',
  templateUrl: './app.encyptdcypt.view.html',
})
export class EncyptDcyptComponent {
  title = 'EncryptionDecryptionSample';

  plainText: string = '';
  encryptText: string = '';
  encPassword: string = '';
  decPassword: string = '';
  conversionEncryptOutput: string = '';
  conversionDecryptOutput: string = '';

  constructor() {}
  //method is used to encrypt and decrypt the text
  convertText(conversion: string) {
    if (conversion == 'encrypt') {
      this.conversionEncryptOutput = CryptoJS.AES.encrypt(
        this.plainText.trim(),
        this.encPassword.trim()
      ).toString();
    }
    if (conversion === 'decrypt') {
      this.conversionDecryptOutput = CryptoJS.AES.decrypt(
        this.encryptText.trim(),
        this.decPassword.trim()
      ).toString(CryptoJS.enc.Utf8);
      alert(this.conversionDecryptOutput);
    }
  }
}
