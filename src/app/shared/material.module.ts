import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';


const MODULES_LIST = [
  MatSliderModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule
];

@NgModule({
  imports: MODULES_LIST,
  exports: MODULES_LIST
})
export class MaterialModule {

}
