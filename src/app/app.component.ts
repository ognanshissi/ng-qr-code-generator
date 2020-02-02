import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-mat';

  loading = false;

  formData: FormGroup;

  qrCodeData: any = null;

  @ViewChild('qrcoderef', { static: false }) qrcoderef: ElementRef;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formData = this.fb.group({
      firstName: new FormControl(null),
      lastName: new FormControl(null)
    });

  }


  generateQRCode() {
    this.qrCodeData = null;

    setTimeout(() => {
      let data = '';
      Object.keys(this.formData.value).forEach(item => {
        if (this.formData.value[item]) {
          data = data + `${item}: ${this.formData.value[item]}/`;
        }
      });
      this.qrCodeData = data;
    }, 500);
  }

  print() {
    window.print();
  }

  download() {
    const canvas = document.querySelector('#qr-code');

    canvas.toBlob(blob => {
      FileSaver.saveAs(blob, 'qr_code.jpeg');
    });

  }
}
