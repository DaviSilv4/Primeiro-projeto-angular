import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarroseulComponent } from './carroseul.component';




@NgModule({
  declarations: [CarroseulComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [CarroseulComponent],
  exports: [CarroseulComponent]
})
export class CarroseulBasicoModule { }
