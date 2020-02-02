import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

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
      //
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

  }
}
